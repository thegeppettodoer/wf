import React, { useState, useEffect, Component } from "react";
import { Dimensions, View, Text, Image } from "react-native";

import { Video } from "expo-av";
import styled from "styled-components/native";

const Play = Video; //styled(Video)` `

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
  const [inicial, setInicial] = useState(null);
  const [videoLoad, setVideoLoad] = useState(null);
  const [playbackObject, setPlaybackObject] = useState(null);

  cargoVideo = (e,i) => {
    if (props) {
      console.log('>VideoPlayer > cargoVideo >',e,i);
      props.onCargo(e);
      return e;
    }
  };

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
    if (props.video) {
      setVideoLoad(props);
    }
    if (props.video && playbackObject) {
      // console.log('>Playing>---->',props.video)
      playbackObject.setOnPlaybackStatusUpdate(
        _onPlaybackStatusUpdate(playbackObject)
      );
    }

    if (props.reiniciar && props.video && props.isPlay) {
      _replayVideo();
      // videoRef.loadAsync(source, initialStatus = {}, downloadFirst = true)
    }
    // if (props.video && playbackObject && cargo === false) {
    // console.log(
    //   ">videoplayer>.....useEffect>", props.xkey,  props.isPlay, "-r-", props.reiniciar, props.video,  "++++"  );
    // }
  }, [props.video, props.isPlay, props.reiniciar, props.xkey]);

  return videoLoad ? (
    <View
      key={"vp" + videoLoad.video + videoLoad.xkey}
      style={{
        alignSelf: "center",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Play
        key={videoLoad.video + "-" + videoLoad.xkey}
        ref={(e) => {
          setPlaybackObject(null);
          setPlaybackObject(e);
        }}
        source={{
          uri: videoLoad.video,
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
            // handleVideoRef()
            // if (contador <= 3) {
              console.log(videoLoad.xkey + "+onLoad>", props.video);
              setVideoLoad(null);
              setVideoLoad(props);
              contador = contador + 1;
              // VideoPlayer(videoLoad);
            // }
          }
        }}
        onPlaybackStatusUpdate={(params) => {
          //   this.setState({ count: this.state.count + 1 });
          if (params.isLoaded === false && cargo === false) {
            // if (contador <= 3) {
              // console.log(videoLoad.xkey + "+contador  >", props.xkey);
              cargoVideo(false,props.xkey);
              setCargo(false);
              setVideoLoad(null);
              setVideoLoad(props);
              contador = contador + 1;

              // VideoPlayer(videoLoad);
            // }
            console.log(videoLoad.xkey + "------onPlaybackStatusUpdate>no cargo>",videoLoad.video);
          }
        }}
        onReadyForDisplay={() => {
          cargoVideo(true,props.xkey);
          setCargo(true);
        }}
        // playbackCallback={(status) => {
        //   console.log(">VideoPlayer>playbackCallback>", status);
        //   if (cargo !== status.isPlaying) {
        //     setCargo(status.isPlaying);
        //   }
        // }}
      />
      {!cargo && (
        <Image
          style={{ position: "absolute", zIndex: 0, width: 30, height: 15 }}
          source={require("../assets/dual.gif")}
        />
      )}
    </View>
  ) : (
    // <Poster
    //   key={videoLoad.key}
    //   source={{
    //     uri: videoLoad.poster,
    //   }}
    // />
    <Text>{"...Cargando..."}</Text>
  );
};
export default VideoPlayer;

{
  /* // <Text style={{position:"absolute",zIndex:0}}>{"...No Cargo..."}</Text>} */
}
