import React, { useState, useEffect, Component } from "react";
import { Dimensions, View, Text, Image, LogBox } from "react-native";

import { Video } from "expo-av";
import styled from "styled-components/native";

// const Play = Video; //styled(Video)` `

const Poster = styled.ImageBackground`
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  flex: 1;
`;
const { height, width } = Dimensions.get("window");
var contador = 0;
const VideoPlayer = (props) => {
  const [count, setCount] = useState(0);
  const [cargo, setCargo] = useState(false);
  const [inicial, setInicial] = useState(1);
  const [videoLoad, setVideoLoad] = useState(null);
  const [playbackObject, setPlaybackObject] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");

  _onPlaybackStatusUpdate = (playbackStatus) => {
    if (!playbackStatus.isLoaded) {
      // console.log(
      //   playbackStatus.isLoaded,
      //   `---Encountered a fatal error during playback:--- ${playbackStatus.error}`
      // );
      // Update your UI for the unloaded state
      if (playbackStatus.error) {
        console.log(
          `-Encountered a fatal error during playback:- ${playbackStatus.error}`
        );
        // Send Expo team the error on Slack or the forums so we can help you debug!
      }
    } else {
      // Update your UI for the loaded state

      if (playbackStatus.isPlaying) {
        console.log(">Playing>", props.video);
        // Update your UI for the playing state
      } else {
        // Update your UI for the paused state
      }

      if (playbackStatus.isBuffering) {
        // Update your UI for the buffering state
      }

      if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
        // The player has just finished playing and will stop. Maybe you want to play something else?
      }
    }
  };

  const _replayVideo = async () => {
    try {
      playbackObject.replayAsync({
        progressUpdateIntervalMillis: 5000,
        positionMillis: 0,
        shouldPlay: true,
        rate: 1.0,
        shouldCorrectPitch: false,
        volume: 1.0,
        isMuted: false,
        isLooping: true,
      });
      console.log(">VideoPlayer_replayVideo>", "ok");
    } catch (e) {
      console.log(">VideoPlayer_replayVideo>", e);
    }
  };


  useEffect(() => {

  }, []);

  useEffect(() => {
    if (props.video ) {
      setVideoLoad(props);
    }

    if (props.video && playbackObject) {
      playbackObject.setOnPlaybackStatusUpdate(
        _onPlaybackStatusUpdate(playbackObject)
      );
    }

    if (props.reiniciar && props.video && props.isPlay) {
      _replayVideo();
    }

              
    if(props.forzar){
        if (props.isPlay && videoUrl!== props.video) {  //&& videoUrl === ""
        setVideoUrl(props.video);
      } else {
        setVideoUrl('')
      }
    }else{    
      setVideoUrl(props.video);
    }
   

    return () => {//unmount
      // console.log(  ">VideoPlayer>---->",  props.xkey,  "--",  props.isPlay, "--", props.video );
    };


  }, [props.video, props.isPlay, props.reiniciar, props.xkey,inicial]);

  LogBox.ignoreAllLogs(); //Ignore all log notifications

  return videoLoad && videoUrl ? (
    <View
      key={"vp" + videoLoad.video + videoLoad.xkey}
      style={{
        alignSelf: "center",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Video
        key={videoLoad.video + "-" + videoLoad.xkey}
        ref={(e) => {
          setPlaybackObject(null);
          setPlaybackObject(e);
        }}
        source={{
          uri: videoUrl,
          overrideFileExtensionAndroid: "mp4",
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={videoLoad.isPlay}
        pause={() => {
          !videoLoad.isPlay;
        }}
        isLooping
        onEnd={() => {
          console.log("Done!");
        }}
        useNativeControls={false}
        usePoster={true}
        posterSource={{
          uri: videoLoad.poster,
        }}
        posterStyle={{
          width: width,
          height: height,
        }}
        style={{
          backgroundColor: "#000",
          width: width,
          height: height,
        }}
        onLoad={(e) => {
          if (e.isLoaded === false) {
            console.log(videoLoad.xkey + "+onLoad>", props.video);
            setVideoLoad(null);
            setVideoLoad(props);
            contador = contador + 1;
          }
        }}
        onPlaybackStatusUpdate={(params) => {
          if (params.isLoaded === false && cargo === false) {
            // cargoVideo(false, props.xkey);
            setCargo(false);
            setVideoLoad(null);
            setVideoLoad(props);
           
            contador = contador + 1;
            console.log(
              videoLoad.xkey + "------onPlaybackStatusUpdate>no cargo>",
              videoLoad.video
            );
          }
        }}
        onReadyForDisplay={() => {
          setCargo(true);
        }}
      />

      {!cargo && (
        <Image
          style={{ position: "absolute", zIndex: 0, width: 30, height: 15 }}
          source={require("../assets/dual.gif")}
        />
      )}
    </View>
  ) : (
    videoLoad && (
      <Poster
        key={videoLoad.key}
        source={{
          uri: videoLoad.poster,
        }}
        
      />
    )
    // <Text>{"...Cargando..."}</Text>
  );
};
export default VideoPlayer;
