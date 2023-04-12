import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";

// import { MaterialIcons } from "@expo/vector-icons";
// import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import BotonPulse from "../componentes/BotonPulse";

export default function Grabar() {
  //  camera permissions
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);

  // Screen Ratio and image padding
  const [imagePadding, setImagePadding] = useState(0);
  const [ratio, setRatio] = useState("4:3"); // default is 4:3
  const { height, width } = Dimensions.get("window");
  const screenRatio = height / width;
  const [isRatioSet, setIsRatioSet] = useState(false);
  const [rec, setRec] = useState("E");

  //Controls
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.on);

  // set the camera ratio and padding.
  // this code assumes a portrait mode screen
  const prepareRatio = async () => {
    let desiredRatio = "4:3"; // Start with the system default
    // This issue only affects Android
    if (Platform.OS === "android") {
      const ratios = await camera.getSupportedRatiosAsync();
      //   console.log(">ratios>", ratios);
      // Calculate the width/height of each of the supported camera ratios
      // These width/height are measured in landscape mode
      // find the ratio that is closest to the screen ratio without going over
      let distances = {};
      let realRatios = {};
      let minDistance = null;
      for (const ratio of ratios) {
        const parts = ratio.split(":");
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

  // on screen  load, ask for permission to use the camera
  useEffect(() => {
    async function getCameraStatus() {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);
      setHasCameraPermission(status == "granted");
    }
    getCameraStatus();
  }, []);

  // the camera must be loaded in order to access the supported ratios
  const setCameraReady = async () => {
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
    // console.log(">Ratio>", ratio);
    return (
      <View style={styles.container}>
        <Camera
          style={[
            styles.cameraPreview,
            { marginTop: imagePadding + 75, marginBottom: imagePadding + 75},
          ]}
          //   onCameraReady={setCameraReady}
          ratio={ratio}
          autofocus={Camera.Constants.AutoFocus.on}
          type={type}
          flashMode={flash}
          onCameraReady={() => {
            setCameraReady();
            setFlash(Camera.Constants.FlashMode.off);
          }}
          ref={(ref) => {
            setCamera(ref);
          }}
        ></Camera>

        <View
          style={{
            flex: 0,
            position: "absolute",
            backgroundColor: "transparent",
            marginTop: 20,
            // alignContent: "flex-start",
            width: width,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "transparent",
              width: 40,
              padding: 5,
              alignSelf: "flex-end",
              flexDirection: "column",
              //   left: width -40,
              //   marginLeft: 5,
            }}
            onPress={() => {
              setFlash(
                flash === Camera.Constants.FlashMode.torch
                  ? Camera.Constants.FlashMode.off
                  : Camera.Constants.FlashMode.torch
              );
              console.log("luz", flash);
            }}
          >
            {flash ? (
              <Entypo name="light-up" size={30} color="#B00020" />
            ) : (
              <Entypo name="light-up" size={30} color="white" />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "transparent",
              width: 40,
              padding: 5,
              alignSelf: "flex-end",
              //   left: width -40,
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
              console.log("girar", type);
            }}
          >
            {type ? (
              <Ionicons name="md-reverse-camera" size={30} color="#B00020" />
            ) : (
              <Ionicons name="md-reverse-camera" size={30} color="white" />
            )}
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            position: "absolute",
            backgroundColor: "transparent",
            //   flexDirection: "row",
            // marginTop: height - 70,
            alignSelf: "center",
            // justifyContent:"flex-end",
            // alignContent:"flex-end"
            bottom: 50,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "transparent",
              alignSelf: "flex-end",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              if (rec === "E") {
                setRec("I");
              } else {
                if (rec === "I") {
                  setRec("E");
                }
              }
              
            }}
          >
             
            {rec === "I" ? (
              <BotonPulse icon={{ico:"stop-circle",color:"#B00020"}} iniciar={rec} />

            ) : (
              <BotonPulse icon={{ico:"fiber-manual-record",color:"white"} } iniciar={rec} />

            )}
            
            
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  information: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  container: {
    flex: 1,
    backgroundColor: "#000",

    // justifyContent: 'center',
  },
  cameraPreview: {
    flex: 1,
  },
});
