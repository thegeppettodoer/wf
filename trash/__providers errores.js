const [pagedatosmiswf, setPagedatosmiswf] = useState(1);





try {
    console.log(">AuthProvider > datosmiswf > ",!datosmiswf,pagedatosmiswf>1);
    var datasFx = {};
    let limiteInitial=!datosmiswf&&pagedatosmiswf>1?1:5;
    let refInitial=!datosmiswf&&pagedatosmiswf>1?"dataVideos/"+pagedatosmiswf:"dataVideos";
    datasFx = await firebase
    .database()
    .ref(refInitial)
    .orderByChild("id")
    .limitToFirst(limiteInitial) //,limitToLast(2)
    .once("value")
    .then((snapshot) => {
      // console.log(">AuthProvider> snapshot > ........",snapshot);
      datasFx = snapshot.val();
      return datasFx;
    });

    console.log(
      ">AuthProvider> datosMisWF > >obtenerDatosMisWF>ok | ",
      "datasFx",
      'datasFx'
    );
    setDatosmiswf(datasFx);
    return datasFx;


    ///////////////////////////////////////////////////////////

           // datasFx = await firebase
            //   .database()
            //   .ref("/dataVideos")
            //   .once("value")
            //   .then((snapshot) => {
            //     console.log(">AuthProvider> snapshot > ........",snapshot);
            //     datasFx = snapshot.val();
            //     return datasFx;
            //   });





///////////////////////////////////////////////////////////////

var A = [{}]; 
var B = {}; 
A = [ { "Name": "TEST", "deviceId": "", "CartId": "", "timestamp": 1383197265540, "FOOD": [], "City": "LONDON CA" } ] ;
B = A[0]; console.log(B); //requinetworking output 


// {
//   "rules": {
//     "users": {
//       "$uid": {
//         ".read": true,
//         ".write": "$uid === auth.uid"
//       }
//     }
//   }
// }




let animals = [{a:'pigs'}, {a:'goats',b:'perro'}, {a:'sheep'}];
let count = animals.push({a:'cows',b:'gato'});
console.log('------------------------------------------',animals);

     // if (datosmiswf&&val) {
                // console.log(">AuthProvider> antes de push > ........",snapshot.val());
                // let misDatos=datosmiswf;
                // misDatos.push(snapshot.val());;
                // armar= snapshot.val();//misDatos;
                //  } else {








//////////////////////////////////////////misWF/js viernes


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

const Container = styled(ViewPager)`
  height: ${height}px;
  flex: 1;
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

  useEffect(() => {
    // console.log(
    //   ">MisWF  ____________________________res.id_ ",
    //   selected,
    //   "-",
    //   pagedatosmiswf,
    //   "-"
    // );
    // console.log(">MisWF> selected=1", selected, "-", refreshing,"--*--",((!dataVideos[0] && selected === 0) || (refreshing && selected === 0)));
    // || (refreshing && selected === 0)
    // console.log(
    //   "xxxxxxxxx>",
    //   !dataVideos[0],
    //   "---",
    //   !dataVideos && selected === 0
    // );
    if (!dataVideos[0] && selected === 0) {
      // setRefreshing(false);
      // console.log(">MisWF> in/ selected=1", selected);
      setPagedatosmiswf(0);
      obtenerDatosMisWF().then((res) => {
        setDataVideos(res);
      });
    }

    if (dataVideos[0] && selected >= 1) {//dgb 2
      let misDatos = dataVideos;
      // console.log(
      //   "antes-----no debe cargarrrrrr------",
      //   selected + 1 ,  "4"===(selected+2).toString() ,
      //   '-val>',!!misDatos.find((e) => (e.id).toString() == (selected + 2).toString())
      // );

      if (
        !!misDatos.find((e) => e.id.toString() == (selected + 1).toString()) //dgb +2
      ) {
        console.log("---no debe cargarrrrrr------",pagedatosmiswf,'-sel-', selected + 1);
      } else {
        console.log("---si debe cargarrrrrr------",pagedatosmiswf,'-sel-', selected + 1);

        obtenerDatosMisWF().then((res) => {
          if (!!res) {
            //&&!!res.id
            // console.log(">MisWF  ______________________find___ ",res.id,"-",selected,"-",pagedatosmiswf,"-",
            //   !misDatos.find((e) => {console.log(" Mis [ ", e.id, "===", res.id, " ]");
            //     return (e.id).toString()=== (res.id.toString());
            //   })
            // );
            // console.log("> res > -----++++++------------", "res");
            if (//dgb >=2
              selected >= 1 &&
              !misDatos.find((e) => e.id.toString() === res.id.toString())
            ) {
              //add/push new data
              let cuenta = [];
              cuenta = misDatos.push(res);
              setDataVideos(misDatos);
            }
          }
        });
      }
    }
  }, [selected]);

  LogBox.ignoreAllLogs(); //Ignore all log notifications

  return language ? (
    // <Fragment>
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              //|| selected === 1
              if (selected === 0) {
                setPagedatosmiswf(0);
                setDatosmiswf(null);
                setSelected(0);
                console.log('>MisWf > refresh > setDatosmiswf ..... ');
                obtenerDatosMisWF(0).then((res) => {
                  setDataVideos(res);
                });
                }
                // resetDatosMisWF().then((resu) => {
                //   console.log("> MisWF > resetDatosMisWF > ", resu);
                //   obtenerDatosMisWF().then((res) => {
                //     setDataVideos(res);
                //     console.log(">MisWf > Refresh");
                //   });
                // });
             
            }}
          />
        }
      >
        <Container
          orientation="vertical"
          onPageSelected={(e) => {
            // console.log(">vertical scroll>", e.nativeEvent.position,'!refreshing:',!refreshing);

            if (!refreshing) {
              setSelected(e.nativeEvent.position);
              setEmpezar(true);
              if (e.nativeEvent.position >= 1) { //dgb >=2
                console.log(">vertical scroll>", e.nativeEvent.position);
                setPagedatosmiswf(e.nativeEvent.position);
              }
            }
          }}
          keyboardDismissMode={() => {
            console.log(" keyboardDismissMode ");
          }}
          initialPage={0}
          style={{ backgroundColor: "black" }}
        >
          {dataVideos[0] &&
            dataVideos.map((item, index) => {
              // console.log("MisWF>-----------------0000000000---------",index,item.id);
              return (
                <View key={index}>
                  <VideoPlayer
                    video={item.videoUrl}
                    poster={item.poster}
                    isPlay={selected === index && empezar}
                    xkey={index}
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
                    <View
                      style={{
                        position: "absolute",
                        alignSelf: "center",
                        alignItems: "center",
                        marginTop: 0,
                      }}
                    >
                      <TouchableHighlight
                        onPress={() => {
                          empezar ? setEmpezar(false) : setEmpezar(true);
                        }}
                        underlayColor="transparent"
                      >
                        <View
                          style={{
                            width: width,
                            height: height,
                            alignItems: "center",
                            backgroundColor: "transparent",
                          }}
                        ></View>
                      </TouchableHighlight>
                    </View>

                    <Center>
                      <Info
                        user={item.user}
                        data={{ id: item.id }}
                        empezar={{
                          id: item.id,
                          index: index,
                          videosWf: item.videosWf,
                        }}
                      />

                      <Sidebar avatar={item.user.avatar} count={item.count} />
                    </Center>

                    <View
                      style={{
                        position: "absolute",
                        alignSelf: "center",
                        alignItems: "center",
                        marginTop: height - 100,
                      }}
                    >
                      <Button
                        title={language.wf.empezar}
                        color="red"
                        onPress={() => {
                          setEmpezar(99999999999);
                          console.log(
                            "MisWf > clic en boton: ",
                            selected === index && empezar
                          );
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
            })}
        </Container>
      </ScrollView>
    </SafeAreaView>
  ) : (
    // {/* // </Fragment> */}
    <View>
      <Text>{"No loading..."}</Text>
    </View>
  );
};

export default MisWf;

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


///////////////////////borrador
    // console.log(
    //   ">MisWF  ____________________________res.id_ ",
    //   selected,
    //   "-",
    //   pagedatosmiswf,
    //   "-"
    // );
    // console.log(">MisWF> selected=1", selected, "-", refreshing,"--*--",((!dataVideos[0] && selected === 0) || (refreshing && selected === 0)));
    // || (refreshing && selected === 0)
    // console.log(
    //   "xxxxxxxxx>",
    //   !dataVideos[0],
    //   "---",
    //   !dataVideos && selected === 0
    // );


          // setRefreshing(false);
      // console.log(">MisWF> in/ selected=1", selected);

      // console.log(
      //   "antes-----no debe cargarrrrrr------",
      //   selected + 1 ,  "4"===(selected+2).toString() ,
      //   '-val>',!!misDatos.find((e) => (e.id).toString() == (selected + 2).toString())
      // );
      
      
            //&&!!res.id
            // console.log(">MisWF  ______________________find___ ",res.id,"-",selected,"-",pagedatosmiswf,"-",
            //   !misDatos.find((e) => {console.log(" Mis [ ", e.id, "===", res.id, " ]");
            //     return (e.id).toString()=== (res.id.toString());
            //   })
            // );
            // console.log("> res > -----++++++------------", "res");
            
            

                // resetDatosMisWF().then((resu) => {
                //   console.log("> MisWF > resetDatosMisWF > ", resu);
                //   obtenerDatosMisWF().then((res) => {
                //     setDataVideos(res);
                //     console.log(">MisWf > Refresh");
                //   });
                // });
                
            // console.log(">vertical scroll>", e.nativeEvent.position,'!refreshing:',!refreshing);

            


                // if (e.nativeEvent&&e.nativeEvent.offset===0) {
            //   console.log("---------onPageScroll-select ---ultimo-",ultimo,
            //     e.nativeEvent.offset === 0,"--",e.nativeEvent.offset,'.length.',dataVideos.length,'.sel.',selected,'.pagedatosmiswf.',pagedatosmiswf);
            //   if (e.nativeEvent.offset === 0 && dataVideos.length === selected + 3 &&ultimo) 
            //   {  setUltimo(true);
            //     setSelected(dataVideos.length - 3);
            //     setPagedatosmiswf(dataVideos.length - 3);
            //   }  
            // }



        // console.log("> scroll------ultimo>dataVideos.lenght>", dataVideos.length);
              // if (dataVideos.length === e.nativeEvent.position) {
              //   console.log("> scroll------ultimo>", true);
              //   setUltimo(true);
              // } else {
              //   setUltimo(false);
              // }            