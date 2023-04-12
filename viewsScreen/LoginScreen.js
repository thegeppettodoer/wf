import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import FormInput from "../componentes/FormInput";
import FormButton from "../componentes/FormButton";
import SocialButton from "../componentes/SocialButton";
import { Picker } from "@react-native-picker/picker";
import { AuthContext } from "../componentes/Navigation/AuthProvider";
const Item = Picker.Item;

const LoginScreen = ({ navigation }) => {
  const {
    login,
    /*googleLogin,*/ fbLogin,
    registerLanguage,
    language,
    setLanguage,
  } = useContext(AuthContext);
  const {} = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [idioma, setIdioma] = useState("es");

  useEffect(() => {
    // console.log(">LoginScreen>useEffect>", idioma);
    registerLanguage(idioma);
    // console.log(">LoginScreen>language...ini>", idioma, 'language');
  });

  // }, []);
  // console.log(">LoginScreen>language...later>", idioma, language);

  return language ? (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image source={require("../assets/icon.png")} style={styles.logo} />
          <Text style={styles.text1}>{language.aplicacion}</Text>

          <FormInput
            labelValue={email}
            onChangeText={(userEmail) => setEmail(userEmail)}
            placeholderText={language.sign.email}
            iconType="user"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <FormInput
            labelValue={password}
            onChangeText={(userPassword) => setPassword(userPassword)}
            placeholderText={language.sign.password}
            iconType="lock"
            secureTextEntry={true}
          />

          <FormButton
            buttonTitle={language.sign.botonIniciar}
            onPress={() => login(email, password)}
          />

          <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
            <Text style={styles.navButtonText}>
              {language.sign.olvidoPassword}
            </Text>
          </TouchableOpacity>

          {Platform.OS === "android" ? (
            <View>
              <SocialButton
                buttonTitle={language.sign.iniciarFacebook}
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => fbLogin()}
              />

              {/* <SocialButton
            buttonTitle="Iniciar con Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => googleLogin()}
          /> */}
            </View>
          ) : null}

          <TouchableOpacity
            style={styles.forgotButton}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.navButtonText}>{language.sign.noCuenta}</Text>
          </TouchableOpacity>

          <Picker
            selectedValue={idioma}
            itemStyle={{
              //   backgroundColor: "grey",
              //   color: "blue",
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
            // dropdownIconColor="#2e64e5"
            // style={{ color: "black", backgroundColor: "#c4c4c3" }}
          >
            <Item label="Español" value="es" />
            <Item label="English" value="en" />
          </Picker>
        </View>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <View>
      <Text>{"No loading..."}</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f9fafd",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: "cover",
    marginTop: 30,
  },
  text1: {
    fontFamily: "KufamSemiBoldItalic",
    fontSize: 28,
    marginBottom: 20,
    color: "#068ccf", //'#051d5f',
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  text: {
    fontFamily: "KufamSemiBoldItalic",
    fontSize: 28,
    marginBottom: 10,
    color: "#068ccf", //'#051d5f',
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 15,
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#2e64e5",
    fontFamily: "LatoRegular",
    marginTop: 0,
  },
  languageText: {
    // fontSize: 18,
    // fontWeight: "500",
    color: "#2e64e5",
    fontFamily: "LatoRegular",
    height: 50,
    width: 150,
    // backgroundColor: "#c5edcb",
  },
});
