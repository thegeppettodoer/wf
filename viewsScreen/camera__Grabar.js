import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import FormButton from "../componentes/FormButton";
import { AuthContext } from "../componentes/Navigation/AuthProvider";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-community/async-storage";
import { Camera, Permissions } from "expo-camera";
// import { Camera, Permissions } from "expo";

const { width: winWidth, height: winHeight } = Dimensions.get("window");
const Item = Picker.Item;

const Grabar = () => {
  const { user, logout, registerLanguage, language, setLanguage } = useContext(
    AuthContext
  );
  const [idioma, setIdioma] = useState("es");
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  var camera = null;

  useEffect(() => {
    AsyncStorage.getItem("language").then((res) => {
      if (res) {
        setIdioma(res);
      } else {
        setIdioma("es");
      }
    });

    (async () => {
      //permiso camera
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View>
      <Camera style={styles.preview} ref={(camere) => (camera = camere)} />

      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "blue",
            // flex: 0.2,
            height: 40,
            alignSelf: "flex-end",
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => {
            setType(
              type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            );
          }}
        >
          <Text
            style={{
              backgroundColor: "white",
              fontSize: 18,
              // marginBottom: 10,
              // marginLeft: 10,
              // width: 100,
              color: "red",
            }}
          >
            {" "}
            Flip......{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Grabar;

const styles = StyleSheet.create({
  preview: {
    height: winHeight,
    width: winWidth,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: "#333333",
  },
});
