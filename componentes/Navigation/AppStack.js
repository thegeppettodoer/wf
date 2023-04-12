import React, { useContext, useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {
  MaterialCommunityIcons,
  Ionicons,
  SimpleLineIcons,
  Octicons,
  AntDesign,
} from "@expo/vector-icons";

import { Platform, InteractionManager, TouchableHighlight } from "react-native";
import { useKeepAwake } from "expo-keep-awake";

import HomeScreen from "../../viewsScreen/Home";
// import LoginScreen from "./viewsScreen/Login";
import AgregarWf from "../../viewsScreen/AgregarWf";
import Agregar from "../../viewsScreen/Agregar";
import DetalleMisWf from "../../viewsScreen/DetalleMisWf";
import Grabar from "../../viewsScreen/Grabar";
import GrabarInfo from "../../viewsScreen/GrabarInfo";
import Wf from "../../viewsScreen/Wf";
import Setup from "../../viewsScreen/Setup";

import { AuthContext } from "./AuthProvider";

import {
  Notificacion,
  LaunchNotificationLocal,
} from "../Notification/Notification";
import * as firebase from "firebase"; //Notificacion
import { Config } from "../../utils/Config";

const InicioStack = createStackNavigator();

function InicioStackScreen({ navigation }) {
  return (
    <InicioStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <InicioStack.Screen name="Home" component={HomeScreen} />
      <InicioStack.Screen name="DetalleMisWf" component={DetalleMisWf} />
      <InicioStack.Screen name="Wf" component={Wf} />
    </InicioStack.Navigator>
  );
}

const AgregarStack = createStackNavigator();
function AgregarStackScreen() {
  return (
    <AgregarStack.Navigator screenOptions={{ headerShown: false }}>
      <AgregarStack.Screen name="Agregar" component={Agregar} />
      <AgregarStack.Screen name="AgregarWf" component={AgregarWf} />
    </AgregarStack.Navigator>
  );
}

const GrabarStack = createStackNavigator();
function GrabarStackScreen() {
  return (
    <GrabarStack.Navigator
      screenOptions={{
        tabBar: {
          visible: false,
        },
        headerShown: false,
      }}
    >
      <GrabarStack.Screen name="GrabarInfo" component={GrabarInfo} />
    </GrabarStack.Navigator>
  );
}

const SetupStack = createStackNavigator();
function SetupStackScreen() {
  return (
    <SetupStack.Navigator
      screenOptions={{
        tabBar: {
          visible: false,
        },
        headerShown: false,
      }}
    >
      <SetupStack.Screen name="Setup" component={Setup} />
    </SetupStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();
const xconfig = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

function TabStack({ navigation }) {
  const { language, setLanguage } = useContext(AuthContext);
  const [colorClicked, setColorClicked] = useState("#B00020");
  const [isTabVisible, setIsTabVisible] = useState(true);
  var xtextHome = ".Home.";
  var xtextCrear = ".Crear.";
  var xtextGrabar = ".Grabar.";
  var xtextConfigurar = ".Opciones.";

  if (language) {
    xtextHome = language.textHome;
    xtextCrear = language.textCrear;
    xtextGrabar = language.textGrabar;
    xtextConfigurar = language.textConfigurar;
  }

  return (
    <Tab.Navigator
      // activeColor="#edebeb"
      // inactiveColor="#edebeb"
      // barStyle={{ backgroundColor: colorClicked }}
      barStyle={{
        display: isTabVisible ? null : "none",
        backgroundColor: colorClicked,
      }}
      tabBarOptions={{
        activeTintColor: "#edebeb",
        inactiveTintColor: "#edebeb",
      }}
      options={{ headerShown: false }}
      screenOptions={{
        headerStyle: {
          headerShown: false,
        },
      }}
    >
      <Tab.Screen
        name="InicioStack"
        component={InicioStackScreen}
        listeners={{
          tabPress: (e) => {
            setIsTabVisible(true);
          },
        }}
        options={{
          tabBarLabel: xtextHome,
          // tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AgregarStack"
        component={AgregarStackScreen}
        listeners={{
          tabPress: (e) => {
            setIsTabVisible(true);
          },
        }}
        options={{
          tabBarLabel: xtextCrear,
          tabBarIcon: ({ color }) => (
            <Octicons name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="GrabarStack"
        component={GrabarStackScreen}
        options={{
          tabBarLabel: xtextGrabar,
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="camrecorder" size={24} color={color} />
          ),
        }}
        listeners={{
          tabPress: (e) => {},
        }}
      />

      <Tab.Screen
        name="SetupStack"
        component={SetupStackScreen}
        options={{
          tabBarLabel: xtextConfigurar,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-settings"
              size={24}
              color={color}
            />
          ),
        }}
        listeners={{
          tabPress: (e) => {},
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
export default function App() {
  //#ini-region ERROR Solution: Setting a timer for a long period of time, i.e. multiple minutes,
  const _setTimeout = global.setTimeout;
  const _clearTimeout = global.clearTimeout;
  const MAX_TIMER_DURATION_MS = 60 * 1000;
  if (Platform.OS === "android") {
    // Work around issue `Setting a timer for long time`
    // see: https://github.com/firebase/firebase-js-sdk/issues/97
    const timerFix = {};
    const runTask = (id, fn, ttl, args) => {
      const waitingTime = ttl - Date.now();
      if (waitingTime <= 1) {
        InteractionManager.runAfterInteractions(() => {
          if (!timerFix[id]) {
            return;
          }
          delete timerFix[id];
          fn(...args);
        });
        return;
      }

      const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
      timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
    };

    global.setTimeout = (fn, time, ...args) => {
      if (MAX_TIMER_DURATION_MS < time) {
        const ttl = Date.now() + time;
        const id = "_lt_" + Object.keys(timerFix).length;
        runTask(id, fn, ttl, args);
        return id;
      }
      return _setTimeout(fn, time, ...args);
    };

    global.clearTimeout = (id) => {
      if (typeof id === "string" && id.startsWith("_lt_")) {
        _clearTimeout(timerFix[id]);
        delete timerFix[id];
        return;
      }
      _clearTimeout(id);
    };
  }
  //#end-region

  useKeepAwake(); //Hook para permanecer activo siempre

  /* Ini-Modo background */
  const [message, setMessage] = useState(null);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    (async function () {
      if (!firebase.apps.length) {
        firebase.initializeApp(Config);
      } else {
        firebase.app();
      }

      if (user) {
        const ref = firebase
          .database()
          .ref("notificacion/" + user.providerData[0].uid);
        ref.on("value", function (dataSnapshot) {
          if (dataSnapshot.exists() && message !== dataSnapshot) {
            // setMessage(dataSnapshot);
            let dataSnapshotValue =   dataSnapshot.val() ; 
            console.log("± ----", dataSnapshot, "...", dataSnapshotValue['mensaje']  );

            LaunchNotificationLocal(dataSnapshotValue);
            // console.log("Get obtenerNotificacion dataSnapshot:", dataSnapshot);
          }
        });
      }
    })();
    return () => {};
  }, [user]);

  // Notificacion();

  /* Fin-Modo background */

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Origen"
        component={TabStack} //TabStack
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Grabar" component={Grabar} />
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
    </Stack.Navigator>
  );
}
