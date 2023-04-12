import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  SafeAreaView,
  ScrollView,
  RefreshControl,
} from "react-native";
import FormButton from "../componentes/FormButton";
import { AuthContext } from "../componentes/Navigation/AuthProvider";
import AsyncStorage from "@react-native-community/async-storage";

// import { Camera } from "expo-camera";

const GrabarInfo = ({ navigation }) => {
  const {
    user,
    logout,
    registerLanguage,
    language,
    setLanguage,
    datosmiswf,
  } = useContext(AuthContext);
  const [idioma, setIdioma] = useState("es");

  useEffect(() => {
    AsyncStorage.getItem("language").then((res) => {
      if (res) {
        setIdioma(res);
      } else {
        setIdioma("es");
      }
    });

    // console.log(
    //   ">GrabarInfo > datosmiswf > ",
    //   datosmiswf[0].descripcion,
    //   datosmiswf[0].titulo
    // );
  }, []);

  console.log(
    ">GrabarInfo > datosmiswf [0] 1 > ",
    Array.isArray(datosmiswf)   );

  //  console.log(
  //     ">GrabarInfo > datosmiswf [0]> ",
  //     typeof datosmiswf   );

  return  language &&  Array.isArray(datosmiswf) ?(
    <SafeAreaView style={styles.containerSafe}>
      <ScrollView 
        refreshControl={
          <RefreshControl
            // refreshing={refreshing}
            onRefresh={() => {
              console.log(">GrabarInfo > refresing > ");
            }}
          />
        }
      >
        <View style={styles.container}>
          <View style={styles.containerCard}>
            <View style={styles.header}>
              <Text style={styles.titulo}>
                {datosmiswf[0].titulo}
                {/* {user.uid} */}
              </Text>
            </View>
            <View style={styles.body}>
              <View style={styles.body1}>
                <Text style={styles.text}>{datosmiswf[0].descripcion}</Text>
              </View>

              <View style={styles.body2}>
                <FormButton
                  buttonTitle={language.grabar.grabarIntro}
                  onPress={() => {
                    navigation.navigate("Grabar");
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  ):<View  style={{backgroundColor:"transparent" , position:'absolute', alignSelf:"center",alignItems:"center",alignContent:"center",justifyContent:"center"}}><Text>No cargo</Text></View>;
};

export default GrabarInfo;

const styles = StyleSheet.create({
  containerSafe: {
    paddingTop: 40,
    paddingBottom: 20,
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: 40,
    paddingLeft: 5,
    paddingRight: 5,
  },
  containerCard: {
    // height: 150,
    width: "98%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginBottom: 10,
    // alignItems:"center"
  },
  header: {
    flexDirection: "row",
    borderBottomWidth:1,
    borderBottomColor:'#f0f0f0',
  },
  body: {
    flexDirection: "row",
    // backgroundColor: "purple",
  },
  body1: {
    flexDirection: "column",
    width: "70%",
    // backgroundColor: "yellow",
    // alignItems: 'stretch',
    justifyContent: "flex-start",
  },
  body2: {
    flexDirection: "column",
    width: "30%",
    alignItems: "stretch",
    justifyContent: "center",
    padding: 10,
  },
  text: {
    fontSize: 14,
    color: "#333333",
    marginBottom: 10,
  },
  titulo: {
    fontSize: 14,
    fontWeight: "400",
     marginBottom: 10,
    color: "#B00020",
  },
});
