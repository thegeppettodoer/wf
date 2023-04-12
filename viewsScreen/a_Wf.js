import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import ViewPager from "@react-native-community/viewpager";
import VideoPlayer from "../componentes/VideoPlayer";

const config = {
  velocityThreshold: 0.01,
  directionalOffsetThreshold: 80,
  gestureIsClickThreshold: 0.01,
};

const { height } = Dimensions.get("window");

const Container = styled(ViewPager)`
  height: ${height}px;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const Center = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 0px;
  margin-top: 50px;
  position: absolute;
  left: 5px;
`;

const windowWidth = Dimensions.get("window").width; //useWindowDimensions().width;
const windowHeight = Dimensions.get("window").height; //useWindowDimensions().height;

class Wf extends Component {
  constructor(props) {
    super(props);
    // console.log('--- props >>>')
    // console.log(props)
    // console.log('<<< props ---')
    this.state = {
      play: false,
      reiniciar: false,
      myText: "I'm ready to get swiped!",
      gestureName: "none",
      backgroundColor: "#c9c9c5",
      incremental: 0,
      urlVideo:
        "https://v.pinimg.com/videos/mc/720p/59/5b/c2/595bc28e9e09df52a7f9928e816978a0.mp4",
      dataVideos: this.props.route.params.videosWf,
    };
  }

  onPlay() {
    // if (this.playerVideo) {
    // }

    if (this.state.play) {
      this.setState({ play: false, reiniciar: false });
    } else {
      this.setState({ play: true, reiniciar: true });
    }

    // console.log("this.onPlay", this.state.play);
    // console.log("this.onPlay ", this.playerVideo ? true : false);
  }

  render() {
    // const dataVideos = this.props.route.params.videosWf;

    // const dataVideos =  this.props.route.params.videosWf;
    // console.log("WF data==>", typeof dataVideos, Array.isArray(dataVideos) );
    console.log("WF navi>", "wf");

    return (
      <Container
        orientation="horizontal"
        onPageSelected={(e) => {
          // setSelected(e.nativeEvent.position);
          // setEmpezar(true);
          this.setState({ selectedx: e.nativeEvent.position, play: false });
        }}
        keyboardDismissMode={() => {
          console.log(" keyboardDismissMode ");
        }}
        initialPage={0}
        // key={2}
      >
        {Array.isArray(this.state.dataVideos) &&
          this.state.dataVideos.map((item, index) => {
            return (
              <View key={index}>
                <VideoPlayer
                  // ref={(ref) => (this.playerVideo = ref)}
                  video={item.videoUrl}
                  poster={item.poster}
                  isPlay={this.state.selectedx === index && this.state.play}
                  xkey={index}
                  reiniciar={this.state.reiniciar}
                />

                <Gradient
                  locations={[0, 0.26, 0.6, 1]}
                  colors={[
                    "rgba(26,26,26,0.6)",
                    "rgba(26,26,26,0)",
                    "rgba(26,26,26,0)",
                    "rgba(26,26,26,0.6)",
                  ]}
                >
                  <Center>
                    <AntDesign
                      name="back"
                      size={30}
                      color="red"
                      onPress={() => {
                        this.props.navigation.navigate("Home");
                      }}
                    />
                  </Center>

                  <View
                    style={{
                      // backgroundColor: "blue",
                      position: "absolute",
                      alignSelf: "center",
                      alignItems: "center",
                      marginTop: height - 200,
                    }}
                  >
                    <Text style={styles.titulo}>{item.id}</Text>
                    {!this.state.play ? (
                      <AntDesign
                        name="playcircleo"
                        size={64}
                        color={"white"}
                        onPress={() => {
                          this.onPlay();
                        }}
                      />
                    ) : (
                      <Feather
                        name="stop-circle"
                        size={64}
                        color="red"
                        onPress={() => {
                          this.onPlay();
                        }}
                      />
                    )}
                  </View>
                </Gradient>
              </View>
            );
          })}
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  background: {
    position: "absolute",
    backgroundColor: "white",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  backgroundInfo: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
    // justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
    fontSize: 40,
    fontWeight: "800",
    marginBottom: 20,
  },
  backgroundVideo: {
    width: 0,
    height: 0,
  },

  backgroundAbajo: {
    // position: "absolute",
    // flex:0,
    bottom: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  play: {
    position: "absolute",
    // flex:0,
    // alignSelf:"center",
  },
  shadow: {
    shadowColor: "red",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    // iOS
    shadowOffset: {
      width: 0, // These can't both be 0
      height: 1, // i.e. the shadow has to be offset in some way
    },
    // Android
    shadowOffset: {
      width: 0, // Same rules apply from above
      height: 1, // Can't both be 0
    },
  },
});

//  {/* {this.state.play ? (
//                     <AntDesign
//                       name="playcircleo"
//                       size={64}
//                       color={"white"}
//                       style={styles.play}
//                       onPress={() => {
//                         this.onPlay();
//                       }}
//                     />
//                   ) : (
//                     <Feather
//                       name="stop-circle"
//                       size={64}
//                       color="red"
//                       style={styles.play}
//                       onPress={() => {
//                         this.onPlay();
//                       }}
//                     />
//                   )} */}

export default Wf;
