import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import FormButton from "../componentes/FormButton";
import { AuthContext } from "../componentes/Navigation/AuthProvider";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-community/async-storage";

const Item = Picker.Item;

const Agregar = () => {
  const { user, logout, registerLanguage, language, setLanguage } = useContext(
    AuthContext
  );
  const [idioma, setIdioma] = useState("es");
  
 
  useEffect(() => {
    AsyncStorage.getItem("language").then((res) => {
      if (res) {
        setIdioma(res);
      } else {
        setIdioma("es");
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Agregar {user.uid}</Text>
      <FormButton buttonTitle="Logout" onPress={() => logout()} />
      <Picker
        selectedValue={idioma}
        itemStyle={{
          fontFamily: "LatoRegular",
          fontSize: 18,
        }}
        style={{
          height: 50,
          width: 150,
          color: "#2e64e5",
          fontFamily: "LatoRegular",
          fontSize: 18,
          marginBottom: 0,
          marginTop: "auto",
          position: "relative",
        }}
        onValueChange={(itemValue, itemIndex) => {
          setIdioma(itemValue);
          registerLanguage(itemValue);
        }}
        mode="dropdown"
      >
        <Item label="Español" value="es" />
        <Item label="English" value="en" />
      </Picker>
    </View>
  );
}; 

export default Agregar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    paddingLeft:2,
    paddingRight:2,
    paddingBottom:2,
  },
  text: {
    fontSize: 20,
    color: "#333333",
  },
});
