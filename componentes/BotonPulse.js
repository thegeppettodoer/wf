import React, { Fragment, useRef, useState, useEffect } from "react";
import { Text, View, StyleSheet, Animated, Dimensions } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");

const BotonPulse = ({ startDelay = 200, icon, iniciar }) => {
  const [iniciando, setIniciando] = useState("E");
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    setIniciando(iniciar);
    if (iniciar !== "I") {
      Animated.timing(scale).stop();
    } else {
      setTimeout(() => pulse(iniciar), startDelay);
    }
  }, [iniciar]);

  const pulse = (ini) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, { toValue: 20, duration: 500, useNativeDriver: true, }),
        Animated.timing(scale, { toValue: 1 , duration: 500, useNativeDriver: true }),
      ])
      //   ,{iterations: 10,}
    ).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ translateY: scale }],
        }}
      >
        {icon.ico === "stop-circle" ? (
          <FontAwesome name="stop-circle" size={100} color={icon.color} />
        ) : null}
        {icon.ico === "fiber-manual-record" ? (
          <MaterialIcons
            name="fiber-manual-record"
            size={100}
            color={icon.color}
          />
        ) : null}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
});
export default BotonPulse;
