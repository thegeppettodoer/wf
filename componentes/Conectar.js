import * as Facebook from "expo-facebook";
import * as firebase from "firebase";
import AsyncStorage from "@react-native-community/async-storage";

const storeData = async (storage, value) => {
  try {
    return await AsyncStorage.setItem(storage, value);
  } catch (e) {
    // saving error
  }
};

export function logIn() {
  return xlogIn()
    .then((res) => {
      console.log(">Conectar logIn > okay  > ", res);
      return res;
    })
    .catch((err) => {
      console.log(">Conectar logIn > err  > ", err);
      return -1;
    });
}
export async function xlogIn() {
  try {
    await Facebook.initializeAsync({
      appId: "383007856067427", //APP_ID
    });

    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile", "email"],
    });
    if (type === "success") {
      const response = await fetch(
        `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
      );
      const data = await response.json();

      storeData("storage_token", token)
        .then((res) => {
          console.log(
            ">Conectar set storeData > okay  > ",
            "storage_token",
            token,
            res
          );
          // return res;
          storeData("storage_username", data.name)
            .then((res1) => {
              console.log(
                ">Conectar set storeData > okay  > ",
                "storage_username",
                data.name,
                res1
              );
              // return res;
            })
            .catch((err) => {
              console.log(">Conectar set storeData > err  > ", err);
              return -1;
            });
        })
        .catch((err) => {
          console.log(">Conectar set storeData > err  > ", err);
          return -1;
        });

      //conectar firebase
      try {
        const config = {
          apiKey: "AIzaSyB5SmL0TRYYWK578eVlQd1kClZX-qxWnLY",
          authDomain: "wf-learning-share.firebaseapp.com",
          databaseURL: "https://wf-learning-share.firebaseio.com",
          projectId: "wf-learning-share",
          storageBucket: "wf-learning-share.appspot.com",
          messagingSenderId: "246496321648",
          appId: "1:246496321648:web:8179171dcf7c32a69794b5",
          measurementId: "G-BH34R2CFB1",
        };
        if (!firebase.apps.length) {
          await firebase.initializeApp(config);
        }
        const facebookCredential = await firebase.auth.FacebookAuthProvider.credential(
          token
        );
        // console.log(
        //   ">conectar>reponse>data",
        //   "token",
        //   "\n",
        //   data.email,
        //   "\n",
        //   data.name,
        //   "\n",
        //   "facebookCredential"
        // );

        await firebase
          .auth()
          .signInWithCredential(facebookCredential)
          .then((user) => {
            console.log(">conectar.firebase.then: okay>", data.name);
          })
          .catch((error) => {
            console.log(">conectar:user:catch>", error);
            return { error: -1, message: error, user: { name: "" } };
          });

        return {
          error: 0,
          message: "Conectado a f+fb",
          user: { name: data.name },
        };
      } catch (error) {
        console.log(">Conectar fb + firebase>error>", error);
        return { error: -1, message: error, user: { name: "" } };
      }
    } else {
      console.log("conectar:user:>", "no success type", "\n");
      return { error: -1, message: "no success type", user: { name: "" } };
    }
  } catch ({ message }) {
    console.log(">Conectar>no success>", message);
    return { error: -1, message, user: { name: "" } };
  }

  return { error: 0, message: "Se conecto a Firebase+Fb", user: { name: "" } };
}

export function obtenerDatos() {
  console.log(">Conectar obtenerDatos>inicio> ");
  // return xlogIn().then((res) => {
    return obtenerDatabase().then((resu) => {
      console.log(">Conectar > obtenerDatos> obtenerDatabase > 0k   > ok resultado data firebase ");
      return resu;
    });
    // }
  // });
}

export async function obtenerDatabase() {
  await firebase.apps.forEach((app) => {
    console.log(">Conectar> App name> ", app.name);
  });

  var datasFx = {};
  const datosF = await firebase
    .database()
    .ref("/dataVideos")
    .once("value")
    .then((snapshot) => {
      datasFx = snapshot.val();
    })
    .catch((error) => {
      console.log(">conectar> obtenerDatos:catch>", error);
      return { error: -1, message: error, user: { name: "" } };
    });

  return datasFx;
}
