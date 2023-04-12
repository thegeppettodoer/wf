import React, { createContext, useState, useEffect, useRef } from "react";
import * as Facebook from "expo-facebook";
import * as firebase from "firebase";
import AsyncStorage from "@react-native-community/async-storage";
import Language from "../../utils/Language";
import { Alert } from "react-native";
import { Config } from "../../utils/Config";

if (!firebase.apps.length) {
  firebase.initializeApp(Config);
} else {
  firebase.app();
};

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState(null);
  const [datosmiswf, setDatosmiswf] = useState(null);
  const [alldatosmiswf, setAlldatosmiswf] = useState(null);
  const [pagedatosmiswf, setPagedatosmiswf] = useState(0);
  const [message, setMessage] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        language,
        setLanguage,
        datosmiswf,
        setDatosmiswf,
        pagedatosmiswf,
        setPagedatosmiswf,
        alldatosmiswf,
        setAlldatosmiswf,
        message,
        setMessage,
        login: async (email, password) => {
          try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(">AuthProvider>login>", e);
          }
        },
        // googleLogin: async () => {
        //   try {
        //     // Get the users ID token
        //     const { idToken } = await GoogleSignin.signIn();

        //     // Create a Google credential with the token
        //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        //     // Sign-in the user with the credential
        //     await auth().signInWithCredential(googleCredential);
        //   } catch(error) {
        //     console.log({error});
        //   }
        // },
        fbLogin: async () => {
          try {
            console.log(">AuthProvider>fbLogin> 1 !Facebook.initializeAsync");

            await Facebook.initializeAsync({
              appId: "383007856067427", //APP_ID
            });

            const result = await Facebook.logInWithReadPermissionsAsync({
              permissions: ["public_profile", "email"],
            });

            const { type, token } = result;
            //await AccessToken.getCurrentAccessToken(); // Once signed in, get the users AccesToken

            if (!token) {
              throw ">AuthProvider>Token no obtenido!";
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential =
              firebase.auth.FacebookAuthProvider.credential(token);
            // Sign-in the user with the credential
            const resultFire = await firebase
              .auth()
              .signInWithCredential(facebookCredential);

            if (!!result.userId && !!resultFire.user) {
              var stringdatosUsuario =
                `{"avatar": "${resultFire.user.photoURL}",  ` +
                ` "email": "${resultFire.user.email}",  ` +
                ` "fisico": [],  ` +
                ` "historialCompras": [],  ` +
                ` "name": "${resultFire.user.displayName}",` +
                ` "pago": [],  ` +
                ` "tipoUsuario": "Creador/Normal cambiado auto",  ` +
                ` "username": "${resultFire.user.displayName}", ` +
                ` "usuarioId": "${resultFire.user.providerData[0].uid}",  `;

              if (resultFire.additionalUserInfo.isNewUser) {
                const fecha = `"fechaCreacion":  ${JSON.stringify(
                  new Date()
                )} `;
                stringdatosUsuario = stringdatosUsuario + `  ${fecha} } `;

                await firebase
                  .database()
                  .ref("/usuarios/fb" + resultFire.user.providerData[0].uid)
                  .set(datosUsuario);
              } else {
                const fecha = `"fechaInicioSession":  ${JSON.stringify(
                  new Date()
                )} `;
                stringdatosUsuario = stringdatosUsuario + `  ${fecha} } `;

                await firebase
                  .database()
                  .ref("/usuarios/fb" + resultFire.user.providerData[0].uid)
                  .onUpdate((change) => {
                    //datosUsuario
                    console.log(".authprovider.onUpdate.change.", change);
                    // const before = change.before  // DataSnapshot before the change
                    // const after = change.after  // DataSnapshot after the change
                  });
              }

              const datosUsuario = JSON.parse(stringdatosUsuario);
            }
          } catch (error) {
            console.log(">AuthProvider>error>", { error });
          }
        },
        register: async (email, username, name, password) => {
          try {
            await firebase
              .auth()
              .createUserWithEmailAndPassword(email, password)
              .then((user) => {
                user.user
                  .updateProfile({
                    displayName: username,
                  })
                  .then(function () {});

                console.log(".authprovider.register.", user);
              });

            await firebase
              .database()
              .ref("/usuarios/" + username)
              .set({
                avatar: "",
                email: email,
                fisico: [],
                historialCompras: [],
                name: name,
                pago: [],
                tipoUsuario: "Creador/Normal cambiado auto",
                username: username,
              });
          } catch (e) {
            console.log(e);
            Alert.alert(
              "Error " + "register",
              "Al registrarse en la app " + e,
              [{ text: "OK", onPress: () => console.log("OK") }],
              { cancelable: true }
            );
          }
        },

        registerNewUser: async (email, username, name, password) => {
          try {
            await firebase
              .database()
              .ref("/usuarios/" + username)
              .set({
                avatar: "",
                email: email,
                fisico: [],
                historialCompras: [],
                name: name,
                pago: [],
                tipoUsuario: "Creador/Normal cambiado auto",
                username: username,
              });
          } catch (e) {
            Alert.alert(
              "Error " + "registerNewUser",
              "Al registrarse en la app " + e,
              [{ text: "OK", onPress: () => console.log("OK") }],
              { cancelable: true }
            );
          }
        },
        registerLanguage: async (idioma) => {
          try {
            // console.log("> AuthProvider > registerLanguage>idioma>", idioma);
            let wordLanguage = await Language.find((e) => e.corto == idioma);
            // console.log("> AuthProvider > registerLanguage>1>", 'wordLanguage');
            if (wordLanguage) {
              setLanguage(wordLanguage);
              AsyncStorage.setItem("language", idioma);
              // console.log("> AuthProvider > registerLanguage>", 'wordLanguage');
            }
          } catch (e) {
            console.log("> AuthProvider > registerLanguage > err>", e);
          }
        },
        logout: async () => {
          try {
            await firebase.auth().signOut();
            await AsyncStorage.clear();
            // navigation.navigate("Onboarding");
          } catch (e) {
            console.log(">AuthProvider>logout>", e);
          }
        },
        resetDatosMisWF: async () => {
          setPagedatosmiswf(1);
          setDatosmiswf(null);
          // console.log('>AuthProvider>resetDatosMisWF>pagedatosmiswf>', pagedatosmiswf);
          return 1;
        },
        obtenerDatosMisWF: async (ret) => {
          try {
            var newdatosmiswf = [];

            // console.log('ret>',ret);
            if (ret === 0) {
              setPagedatosmiswf(0);
              setDatosmiswf(null);
              console.log(
                ">AuthProvider > Reiniciar > ret===0 >",
                ret,
                pagedatosmiswf
              );
            } else {
              if (ret > 0) {
                ret = ret;
              } else {
                ret = pagedatosmiswf;
              }
            }

            let val = ret >= 1;
            let page = ret + 2; //+1
            let refInitial = val ? "dataVideos/" + page : "dataVideos";
            let limiteInitial = val ? 10000 : 3;

            if (datosmiswf && ret <= 2 && ret !== 0 && !val) {
              console.log(
                ">AuthProvider> obtenerDatosMisWF>return el mismo datosmiswf"
              );
              return datosmiswf;
            }

            console.log(
              ">AuthProvider obtenerDatosMisWF > ok -- val>",
              val,
              "-!!datosmiswf>",
              !!datosmiswf,
              "<ref>",
              refInitial,
              "--limiteInitial--",
              limiteInitial,
              "+++0 : ret>",
              ret,
              "-page-",
              page
            );

            newdatosmiswf = await firebase
              .database()
              .ref(refInitial)
              .orderByChild("id")
              .limitToFirst(limiteInitial) //,limitToLast(2)
              .once("value")
              .then((snapshot) => {
                setPagedatosmiswf(page);
                return snapshot.val();
              });

            setDatosmiswf(newdatosmiswf);
            // console.log(">datosMisWF > AuthProvider>obtenerDatosMisWF>newdatosmiswf>", newdatosmiswf);

            return newdatosmiswf;
          } catch (e) {
            console.log(">datosMisWF > AuthProvider>obtenerDatosMisWF>err>", e);
          }
        },
        obtenerFisicoUsuario: async (ret) => {
          try {
            if (user) {
              if (Array.isArray(user.fisico)) {
              } else {
                throw ">AuthProvider>Datos del fisico no obtenido!";
              }
            }
          } catch (e) {
            console.log(">AuthProvider > obtenerFisicoUsuario >err>", e);
          }
        },
        registrarFisicoUsuario: async (ret) => {
          try {
          } catch (e) {
            console.log(">AuthProvider > registrarFisicoUsuario >err>", e);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
