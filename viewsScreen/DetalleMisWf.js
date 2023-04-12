import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import FormButton from "../componentes/FormButton";
import { AuthContext } from "../componentes/Navigation/AuthProvider";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-community/async-storage";

const Item = Picker.Item;

const DetalleMisWf = ( {navigation,route} ) => {
  const { user, logout, registerLanguage, language, setLanguage } = useContext(
    AuthContext
  );
  const [idioma, setIdioma] = useState("es");
  const [param, setParam] = useState({});

  useEffect(() => {
    AsyncStorage.getItem("language").then((res) => {
      if (res) {
        setIdioma(res);
      } else {
        setIdioma("es");
      }
    });

    setParam(route.params)
  }, []);

  // props.route.params.videosWf
// console.log('>DetalleMisWf > navigation',navigation.route.params);
// console.log('>DetalleMisWf > navigation', navigation );
// console.log('>DetalleMisWf > route', route );
 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DetalleMisWf {user.uid}</Text>
      <FormButton buttonTitle="Logout" onPress={() => logout()} />
      <FormButton
        buttonTitle="Ver Pasos"
        onPress={() => {
          navigation.navigate("Wf", {
            id: param.id,
            videosWf: param.videosWf,
          });
        }}
      />
    </View>
  );
};

export default DetalleMisWf;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingLeft: 2,
    paddingRight: 2,
    paddingBottom: 2,
  },
  text: {
    fontSize: 20,
    color: "#333333",
  },
});
