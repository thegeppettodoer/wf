import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import auth from '@react-native-firebase/auth';
import * as firebase from "firebase";
import AsyncStorage from "@react-native-community/async-storage";
import { AuthContext } from "./AuthProvider";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

const Routes = () => {
  const { user, setUser, language, setLanguage, registerLanguage } = useContext(
    AuthContext
  );
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
          // console.log(">Routes > onAuthStateChanged > ", user);

    setUser(user);

    if (!language) {
      AsyncStorage.getItem("language").then((res) => {
        let idioma=res?res:"es";
        registerLanguage(idioma).then((resu) => {
          // console.log(">Routes > language > ____1_______", 'resu');
        });
        // console.log(">Routes > language > ______ ______", 'res');
      });
    }  
    if (initializing) setInitializing(false);
  };
  
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  // console.log('>Routes>user>',user);
  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
