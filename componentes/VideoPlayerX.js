import React, { useState, useEffect, Component } from "react";
import { Dimensions, View, Text } from "react-native";

import { Video } from "expo-av";
import styled from "styled-components/native";

// const Play = Video; //styled(Video)` `

const Poster = styled.ImageBackground`
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
`;
const { height, width } = Dimensions.get("window");

 

class VideoPlayerX extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,   
    };
   
  }


  _replayVideo = async () => {
    try {
      this.playbackObject.replayAsync({
        progressUpdateIntervalMillis: 5000,
        positionMillis: 0,
        shouldPlay: true,
        rate: 1.0,
        shouldCorrectPitch: false,
        volume: 1.0,
        isMuted: false,
        isLooping: true,
      });
    } catch (e) {
      console.log('>VideoPlayerX_replayVideo>',e);
    }
  };

  componentDidUpdate(){
    if (this.props.reiniciar && this.props.video && this.props.isPlay) {
      // console.log(
      //   ">VideoPlayerX>reiniciando.....",
      //   this.props.isPlay,
      //   this.props.reiniciar
      // );
      this._replayVideo();
    }

  }

  render() {
    // console.log(">VideoPlayerX> .....",this.props.video);

    return ( true ? (
      <Video
        ref={(e) => (this.playbackObject = e)}
        source={{
          uri: this.props.video,
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={this.props.isPlay}
        pause={(ref) => {
          !this.props.isPlay;
        }}
        isLooping
        onEnd={() => {
          console.log("Done!");
        }}
        useNativeControls={false}
        usePoster={true}
        posterSource={{
          uri: this.props.poster,
        }}
        posterStyle={{ width: width, height: height }}
        style={{ backgroundColor:"red", width: width, height: height,flex:1 }}
        // onPlaybackStatusUpdate={(params) => {
        //   this.setState({ count: this.state.count + 1 });
        //   console.log(this.state.count);
        // }}
        onReadyForDisplay={() => { console.log(">VideoPlayerX>onReadyForDisplay")}}
      />
    ) : (
      <Poster
        source={{
          uri: this.props.poster,
        }}
      />
    )
)


  }
}

export default VideoPlayerX;
