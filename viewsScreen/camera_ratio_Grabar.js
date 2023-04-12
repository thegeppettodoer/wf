import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,Platform 
} from "react-native";
import FormButton from "../componentes/FormButton";
import { AuthContext } from "../componentes/Navigation/AuthProvider";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-community/async-storage";

import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';


const Item = Picker.Item;

const bestRatioPhone = () => {
  const wantedRatio = Dimensions.height / Dimensions.width;
  var bestRatio = 0;
  var bestRatioError = 100000;
  for (i in ratios) {
    const r = ratios[i].split(":");
    if (abs(wantedRatio - r[0] / r[1]) < bestRatioError) {
      bestRatioError = abs(wantedRatio - r[0] / r[1]);
      bestRatio = ratios[i];
    }
  }
  console.log(">Grabar > bestRatioPhone > ", bestRatio);
  return bestRatio;
};

const Grabar = () => {
  const { user, logout, registerLanguage, language, setLanguage } = useContext(
    AuthContext
  );
  const [idioma, setIdioma] = useState("es");
  const [type, setType] = useState(Camera.Constants.Type.back);


    //  camera permissions
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [camera, setCamera] = useState(null);
  
    // Screen Ratio and image padding
    const [imagePadding, setImagePadding] = useState(0);
    const [ratio, setRatio] = useState('4:3');  // default is 4:3
    const { height, width } = Dimensions.get('window');
    const screenRatio = height / width;
    const [isRatioSet, setIsRatioSet] =  useState(false);

    

  useEffect(() => {
    AsyncStorage.getItem("language").then((res) => {
      if (res) {
        setIdioma(res);
      } else {
        setIdioma("es");
      }
    });

  
    async function getCameraStatus() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasCameraPermission(status == 'granted');
    }
    getCameraStatus();
  }, []);


  // set the camera ratio and padding.
  // this code assumes a portrait mode screen
  const prepareRatio = async () => {
    let desiredRatio = '4:3';  // Start with the system default
    // This issue only affects Android
    if (Platform.OS === 'android') {
      const ratios = await camera.getSupportedRatiosAsync();

      // Calculate the width/height of each of the supported camera ratios
      // These width/height are measured in landscape mode
      // find the ratio that is closest to the screen ratio without going over
      let distances = {};
      let realRatios = {};
      let minDistance = null;
      for (const ratio of ratios) {
        const parts = ratio.split(':');
        const realRatio = parseInt(parts[0]) / parseInt(parts[1]);
        realRatios[ratio] = realRatio;
        // ratio can't be taller than screen, so we don't want an abs()
        const distance = screenRatio - realRatio; 
        distances[ratio] = realRatio;
        if (minDistance == null) {
          minDistance = ratio;
        } else {
          if (distance >= 0 && distance < distances[minDistance]) {
            minDistance = ratio;
          }
        }
      }
      // set the best match
      desiredRatio = minDistance;
      //  calculate the difference between the camera width and the screen height
      const remainder = Math.floor(
        (height - realRatios[desiredRatio] * width) / 2
      );
      // set the preview padding and preview ratio
      setImagePadding(remainder / 2);
      setRatio(desiredRatio);
      // Set a flag so we don't do this 
      // calculation each time the screen refreshes
      setIsRatioSet(true);
    }
  };

  // the camera must be loaded in order to access the supported ratios
  const setCameraReady = async() => {
    if (!isRatioSet) {
      await prepareRatio();
    }
  };

  if (hasCameraPermission === null) {
    return (
      <View style={styles.information}>
        <Text>Waiting for camera permissions</Text>
      </View>
    );
  } else if (hasCameraPermission === false) {
    return (
      <View style={styles.information}>
        <Text>No access to camera</Text>
      </View>
    );
  } else {
    return (
    <View style={styles.container}>
    {/* 
    We created a Camera height by adding margins to the top and bottom, 
    but we could set the width/height instead 
    since we know the screen dimensions
    */}
    <Camera
      style={[styles.cameraPreview, {marginTop: imagePadding, marginBottom: imagePadding}]}
      onCameraReady={setCameraReady}
      ratio={ratio}
      ref={(ref) => {
        setCamera(ref);
      }}>
  
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
 
    </Camera>
  </View>


);
}
}
 

export default Grabar;

const styles = StyleSheet.create({

  information: { 
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  cameraPreview: {
    flex: 1,
  }
});
