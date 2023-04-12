import React, {
  useState,
  useEffect,
  Component,
  Fragment,
  useContext,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  RefreshControl,
  Animated,
  LogBox,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import VideoPlayer from "../componentes/VideoPlayer";

const { height } = Dimensions.get("window");
const SCREEN_WIDTH = Dimensions.get("window").width;

const xOffset = new Animated.Value(0);
var selected = 0;

const Screen = (props) => {
  var xkey = props.xkey;
  var text = props.text;
  var index = props.index;
  var item = props.item;
  var play = props.play;
  var navigation = props.navigation;

  seleccionadoFnOnPlay = (e) => {
    props.seleccionadoOnPlay(e);
  };

  return (
    <View key={"wfsfsv1" + index + 1} style={styles.scrollPage}>
      <Animated.View
        key={"wfsfsvav1" + 1 + index}
        style={[styles.screen, transitionAnimation(index)]}
        onTouchStart={() => {
          // selected = item.id;
        }}
      >
        <View style={styles.marcoArriba} key={"wfsfsvavv1" + 1 + index}>
          <AntDesign
            key={"wfsfsvava1" + index}
            name="back"
            size={40}
            color="#B00020"
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={styles.atras}
          />
        </View>
        <View style={styles.marcoInterior} key={"wfsfsvavv2" + 1 + index}>
          <Text key={"wfsfsvavvt1" + 1 + index} style={styles.pos}>
            {item.id}
          </Text>
          {item.id - 1 === selected && !play ? (
            <AntDesign
              key={"wfsfsvavva1" + index}
              name="playcircleo"
              size={64}
              color={"white"}
              onPress={() => {
                selected = props.index;
                seleccionadoFnOnPlay(index);
              }}
            />
          ) : (
            item.id - 1 === selected && (
              <Feather
                key={"wfsfsvavvf1" + index}
                name="stop-circle"
                size={64}
                color="#B00020"
                style={styles.play}
                onPress={() => {
                  selected = index;
                  seleccionadoFnOnPlay(index);
                }}
              />
            )
          )}

          {item.id - 1 !== selected && (
            <AntDesign
              key={"wfsfsvavvap1" + index}
              name="playcircleo"
              size={64}
              color={"white"}
              onPress={() => {
                selected = props.index;
                seleccionadoFnOnPlay(index);
              }}
            />
          )}
        </View>

        <VideoPlayer
          video={item.videoUrl}
          poster={item.poster}
          isPlay={item.id - 1 === selected && play} //
          xkey={item.id}
          reiniciar={false}
          forzar={true}

        />
      </Animated.View>
    </View>
  );
};

const transitionAnimation = (index) => {
  return {
    transform: [
      { perspective: 800 },
      {
        scale: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH,
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH,
          ],
          outputRange: [1, 1, 1], //0.5,1,0.5//[0.25, 1, 0.25],
        }),
      },
      {
        rotateX: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH, //-
            index * SCREEN_WIDTH,
            (index + 1) * SCREEN_WIDTH, //+
          ],
          outputRange: ["0deg", "0deg", "0deg"], //45,0,45
        }),
      },
      {
        rotateY: xOffset.interpolate({
          inputRange: [
            (index - 1) * SCREEN_WIDTH, //-1
            index * SCREEN_WIDTH, //*
            (index + 1) * SCREEN_WIDTH, //+1
          ],
          outputRange: ["45deg", "0deg", "-45deg"], //-45,0,45
        }),
      },
    ],
  };
};

const Wf = (props) => {
  const [play, setPlay] = useState(false);
  const [reiniciar, setReiniciar] = useState(false);
  const [xdataVideos, setXdataVideos] = useState(null);
  const [onSelected, setOnSelected] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);
  const [count, setCount] = useState(1);
  const [cargo, setCargo] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  onPlay = (i) => {
    selected = i;
    if (play) {
      setPlay(false);
      setReiniciar(false);
    } else {
      setPlay(true);
      setReiniciar(true);
    }
    console.log("log onPlay>", i, "-", play);
  };

  seleccionadoParent = (e) => {
    setCargo(e.cargo);
    setCount(e.index);
    return e.index;
  };

  useEffect(() => {
    setXdataVideos(props.route.params.videosWf);
  }, []);

  LogBox.ignoreAllLogs(); //Ignore all log notifications

  return (
    Array.isArray(xdataVideos) && (
      <View style={styles.background} key={"wf1"}>
        <SafeAreaView style={styles.container} key="wfs1">
          <ScrollView
            scrollEnabled={false}
            key="sc1"
            refreshControl={
              <RefreshControl
                enabled={true}
                refreshing={refreshing}
                onRefresh={() => {
                  console.log(">WF>refresing>", refreshing);
                }}
              />
            }
          >
            <Fragment key={"wfsf1"}>
              <Animated.ScrollView
                key={"wfsfs1"}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { x: xOffset } } }],
                  { useNativeDriver: true }
                )}
                // onMomentumScrollBegin
                onMomentumScrollEnd={() => {
                  setPlay(false);
                }}
                horizontal
                pagingEnabled
                style={styles.scrollView}
              >
                {xdataVideos.map((item, i) => {
                  if (true) {
                    //!cargo && i === 0 ? true : cargo
                    return (
                      <Screen
                        key={"wfsfsscres1" + i}
                        xkey={"wfsfsscre1" + i}
                        text={item.videoUrl}
                        index={i}
                        item={item}
                        play={play}
                        navigation={props.navigation}
                        seleccionadoOnPlay={onPlay}
                      />
                    );
                  } else {
                    return null;
                  }
                })}
              </Animated.ScrollView>
            </Fragment>
          </ScrollView>
        </SafeAreaView>
      </View>
    )
  );
};

export default Wf;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  background: {
    // position: "absolute",
    backgroundColor: "#000",
    height: height,
    flex: 1,
  },
  scrollView: {
    flexDirection: "row",
    backgroundColor: "#000",
  },
  scrollPage: {
    width: SCREEN_WIDTH,
    padding: 0,
  },
  screen: {
    height: height,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 45,
    fontWeight: "bold",
  },
  boton: {
    backgroundColor: "red",
  },
  marcoInterior: {
    position: "absolute",
    top: height - 250,
    marginBottom: 0,
    flex: 1,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    // alignItems:"flex-end"
  },
  pos: {
    textShadowColor: "#fff",
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
    fontSize: 70,
    fontWeight: "800",
    color: "#B00020",
  },
  ico: {
    color: "#B00020",
    // textShadowColor: "#000",
    // textShadowOffset: { width: 1, height: 0 },
    // textShadowRadius: 5,
  },
  marcoArriba: {
    position: "absolute",
    top: 50,
    left: 0,
    flex: 1,
    zIndex: 1,
  },
  atras: {},
});
