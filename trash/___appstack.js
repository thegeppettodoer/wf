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
import Grabar from "../../viewsScreen/Grabar";
import GrabarInfo from "../../viewsScreen/GrabarInfo";
import Wf from "../../viewsScreen/Wf";
import Setup from "../../viewsScreen/Setup";

import { AuthContext } from "./AuthProvider";

const InicioStack = createStackNavigator();
function InicioStackScreen({ navigation }) {
  return (
    <InicioStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <InicioStack.Screen name="Home" component={HomeScreen} />
      <InicioStack.Screen name="Wf" component={Wf} />
    </InicioStack.Navigator>
  );
}

const AgregarStack = createStackNavigator();
function AgregarStackScreen() {
  return (
    <AgregarStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
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
};

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
  if (language) {
    xtextHome = language.textHome;
    xtextCrear = language.textCrear;
    xtextGrabar = language.textGrabar;
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
          tabBarColor: "#009387",
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
          tabBarLabel: xtextGrabar,
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
  ////////////////////////////
  //#region ERROR Solution: Setting a timer for a long period of time, i.e. multiple minutes,
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
  //#endregion

  useKeepAwake(); //Hook para permanecer activo siempre

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




///pulse
//   const scale = useRef(new Animated.Value(1)).current;



const pulse = () => {
    Animated.sequence([
      Animated.timing(scale, { toValue: 20, useNativeDriver: true }),
      Animated.timing(scale, { toValue: 1, useNativeDriver: true }),
    ]).start(() => pulse());
  };

  useEffect(() => {
    console.log("startDelay>", startDelay);

    setTimeout(() => pulse(), startDelay);
  }, []);










////////////pulse


import React, { Fragment, useRef, useState, useEffect } from "react";
import { Text, View, StyleSheet, Animated, Dimensions } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

const BotonPulse = ({ startDelay = 500, icon, iniciar }) => {
  const scale = useRef(new Animated.Value(1)).current;
  const { height, width } = Dimensions.get("window");
  const [iniciando, setIniciando] = useState("E");

  useEffect(() => {
    console.log("start iniciar 00000 >", iniciar);
    setIniciando(iniciar);
    iniciar !== "I" ? null : setTimeout(() => pulse(), startDelay);

  }, [iniciar,iniciando]);

  const pulse = () => {
    Animated.sequence([
      Animated.timing(scale, { toValue: 20, useNativeDriver: true }),
      Animated.timing(scale, { toValue: 1, useNativeDriver: true }),
    ]).start(() => {
        console.log("start iniciar>1>", iniciando);
      iniciando !== "E" ? pulse() : null;
    });
  };



  // console.log("props", props.iniciar);
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{ translateY: scale }],
        }}
      >
        {/* translateX:scale, */}
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


//////////////////////////........

import React, { Component, Fragment, useRef  } from "react";
import { Text, View, StyleSheet, Animated, Dimensions } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

const scale = useRef(new Animated.Value(1)).current;
const { height, width } = Dimensions.get("window");

class BotonPulse extends Component {
  constructor(props) {
    super(props);
    this.state = {
        iniciando:"E"
    };
  }

  pulse = () => {
    Animated.sequence([
      Animated.timing(scale, { toValue: 20, useNativeDriver: true }),
      Animated.timing(scale, { toValue: 1, useNativeDriver: true }),
    ]).start(() => {
      console.log("start iniciar>1>", iniciando);
      iniciando !== "E" ? this.pulse() : null;
    });
  };

  componentDidMount(){
    this.setState({iniciando: iniciar});
    iniciar !== "I" ? null : setTimeout(() => this.pulse(), startDelay);
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            transform: [{ translateY: scale }],
          }}
        >
          {/* translateX:scale, */}
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
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
  },
});
export default BotonPulse;








//////////////////


   // console.log('MisWf ----- ','------------------------->>>>>');
          // console.log("Wf index ", index);
          // console.log(
          //   "Wf isPlay ",
          //   this.state.selected === index && this.state.play
          // );

          // console.log('MisWf item ',item);
          // console.log('MisWf ----- ','------------------------------ ');





          ///////////////////////////

            {/* <Info
                  user={item.user}
                  empezar={{
                    id: item.id,
                    index: index,
                    videosWf: item.videosWf,
                  }}
                /> */}


//////////////////////////
{/* <Sidebar avatar={item.user.avatar} count={item.count} /> */}



const fadeIn = () => {
  // Will change fadeAnim value to 1 in 5 seconds
  Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 5000,
    useNativeDriver: true,
  }).start();
};

const fadeOut = () => {
  // Will change fadeAnim value to 0 in 5 seconds
  Animated.timing(fadeAnim, {
    toValue: 0,
    duration: 5000,
    useNativeDriver: true,
  }).start();
};



///////////////