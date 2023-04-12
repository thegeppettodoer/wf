import React, {
  useState,
  useEffect,
  Component,
  Fragment,
  useContext,
} from "react";
import {
  View,
  Text,
  Button,
  Dimensions,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  RefreshControl,
  SafeAreaView,
  LogBox,
  Animated,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import ViewPager from "@react-native-community/viewpager";
// import { useNavigation } from "@react-navigation/native";
import VideoPlayer from "./VideoPlayer";
import Info from "./Info";
import Sidebar from "./Sidebar";
// import dataVideos from "./dataVideos";
const { height, width } = Dimensions.get("window");
// import { obtenerDatos } from "./Conectar";
import { AuthContext } from "../componentes/Navigation/AuthProvider";

// const Videos  = VideoPlayer
const Container = styled(ViewPager)`
  height: ${height}px;
  flex: 1;
  background: #000;
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
  margin-bottom: 50px;
  padding: 0px;
`;

const MisWf = ({ navigation }) => {
  const {
    user,
    logout,
    language,
    datosmiswf,
    setDatosmiswf,
    obtenerDatosMisWF,
    pagedatosmiswf,
    setPagedatosmiswf,
    resetDatosMisWF,
  } = useContext(AuthContext);

  const [selected, setSelected] = useState(0);
  const [empezar, setEmpezar] = useState(true);
  const [play, setPlay] = useState(true);

  const [dataVideos, setDataVideos] = useState({});

  const [refreshing, setRefreshing] = useState(false);
  const [ultimo, setUltimo] = useState(false);

  const loadDataVideos = async (ret) => {
    // console.log(">loadDataVideos> select-", selected, "--", ret);

    if (ret) {
    } else {
      ret = selected;
    }
    if (!dataVideos[0] && ret === 0) {
      setPagedatosmiswf(0);
      obtenerDatosMisWF().then((res) => {
        setDataVideos(res);
        setDatosmiswf(res); //provider
        console.log(">MisWf traer todo", ret);
      });
    }
    // console.log('-----------------------------------------------------ret---',ret);
    if (dataVideos[0] && ret >= 1) {
      //dgb 2
      let misDatos = dataVideos;
      if (!!misDatos.find((e) => e.id.toString() == (ret + 2 + 1).toString())) {
        //dgb +2
        // console.log(
        //   "---no debe cargarrrrrr------p.",
        //   pagedatosmiswf,
        //   "-fin-sele-",
        //   ret
        // );
      } else {
        // console.log(
        //   "---si debe cargarrrrrr------p.",
        //   pagedatosmiswf,
        //   "-fin-sele-",
        //   ret
        // );
        if (ultimo) {
          console.log("ultimo");
          setTimeout(() => setUltimo(false), 300); //dgb ultimo
        }

        obtenerDatosMisWF(ret).then((res) => {
          if (!!res) {
            if (
              //dgb >=2
              ret >= 1 &&
              !misDatos.find((e) => e.id.toString() === res.id.toString())
            ) {
              //add/push new data
              let cuenta = [];
              cuenta = misDatos.push(res);
              setDataVideos(misDatos);
              setDatosmiswf(misDatos); //provider set
            }
          }
        });
      }
    }
  };

  useEffect(() => {
    loadDataVideos(0);
    // LoadArrayMapM();
    // console.log(">MisWf > setUltimo(true)---- useEffect >", selected);
  }, [selected]);

  // LogBox.ignoreAllLogs(); //Ignore all log notifications

  // if (Array.isArray(dataVideos)) {
  //   console.log(
  //     ">MisWf> return........true...",
  //     selected,
  //     dataVideos.length,
  //     Array.isArray(dataVideos)
  //   );
  // }
  //  else {
  //   console.log(
  //     ">MisWf> return........false..",
  //     selected,
  //     typeof dataVideos,
  //     !!dataVideos,
  //     Array.isArray(dataVideos)
  //   );
  // }
  useEffect(() => {
    if (Array.isArray(dataVideos)) {
      console.log(
        ">MisWf> return........false..",
        selected,
        typeof dataVideos,
        !!dataVideos,
        "-L-",
        dataVideos.length,
        Array.isArray(dataVideos),
        dataVideos[selected].videoUrl
      );

      // setDataVideos( dataVideos.filter(function (e) {return e != null;}));
    }
  });


  const LoadArrayMap = () => {
    // if (!!dataVideos) {
    if (Array.isArray(dataVideos)) {
      return dataVideos.map((item, index) => {
        // console.log("rende>__________",dataVideos.length,index,'-id-',item.id)
        return (
          <View
            index={item.id + 999999}
            key={item.id + 999999}
            style={{ flex: 1, backgroundColor: "#10c781" }}
          >
            <VideoPlayer
              video={item.videoUrl}
              poster={item.poster}
              isPlay={selected === index && empezar}
              xkey={index}
              reiniciar={false}
            />
            <Gradient
              key={item.id + 888888}
              locations={[0, 0.26, 0.6, 1]}
              colors={[
                "rgba(26,26,26,0.6)",
                "rgba(26,26,26,0)",
                "rgba(26,26,26,0)",
                "rgba(26,26,26,0.6)",
              ]}
            >
              <View
                key={item.id + 777777}
                style={{
                  position: "absolute",
                  alignSelf: "center",
                  alignItems: "center",
                  marginTop: 0,
                  backgroundColor: "transparent",
                }}
              >
                <TouchableHighlight
                  key={item.id + 666666}
                  onPress={() => {
                    empezar ? setEmpezar(false) : setEmpezar(true);
                  }}
                  underlayColor="transparent"
                >
                  <View
                    key={item.id + 555555}
                    style={{
                      width: width,
                      height: height,
                      alignItems: "center",
                      backgroundColor: "transparent",
                    }}
                  ></View>
                </TouchableHighlight>
              </View>

              <Center key={item.id + 444444}>
                <Info
                  user={item.user}
                  data={{ id: item.id }}
                  empezar={{
                    id: item.id,
                    index: index,
                    videosWf: item.videosWf,
                  }}
                />

                <Sidebar
                  avatar={item.user.avatar}
                  count={item.count}
                  kei={item.id}
                />
              </Center>

              <View
                key={item.id + 333333}
                style={{
                  position: "absolute",
                  alignSelf: "center",
                  alignItems: "center",
                  marginTop: height - 100,
                }}
              >
                <Button
                  key={item.id + 222222}
                  title={language.wf.empezar}
                  color="red"
                  onPress={() => {
                    setEmpezar(false);
                    navigation.navigate("Wf", {
                      id: item.id,
                      videosWf: item.videosWf,
                    });
                  }}
                />
              </View>
            </Gradient>
          </View>
        );
      });
    } else {
      return (
        <View key="n1" style={{ backgroundColor: "blue", flex: 1 }}>
          <Text>{"No cargo map-"}</Text>
        </View>
      );
    }
  };

  // console.log("LoadArrayMap>>>>>>", LoadArrayMap().toString());
  return language ? (
    // <Fragment>
    <SafeAreaView key="s1">
      <ScrollView
        key="sc1"
        refreshControl={
          <RefreshControl
            enabled={selected === 0 ? true : false}
            refreshing={refreshing}
            onRefresh={() => {
              if (selected === 0) {
                setRefreshing(true);
                setPagedatosmiswf(0);
                setDatosmiswf(null);
                setDataVideos(null);
                setSelected(0);
                obtenerDatosMisWF(0).then((res) => {
                  setDataVideos(res);
                  setDatosmiswf(res); //provider set
                  // console.log(">MisWf traer   > refreshing", !!res);
                  setRefreshing(false);
                });
              } else {
                setRefreshing(false);
              }
            }}
          />
        }
      >
        <Container
          orientation="vertical"
          transitionStyle="scroll"
          keyboardDismissMode="on-drag"
          pageMargin={0}
          onPageScroll={(e) => {
            if (Array.isArray(dataVideos)) {
              if (
                e.nativeEvent.offset === 0 &&
                selected > 0 &&
                selected + 1 === dataVideos.length
              ) {
                // console.log(">MisWf > onPageScroll > sel >",selected);
                setUltimo(true); //ultimo
                loadDataVideos(selected - 1);
              } else {
                setUltimo(false); //ultimo
              }
            }
          }}
          onPageSelected={(e) => {
            // console.log(">MisWf > onPageSelected > sel >",selected);
            //
            if (!refreshing && Array.isArray(dataVideos)) {
              setSelected(e.nativeEvent.position);
              setEmpezar(true);
              setPagedatosmiswf(e.nativeEvent.position);
            }
          }}
          keyboardDismissMode={() => {
            console.log(" keyboardDismissMode ");
          }}
          initialPage={0}
          style={{ flex: 1, backgroundColor: "green" }}
          key={"co1"}
          showPageIndicator={true}
        >
            <LoadArrayMap />
        
        </Container>

        {Array.isArray(dataVideos) &&
        selected + 1 === dataVideos.length &&
        ultimo === true ? (
          <View
            style={{
              backgroundColor: "#B00020",
              flex: 1,
              height: 50,
            }}
          >
            <Text
              style={{
                justifyContent: "center",
                alignSelf: "center",
                textAlign: "center",
                marginTop: 15,
                color: "#fff",
              }}
            >
              {"...Loading..."}
            </Text>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  ) : (
    <View>
      <Text>{".....No loading....."}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: "center",
  },
  button: {
    marginBottom: 30,
    width: 300,
    height: 300,
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
  },
});

export default MisWf;
