import React, { Component } from 'react';
import { View } from "react-native";
import Video, { FilterType } from "react-native-video";

class player extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const videoURL = "../assets/wl_01.mp4"; //this.props.videoURL;
    const filterType = FilterType.NONE;
    return (
        <View>
        <Video
          source={{ uri: videoURL }} // Can be a URL or a local file.
          // ref={(ref) => {
          //   this.player = ref;
          // }} // Store reference
          // onBuffer={this.onBuffer} // Callback when remote video is buffering
          // onError={this.videoError} // Callback when video cannot be loaded
          controls
          paused
          muted
          filterEnable
        //   filter={filterType}
        //   style={styles.backgroundVideo}
        />
      </View>
    );
  }
}

// var styles = StyleSheet.create({
//     backgroundVideo: {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       bottom: 0,
//       right: 0,
//     },
//   });
  
export default player;


 