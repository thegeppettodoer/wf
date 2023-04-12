
function logInPromise(){

    return new Promise((resolve,reject) => {
     try {
        await Facebook.initializeAsync({
          appId: "383007856067427", //APP_ID
        });
    
        const { type, token } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ["public_profile", "email"],
        });
        // expirationDate,// permissions,// declinedPermissions,
        if (type === "success") {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(
            `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
          );
          const data = await response.json();
          // Alert.alert("Conectado!", `Hi ${data.name}!`);
          //   console.log("success>", data.name);
          //   return { user: data.name, error: 0 };
        //   return data.name;
          resolve({user:data.name});
        } else {
          // type === 'cancel'
          console.log("no success>", "cancel");
          //   return { user: "none", error: -2 };
        //   return -2;
        reject(new Error('No conectado'));
        }
      } catch ({ message }) {
        //   alert(`Facebook Login Error message: ${message}`);
        console.log("no success>", "error");
        // return { user: "none", error: -1 };
        // return -1;
        reject(new Error('No conectado'));

      }   
    });

    

}
////////////////////////////////////////////////////////

async function logIn() {
    try {
      await Facebook.initializeAsync({
        appId: "383007856067427", //APP_ID
      });
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      // expirationDate,// permissions,// declinedPermissions,
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
        );
        const data = await response.json();
        // Alert.alert("Conectado!", `Hi ${data.name}!`);
        console.log("user logIn success>", data.name);
        this.setState({ user: data.name });
  
        //   return { user: data.name, error: 0 };
        return data.name;
      } else {
        // type === 'cancel'
        console.log("user logIn  no success>", "cancel");
        //   return { user: "none", error: -2 };
        return -2;
      }
    } catch ({ message }) {
      //   alert(`Facebook Login Error message: ${message}`);
      console.log("user logIn  no success>", message);
      // return { user: "none", error: -1 };
      return -1;
    }
  }
  

















  ////////////////////////////////////////////////////////////////////////////




// export default function HomeScreen({ navigation }) {
//   let log = "s";
//   log =  logIn;
//   return (
//     <View style={styles.background}>
//       <Text style={styles.titulo}>Step by Step training! {log.json}</Text>
//       <Text style={styles.texto}>
//         Bienvenidos a la app para compatir tus entrenamientos y dar seguimiento
//         a los entrenados!
//       </Text>
//       <Button
//         title="Registrarse"
//         onPress={() => navigation.navigate("Login")}
//       />
//     </View>
//   );
// }

// if (user.json ==! undefined){
//   this.setState({ user: user.json });
//   console.log("user ==!>", user.json);
// }else{
//   this.setState({ user: 'x undefined' });
//   console.log("user else >", 'x undefined');
// }












  // async xasyncCall() {
  //   try {
  //     await Facebook.initializeAsync({
  //       appId: "383007856067427", //APP_ID
  //     });
  //     const { type, token } = await Facebook.logInWithReadPermissionsAsync({
  //       permissions: ["public_profile", "email"],
  //     });
  //     // expirationDate,// permissions,// declinedPermissions,
  //     if (type === "success") {
  //       // Get the user's name using Facebook's Graph API
  //       const response = await fetch(
  //         `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
  //       );
  //       const data = await response.json();
  //       // Alert.alert("Conectado!", `Hi ${data.name}!`);
  //       // console.log("user logIn success>", data.name);
  //       // this.setState({ user: data.name });

  //       //   return { user: data.name, error: 0 };
  //       return data.name;
  //     } else {
  //       // type === 'cancel'
  //       console.log("user logIn  no success>", "cancel");
  //       //   return { user: "none", error: -2 };
  //       return -2;
  //     }
  //   } catch ({ message }) {
  //     console.log("user logIn  no success>", message);
  //     return -1;
  //   }
  // }

  // async xxxasyncCall() {     
  //   return await logIn();
  // }







  /////////////////////////////////////////////////////////////////////


  async function logIn() {
    try {
      console.log('.........home conectar...logIn.........');
  
      await Facebook.initializeAsync({
        appId: "383007856067427", //APP_ID
      });
  
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      // expirationDate,// permissions,// declinedPermissions,
      console.log('.........home conectar...type.........',type);
  
      if (type === "success") {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
        );
        const data = await response.json();
        Alert.alert("Conectado!", `Hi ${data.name}!`);
        console.log("success>", data.name);
        //   return { user: data.name, error: 0 };
        return data.name;
      } else {
        // type === 'cancel'
        console.log("no success>", "cancel");
        //   return { user: "none", error: -2 };
        return -2;
      }
    } catch ({ message }) {
      //   alert(`Facebook Login Error message: ${message}`);
      console.log("no success>", "error");
      // return { user: "none", error: -1 };
      return -1;
    }
  };
  




  .............................................................................

  import React from "react";
// import { View, Text, Button, Alert } from "react-native";
// // import * as Facebook from "expo-facebook";

// const { logIn } = require("../componentes/Conectar");



// // async function logIn() {
// //   try {
// //     await Facebook.initializeAsync({
// //       appId: "383007856067427", //APP_ID
// //     });

// //     const { type, token } = await Facebook.logInWithReadPermissionsAsync({
// //       permissions: ["public_profile", "email"],
// //     });
// //     // expirationDate,// permissions,// declinedPermissions,
// //     if (type === "success") {
// //       // Get the user's name using Facebook's Graph API
// //       const response = await fetch(
// //         `https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`
// //       );
// //       const data = await response.json();
// //       // Alert.alert("Conectado!", `Hi ${data.name}!`);
// //       // console.log("success>", data.name);
// //       return data.name;
// //     } else {
// //       // console.log("no success>", "cancel");
// //       return -2;
// //     }
// //   } catch ({ message }) {
// //     // console.log("no success>", "error");
// //     return -1;
// //   }
// // }; 


// export default function LoginScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Iniciar sesion fb </Text>
//       <Button title="Login" onPress={loginCall} />
//     </View>
//   );
// }



]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]home dgb



import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
// import * as Facebook from "expo-facebook";
const { logIn } = require("../componentes/Conectar");

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "" };
  }

  async loginCall() {
    // let call = await this.xasyncCall();
    let call = await logIn(); //this.xxxasyncCall();
    this.setState({ user: call });
    console.log(">home > xxasyncCall > ", call);
    return call;
  }

  componentDidMount() {
    const user = this.loginCall();
  }

  render() {
    // const { navigate } = this.props.navigation;

    return (
      <View style={styles.background}>
        <Text style={styles.titulo}>
          Step by Step training! 
        </Text>
        <Text style={styles.texto}>
          Bienvenidos a la app para compatir tus entrenamientos y dar
          seguimiento a los entrenados!
        </Text>

        {this.state.user ? (
          <Text style={styles.user}>{this.state.user}</Text>
        ) : (
          <Button
            title="Registrarse"
            // onPress={() => navigation.navigate("Login")}
            onPress={() => this.props.navigation.navigate("Login")}
          />
        )}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  background: {
    position: "absolute",
    backgroundColor: "white",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  titulo: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 70,
  },
  texto: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "200",
    paddingTop: 20,
  }, 
  user: {
    backgroundColor: "#0f97d1",
    // flex: 1,
    // position:"relative",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    // fontWeight: "600",
    fontSize: 20,
    color: "#ffffff",
  },
});

export default HomeScreen;




---------------------app dgb  -------------------------------------

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./viewsScreen/Home";
import ListScreen from "./viewsScreen/wfScreen";
import LoginScreen from "./viewsScreen/Login";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home" 
          component={HomeScreen}
          options={{ title: "Learning Share!" }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login FB" }}
        />

        <Stack.Screen
          name="List"
          component={ListScreen}
          options={{ title: "Listar" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;



/////////////////////////////////////----------------app dgb button
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./viewsScreen/Home";
import ListScreen from "./viewsScreen/wfScreen";
import LoginScreen from "./viewsScreen/Login";
import Inicio from "./viewsScreen/Inicio";
import Agregar from "./viewsScreen/Agregar";
import Wf from "./viewsScreen/Wf";

const InicioStack = createStackNavigator();

function InicioStackScreen() {
  return (
    <InicioStack.Navigator>
      <InicioStack.Screen name="Home" component={HomeScreen} />
      <InicioStack.Screen name="Wf" component={Wf} />

    </InicioStack.Navigator>
  );
}

const AgregarStack = createStackNavigator();

function AgregarStackScreen() {
  return (
    <AgregarStack.Navigator>
      <AgregarStack.Screen name="Agregar" component={Agregar} />
      <AgregarStack.Screen name="Wf" component={Wf} />
    </AgregarStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="InicioStack" component={InicioStackScreen} />
        <Tab.Screen name="AgregarStack" component={AgregarStackScreen} />
        {/* <Tab.Screen name="LoginScreen" component={LoginScreen} /> */}
        {/* <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarVisible: false,
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}


/////////////////home///dgb 11

return (
    <View style={styles.background}>
      <Text style={styles.titulo}>Step by Step training!</Text>
      <Text style={styles.texto}>
        Bienvenidos a la app para compatir tus entrenamientos y dar
        seguimiento a los entrenados!
      </Text>
      <Button
        title="Ver Wf"
        onPress={() => this.props.navigation.navigate("Wf")}
      />

     
      {this.state.user ? (
        <Text style={styles.user}>{this.state.user}</Text>
      ) : (
        <Button
          title="Registrarse"
          onPress={() => this.props.navigation.navigate("Login")}
        />
      )}
    </View>
  );


///////////////////////////////////////////////////////////////////////////////////////////////////////////////



// class MisWf extends Component {
//   constructor(props) {
//     super(props);
//     this.state = dataMisWf;
//   }

//   list = () => {
//     return this.state.array.map((element) => {
//       return (
//         <View
//           style={{ margin: 10, borderRadius: 10, backgroundColor: "red" }}
//           key={element.id}
//           onPress={() => this.props.navigation.navigate("Wf")}
//         >
//           <Text>{element.titulo}</Text>
//           <Text>{element.descripcion}</Text>
//           <Text>{element.correlativoActual}</Text>
//           <Button
//             title="Ver Wf"
//             onPress={() => this.props.navigation.navigate("Wf")}
//           />
//         </View>
//       );
//     });
//   };

//   render() {
//     return <View>{this.list()}</View>;
//   }
// }

// export default MisWf;

000000000000

return (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        // headerTransparent: {
        //   position: 'absolute',
        // },

        // headerStyle: {
        // backgroundColor: "#fff",
        // elevation: 0,
        // shadowOpacity: 0,
        // borderBottomWidth: 0,
        // },
        // backgroundColor: 'transparent',
        // headerTintColor: "#000",
        // headerTitleStyle: {
        //   fontWeight: "bold",
        // },
      }}


















      /////////////////////////////////////////////////////////////////////////////










      const dataMisWf = {
        array: [
          {
            id: 1,
            titulo: "Mi wf #1",
            descripcion:
              "It’s surprising how many people miss the abdominal muscles when working out. In doing so.",
            videoUrl:
              "https://v.pinimg.com/videos/720p/31/72/e0/3172e06325fe2b277c1696705ff263b9.mp4",
            poster:
              "https://i.pinimg.com/736x/39/8f/75/398f754a5099914b497e77155d3eec73.jpg",
            correlativoActual: 1,
            correlativoMax: 5,
            user: {
              username: 'whinderssonnunes',
              description: 'Como nasceu o passinho do TikTok',
              music: 'som original',
              avatar:  require('../assets/user.png')
            },    
            count: {
              like: '6.1k',
              comment: '190',
              share: '287'
            },  
            videosWf: [
              {
                videoUrl:
                  "https://v.pinimg.com/videos/mc/720p/59/5b/c2/595bc28e9e09df52a7f9928e816978a0.mp4",
                poster: "",
                idVideo: 1,
                estado: "like",
              },
              {
                videoUrl:
                  "https://v.pinimg.com/videos/mc/720p/09/e0/1f/09e01f06b6da8e7dacec28407a3de939.mp4",
                poster: "",
                idVideo: 2,
                estado: "like",
              },
              {
                videoUrl:
                  "https://v.pinimg.com/videos/mc/720p/74/cb/8c/74cb8c8e9c1f820275f32bcae4efcbeb.mp4",
                poster: "",
                idVideo: 3,
                estado: "like",
              },
              {
                videoUrl:
                  "https://v.pinimg.com/videos/720p/31/72/e0/3172e06325fe2b277c1696705ff263b9.mp4",
                poster: "",
                idVideo: 4,
                estado: "like",
              },
              {
                videoUrl:
                  "https://v.pinimg.com/videos/mc/720p/a2/f1/2e/a2f12ec8b1fdcd9c42f5e05e2ddf35d9.mp4",
                poster: "",
                idVideo: 5,
                estado: "like",
              },
            ],
          },
          {
            id: 2,
            titulo: "Mi wf #2",
            descripcion:
              "As we’ve referenced, abdominal workouts target the abdominal muscles which are important for posture and balance. Stability is especially vital for people in sports, and the elderly who are at a risk of constant tumbles and slips.",
            videoUrl:
              "https://v.pinimg.com/videos/mc/720p/09/e0/1f/09e01f06b6da8e7dacec28407a3de939.mp4",
            poster:
              "https://i.pinimg.com/736x/03/c8/d6/03c8d610e82a785ca10a4c7bd36de4d3.jpg",
            correlativoActual: 1,
            correlativoMax: 15,
            user: {
              username: 'usuario # 2',
              description: 'Como nasceu o passinho do TikTok',
              music: 'som original',
              avatar:  require('../assets/user.png')
            },       
            count: {
              like: '1.7M',
              comment: '4050',
              share: '1800'
            },
            videosWf: [{},{}]
          },
          {
            id: 3,
            titulo: "Mi wf #3",
            descripcion: "THEY’RE NOT JUST THERE FOR THE 6 PACK LOOK!",
            videoUrl:
              "https://v.pinimg.com/videos/mc/720p/ca/5b/6d/ca5b6dfa76d97b166cb9ddc51d207939.mp4",
            poster:
              "https://i.pinimg.com/736x/7e/6c/0f/7e6c0f6b2194b9f9b9d6e78dbd4a1970.jpg",
            correlativoActual: 1,
            correlativoMax: 10,
            user: {
              username: 'usuario # 3',
              description: 'Como nasceu o passinho do TikTok',
              music: 'som original',
              avatar:  require('../assets/user.png')
            },       
            count: {
              like: '1.1M',
              comment: '4080',
              share: '2800'
            },
            videosWf: [{},{}]
          },
        ],
      };

      

      













      




      ////////////////////////// 

//
// <View
//   style={{ margin: 10, borderRadius: 10, backgroundColor: "red" }}
//   key={element.id}
// >
//   <Text>{element.titulo}</Text>
//   <Text>{element.descripcion}</Text>
//   <Text>{element.correlativoActual}</Text>
//   <Button
//     title="Ver Wf"
//     onPress={() =>
//       navigation.navigate("Wf", {
//         id: element.id,
//         titulo: element.titulo,
//         descripcion: element.descripcion,
//         correlativoActual: element.correlativoActual,
//       }) &&
//       navigation.setParams({ id: element.id, titulo: element.titulo })
//     }
//   />
// </View>












//////////////////////////////////////////


import React, { useState } from "react";
import { Dimensions,View } from "react-native";

import { Video } from "expo-av";
import styled from "styled-components/native";
// height: 100%;
// width: 100%;
// top:   0;
// left:  0px;
// background-color: rgb(201, 76, 76);
const Play = Video; //styled(Video)` `

const Poster = styled.ImageBackground`
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
`;
const { height, width } = Dimensions.get("window");
var videoRefs =  React.createRef();


const VideoPlayer = ({ video, poster, isPlay, xkey }) => {
const [empezar, setEmpezar] = useState(true);
 
  // console.log('---------------:');
  console.log("VideoPlayer:", video);
  console.log("VideoPlayer:", isPlay);
  // console.log('VideoPlayer:',xkey);
  // console.log('---------------:');

  return isPlay ? (
      <View       onPress={() =>  console.log('MisWf onPress')}   style={{backgroundColor: 'blue'}}   >
    <Play
      ref={(ref) => videoRefs=ref}
      source={{
        uri: video,
      }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay={isPlay }
      pause={!isPlay}
      isLooping
      onEnd={() => {
        console.log("Done!");
      }}
      //   useNativeControls={false}
      // posterSource={ require(poster) }
      //   usePoster={true}
      posterSource={{
        uri: poster,
      }}
      // source={video}
      posterStyle={{ width: width, height: height }}
      style={{ width: width, height: height }}

    />
    </View>
  ) : (
    <Poster
      // source={poster}
      source={{
        uri: video,
      }}
    />
  );
};

export default VideoPlayer;



 
///////////////////////////////////////// misWf. : '



// import React, { Component } from "react";
import React, { useState } from "react";
import { View, Text, Button, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import ViewPager from "@react-native-community/viewpager";
import { useNavigation } from "@react-navigation/native";
import VideoPlayer from "./VideoPlayer";
import Info from "./Info";
import Sidebar from "./Sidebar";

const dataMisWf = [
  {
    id: 1,
    titulo: "Mi wf #1",
    descripcion:
      "It’s surprising how many people miss the abdominal muscles when working out. In doing so.",
    videoUrl:
      "https://v.pinimg.com/videos/720p/31/72/e0/3172e06325fe2b277c1696705ff263b9.mp4",
    poster:
      "https://i.pinimg.com/736x/39/8f/75/398f754a5099914b497e77155d3eec73.jpg",
    correlativoActual: 1,
    correlativoMax: 5,
    user: {
      username: "whinderssonnunes",
      description: "Como nasceu o passinho do TikTok",
      music: "som original",
      avatar: require("../assets/user.png"),
    },
    count: {
      like: "6.1k",
      comment: "190",
      share: "287",
    },
    videosWf: [{}, {}],
  },
  {
    id: 2,
    titulo: "Mi wf #2",
    descripcion:
      "As we’ve referenced, abdominal workouts target the abdominal muscles which are important for posture and balance. Stability is especially vital for people in sports, and the elderly who are at a risk of constant tumbles and slips.",
    videoUrl:
      "https://v.pinimg.com/videos/mc/720p/09/e0/1f/09e01f06b6da8e7dacec28407a3de939.mp4",
    poster:
      "https://i.pinimg.com/736x/03/c8/d6/03c8d610e82a785ca10a4c7bd36de4d3.jpg",
    correlativoActual: 1,
    correlativoMax: 15,
    user: {
      username: "usuario # 2",
      description: "Como nasceu o passinho do TikTok",
      music: "som original",
      avatar: require("../assets/user.png"),
    },
    count: {
      like: "1.7M",
      comment: "4050",
      share: "1800",
    },
    videosWf: [{}, {}],
  },
  {
    id: 3,
    titulo: "Mi wf #3",
    descripcion: "THEY’RE NOT JUST THERE FOR THE 6 PACK LOOK!",
    videoUrl:
      "https://v.pinimg.com/videos/mc/720p/ca/5b/6d/ca5b6dfa76d97b166cb9ddc51d207939.mp4",
    poster:
      "https://i.pinimg.com/736x/7e/6c/0f/7e6c0f6b2194b9f9b9d6e78dbd4a1970.jpg",
    correlativoActual: 1,
    correlativoMax: 10,
    user: {
      username: "usuario # 3",
      description: "Como nasceu o passinho do TikTok",
      music: "som original",
      avatar: require("../assets/user.png"),
    },
    count: {
      like: "1.1M",
      comment: "4080",
      share: "2800",
    },
    videosWf: [{}, {}],
  },
];

const { height } = Dimensions.get("window");

const Container = styled(ViewPager)`
  height: ${height}px;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const Center = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 50px;
  padding: 0px;
`;

function list(videos) {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(0);
  const [empezar, setEmpezar] = useState(true);
  // var videoRefs = React.forwardRef() ; // React.createRef();
  // return videos.array.map((item) => {
  // console.log("armado>" ,  item.id );

  return (
    <Container
      orientation="vertical"
      onPageSelected={(e) => {
        setSelected(e.nativeEvent.position);
        setEmpezar(true);
      }}
      keyboardDismissMode={() => {
        console.log(" keyboardDismissMode ");
      }}
      initialPage={0}
    >
      {videos.map((item, index) => {
        // console.log('MisWf ----- ','------------------------->>>>>');
        console.log("MisWf index ", item.id);
        // console.log('MisWf item ',item);
        // console.log('MisWf ----- ','------------------------------ ');

        return (
          <View key={index}    >
            <VideoPlayer
              // ref={(ref)=>{ videoRefs = ref}}
              // ref={(ref) => (videoRefs = ref)}
              video={item.videoUrl}
              poster={item.poster}
              isPlay={selected === index && empezar}
              xkey={index}
            />
            
            <Gradient
              locations={[0, 0.26, 0.6, 1]}
              colors={[
                "rgba(26,26,26,0.6)",
                "rgba(26,26,26,0)",
                "rgba(26,26,26,0)",
                "rgba(26,26,26,0.6)",
              ]}
            >
              <Center>
                <Info
                  user={item.user}
                  empezar={{
                    id: item.id,
                    index: index,
                    videosWf: item.videosWf,
                  }}
                />

                <Sidebar avatar={item.user.avatar} count={item.count} />
              </Center>

              <View
                style={{
                  position: "absolute",
                  alignSelf: "center",
                  alignItems: "center",

                  marginTop: height - 70,
                }}
              >
                <Button
                  title="ir Empezar"
                  color="red"
                  onPress={
                    () => {
                      setEmpezar(999999);
                      console.log(
                        "clic en seEmpezar a false",
                        empezar
                      );

                      // this.videoRefs.setEmpezar(false);
                      navigation.navigate("Wf", {
                        id: item.id,
                        videosWf: item.videosWf,
                      });
                    }

                    //   && navigation.setParams({ id: element.id, titulo: element.titulo })
                  }
                />
              </View>
            </Gradient>
          </View>
        );
      })}
    </Container>
  );
  // });
}

function MisWf() {
  return <View>{list(dataMisWf)}</View>;
}
export default MisWf;
',














////////////////////////////////////////////////////////////////WF.js





import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
// import Video from "react-native-video";
import { Video } from "expo-av";
import { AntDesign, Feather } from "@expo/vector-icons";
// const sintel = require('https://v.pinimg.com/videos/mc/720p/ca/5b/6d/ca5b6dfa76d97b166cb9ddc51d207939.mp4');
const config = {
  velocityThreshold: 0.01,
  directionalOffsetThreshold: 80,
  gestureIsClickThreshold: 0.01,
};

class Wf extends Component {
  constructor(props) {
    super(props);
    // console.log('--- props >>>')
    // console.log(props)
    // console.log('<<< props ---')

    this.state = {
      myText: "I'm ready to get swiped!",
      gestureName: "none",
      backgroundColor: "#c9c9c5",
      incremental: 0,
      play: true,
      urlVideo:
        "https://v.pinimg.com/videos/mc/720p/59/5b/c2/595bc28e9e09df52a7f9928e816978a0.mp4",
    };
  }

  onSwipeLeft(gestureState) {
    // your function to go back
    console.log("deslizar Left");
    // this.props.navigation.navigate("Home");
    this.setState({
      urlVideo:
        "https://v.pinimg.com/videos/mc/720p/ca/5b/6d/ca5b6dfa76d97b166cb9ddc51d207939.mp4",
    });
  }
  onSwipeRight(gestureState) {
    // your function to go back
    console.log("deslizar Right");
    // this.props.navigation.navigate("Home");
    this.setState({
      urlVideo:
        "https://v.pinimg.com/videos/mc/720p/a2/f1/2e/a2f12ec8b1fdcd9c42f5e05e2ddf35d9.mp4",
    });
  }

  onPlay() {
    // console.log('this.playerVideo',this.playerVideo);

    if (this.playerVideo) {
      this.playerVideo.replayAsync();
    }

    if (this.state.play) {
      this.setState({ play: false });
    } else {
      this.setState({ play: true });
    }

  }

  render() {
    const parametros = this.props.route.params;
    const windowWidth = Dimensions.get("window").width; //useWindowDimensions().width;
    const windowHeight = Dimensions.get("window").height; //useWindowDimensions().height;
    // const navigation = useNavigation();

    // console.log("Wf parametros > ", parametros);
    return (
      <GestureRecognizer
        // onSwipe={(direction, state) => this.onSwipe(direction, state)}
        // onSwipeUp={(state) => this.onSwipeUp(state)}
        // onSwipeDown={(state) => this.onSwipeDown(state)}
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: this.state.backgroundColor,
        }}
      >
        <View>
        

          <Video
            source={{
              uri: this.state.urlVideo,
            }}
            ref={ref => (this.playerVideo = ref)} 
            
            // ref={this.playerVideo}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay={true}
            isLooping
            onEnd={() => { 
              console.log('Done!') ;          
            }}           
            repeat={true}
            style={{ width: windowWidth, height: windowHeight }}
            // onBuffer={this.onBuffer} // Callback when remote video is buffering
            onError={this.videoError} // Callback when video cannot be loaded
         
          />
          <View style={styles.backgroundInfo}>
            <Text style={styles.titulo}> Wf con parametro</Text>
            {/* <Text style={styles.titulo}> {parametros.titulo}</Text>
            <Text style={styles.titulo}> {parametros.descripcion}</Text>
            <Text style={styles.titulo}> {this.state.incremental}</Text> */}
          </View>
          <View style={styles.backgroundAbajo}>

            {this.state.play ? (
              <AntDesign
                name="playcircleo"
                size={64}
                color={"white"}
                style={styles.play}
                onPress={() => {
                  this.onPlay();
                }}
              />
            ) : (
              <Feather
                name="stop-circle"
                size={64}
                color="red"
                style={styles.play}
                onPress={() => {
                  this.onPlay();
                }}
              />
            )}
          </View>
          {/* <AntDesign
            name="left"
            size={24}
            color="black"
            onPress={() =>
              this.setState({ incremental: this.state.incremental - 1 })
            }
          />
          <AntDesign
            name="right"
            size={24}
            color="black"
            onPress={() =>
              this.setState({ incremental: this.state.incremental + 1 })
            }
          /> */}
        </View>
      </GestureRecognizer>
    );
  }
}

var styles = StyleSheet.create({
  background: {
    position: "absolute",
    backgroundColor: "white",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  backgroundInfo: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
    // justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
    fontSize: 14,
    fontWeight: "800",
  },
  backgroundVideo: {
    width: 0,
    height: 0,
  },

  backgroundAbajo: {
    // position: "absolute",
    // flex:0,
    bottom: 70,
    alignItems: "center",
    justifyContent:"center",
  },
  play:{
    position:"absolute",
    // flex:0,
    // alignSelf:"center",

  },
  shadow: {
    shadowColor: "red",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    // iOS
    shadowOffset: {
      width: 0, // These can't both be 0
      height: 1, // i.e. the shadow has to be offset in some way
    },
    // Android
    shadowOffset: {
      width: 0, // Same rules apply from above
      height: 1, // Can't both be 0
    },
  },
});

export default Wf;









/////////////////////////////// 


 {/* <Button
                  title="ir Empezar"
                  color="red"
                  onPress={
                    () => {
                      // setEmpezar(999999);
                      this.setState({empezar:999999})
                      console.log("clic en seEmpezar a false", "empezar");

                      // this.videoRefs.setEmpezar(false);
                     this.props.navigation.navigate("Wf", {
                        id: item.id,
                        videosWf: item.videosWf,
                      });
                    }

                    //   && navigation.setParams({ id: element.id, titulo: element.titulo })
                  }
                /> */}


                .............//////////////////////////////////
                
                
// export const func2 = () => {
//   try {
//     // return  logIn();
//     return new Promise((resolve,reject) => {
//         resolve(logIn())

//     })
//   } catch ({ message }) {
//     return "error2";
//   }
// };

// export const func1 = () => {
//   // export const func1 = () => {
//   return new Promise(function (resolve, reject) {
//     // call resolve if the method succeeds
//     //  let log = logIn;
//     // console.log("func1");

//     resolve({ user: logIn });
//     reject(new Error("Error no obtiene user en fb"));
//   });
//   //   .then((user) => {
//   //   return user;
//   // console.log("conectar>", user);
//   //   })
//   //   ;
// };

// export const conectar = new Promise(function(resolve, reject) {
//     // call resolve if the method succeeds
//     let log = await logIn()
//     resolve({user: log});
//     reject(new Error('Error no obtiene user en fb'))

//   });




////////////////////////////////////////////////////////////////////////////////////////////
//conectar.js


// const obtenerDatosFirebase = new Promise(function (resolve, reject) {
//   obtenerDatos(function (err, res) {
//     if (typeof res == 'undefined'){
//       console.log(">Conectar> obtenerDatosFirebase > undefined>", 'undefined');
//     }
//     if (err) {
//       reject(err);
//       console.log(">Conectar> obtenerDatosFirebase> Error>", err);
//     } else {
//       console.log(">Conectar> obtenerDatosFirebase> res  >", res);
//       resolve(res);
//     }
//   });
// });
// export function obtenerDatosFirebase() {
//   return new Promise((resolve, reject) =>
//     obtenerDatos(function (err, res) {
//       if (err) {
//         reject(err);
//         console.log(">Conectar> obtenerDatosFirebase> Error>", err);
//       } else {
//         console.log(">Conectar> obtenerDatosFirebase> res  >", res);
//         resolve(res);
//       }
//     })
//   );
// }

// exports.obtenerDatosFirebase;











/////////////////////////////////////////////////////////////////////////////////////////////


///home.js


import React, { Component, Fragment } from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
// import * as Facebook from "expo-facebook";
const { logIn } = require("../componentes/Conectar");
import MisWf from "../componentes/MisWf";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "" };
  }

  // async reCallLogin(){
  //   logIn().then((res) => {
  //     console.log(">Conectar logIn > okay  > ", res);
  //     return res;
  //   });
  // }
  // async loginCall() {
  //   let call = await this.reCallLogin();
  //   // console.log(">home > loginCall > ", call);
  //   // return logIn().then((call) => {
  //     if (call === undefined || call.error === -1 || call.error === -2) {
  //       // this.props.navigation.navigate("Login");
  //     } else {
  //       this.setState({ user: call.user.name });
  //       // this.props.navigation.navigate("Home");
  //     }
  //     return call;
  //   // }) .catch(err =>{
  //     // console.log(">Home loginCall  > err  > ", err);
  // // return -1
  //   // });  
  // }

  componentWillUnmount() {
    // const user = this.loginCall();
  }

  AppNavigation = () => {
    console.log("AppNavigation....");
    return <MisWf navigation={this.props.navigation} />;
  };

  render() {
 
    return (
      <Fragment>
        <View style={styles.background}>
          <this.AppNavigation />
        </View>
      </Fragment>
    );
  }
}

var styles = StyleSheet.create({
  background: {
    position: "absolute",
    backgroundColor: "white",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
  },
  titulo: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 70,
  },
  texto: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "200",
    paddingTop: 20,
  },
  user: {
    backgroundColor: "#0f97d1",
    // flex: 1,
    // position:"relative",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    // fontWeight: "600",
    fontSize: 20,
    color: "#ffffff",
  },
});

export default HomeScreen;





///////////////////////////////////////////////////////// 
//////MisWf.js
 


import React, { useState, Component, Fragment } from "react";
import {
  View,
  Text,
  Button,
  Dimensions,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import ViewPager from "@react-native-community/viewpager";
// import { useNavigation } from "@react-navigation/native";
import VideoPlayer from "./VideoPlayer";
import Info from "./Info";
import Sidebar from "./Sidebar";
// import dataVideos from "./dataVideos";
const { height, width } = Dimensions.get("window");
import { obtenerDatos } from "./Conectar";

const Container = styled(ViewPager)`
  height: ${height}px;
  flex: 1;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const Center = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 50px;
  padding: 0px;
`;

function list(videos) {
  // var videoRefs = React.forwardRef() ; // React.createRef();
  // return videos.array.map((item) => {
  // console.log("armado>" ,  item.id );

  return (
    <View>
      <Text>{"ssssssss"}</Text>
    </View>
  );
  // });
}

function obtenerDatosCallF() {
  try {
    // return obtenerDatos(function (err, res) {
    return obtenerDatos().then((res) => {
      // console.log(">Miswf Conectar> obtenerDatos> res  >", res.lenght,typeof res);
      return res;
    });
  } catch (error) {
    console.log(">MisWf>> obtenerDatosCallF> catch >", "\n", error);
  }
}

class MisWf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      empezar: true,
      play: true,
      dataVideos: [],
    };

    obtenerDatosCallF().then((res) => {
      // console.log( ">MisWf> constructor > obtenerDatosCallF> okay > res.lenght ", res.lenght, typeof res, "\n", res[0] );
      if (res[0]) {
        console.log(">MisWf> constructor > obtenerDatosCallF> okay > res.lenght > ok state> ",res.lenght,typeof res,"\n");
        this.setState({ dataVideos: res });
      }
    });
  }

  componentDidMount() {}

  onPlay() {
    if (this.state.empezar) {
      this.setState({ empezar: false });
    } else {
      this.setState({ empezar: true });
    }
  }

  render() {
    // console.log('>MisWf> render > state dato videos>', typeof this.state.dataVideos)
    // if (!typeof this.state.dataVideos === 'undefined' || !typeof this.state.dataVideos === 'object') {
    // console.log('>MisWf> render > state dato videos>ok>', this.state.dataVideos)
    // }

    return (
      <Fragment>
        <Container
          orientation="vertical"
          onPageSelected={(e) => {
            this.setState({ selected: e.nativeEvent.position, empezar: true });
          }}
          keyboardDismissMode={() => {
            console.log(" keyboardDismissMode ");
          }}
          initialPage={0}
        >
          {this.state.dataVideos[0] &&
            this.state.dataVideos.map((item, index) => {
              return (
                <View key={index}>
                  <VideoPlayer
                    video={item.videoUrl}
                    poster={item.poster}
                    isPlay={this.state.selected === index && this.state.empezar}
                    xkey={index}
                  />

                  <Gradient
                    locations={[0, 0.26, 0.6, 1]}
                    colors={[
                      "rgba(26,26,26,0.6)",
                      "rgba(26,26,26,0)",
                      "rgba(26,26,26,0)",
                      "rgba(26,26,26,0.6)",
                    ]}
                  >
                    <View
                      style={{
                        position: "absolute",
                        alignSelf: "center",
                        alignItems: "center",
                        marginTop: 0,
                      }}
                    >
                      <TouchableHighlight
                        onPress={() => {
                          this.onPlay();
                        }}
                        underlayColor="transparent"
                      >
                        <View
                          style={{
                            width: width,
                            height: height,
                            alignItems: "center",
                            backgroundColor: "transparent",
                          }}
                        ></View>
                      </TouchableHighlight>
                    </View>

                    <Center>
                      <Info
                        user={item.user}
                        empezar={{
                          id: item.id,
                          index: index,
                          videosWf: item.videosWf,
                        }}
                      />

                      <Sidebar avatar={item.user.avatar} count={item.count} />
                    </Center>

                    <View
                      style={{
                        position: "absolute",
                        alignSelf: "center",
                        alignItems: "center",
                        marginTop: height - 70,
                      }}
                    >
                      <Button
                        title="ir Empezar"
                        color="red"
                        onPress={() => {
                          this.setState({ empezar: 999999 });
                          console.log(
                            "MisWf > clic en boton: ",
                            this.state.selected === index && this.state.empezar
                          );
                          this.props.navigation.navigate("Wf", {
                            id: item.id,
                            videosWf: item.videosWf,
                          });
                        }}
                      />
                    </View>
                  </Gradient>
                </View>
              );
            })}
        </Container>
      </Fragment>
    );
  }
}

export default MisWf;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: "center",
  },
  button: {
    marginBottom: 30,
    width: 300,
    height: 300,
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
  },
});










//////////////////////////// VideoPlayer

import React, { useState, Component } from "react";
import { Dimensions, View, Text } from "react-native";

import { Video } from "expo-av";
import styled from "styled-components/native";

const Play = Video; //styled(Video)` `

const Poster = styled.ImageBackground`
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
`;
const { height, width } = Dimensions.get("window");
// var videoRefs = React.createRef();

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { videoRef: null };
  }
  componentWillUnmount() {
    this.props.isPlay = false;
  }

  reiniciar(videoRefs) {
    console.log(">videplayer>reiniciar>");
    // const [videoRefs] = useState();
    if (videoRefs) {
      videoRefs.replayAsync();
      // videoRefs.seek(0);
    }
  }

  ViewVideoPlayer = ({ video, poster, isPlay, xkey }) => {
    // const [empezar, setEmpezar] = useState(true);
    // console.log('>VideoPlayer>isPlay.poster>',isPlay)
    return 1 === 1 ? (
      <Play
        // ref={(refs) => this.setState({ videoRef: refs })}
        source={{
          uri: video,
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={isPlay}
        pause={!isPlay}
        isLooping
        onEnd={() => {
          console.log("Done!");
        }}
        // useNativeControls={false}
        usePoster={true}
        posterSource={{
          uri: poster,
        }}
        posterStyle={{ width: width, height: height }}
        style={{ width: width, height: height }}
      />
    ) : (
      <Poster
        source={{
          uri: poster,
        }}
      />
    );
  };

  render() {
    // console.log("videoplayer>", this.props.isPlay);
    return (
      <View>
        <this.ViewVideoPlayer
          // ref={((refs)=>this.setState({videoRef:refs}))}
          video={this.props.video}
          poster={this.props.poster}
          isPlay={this.props.isPlay}
          xkey={this.props.xkey}
          //   reiniciar={() => reiniciar(this.props.reiniciar)}
        />
      </View>
    );
  }
}

export default VideoPlayer;


/////////////////




import React, { useState, useEffect, Component } from "react";
import { Dimensions, View, Text } from "react-native";

import { Video } from "expo-av";
import styled from "styled-components/native";

// const Play = Video; //styled(Video)` `

const Poster = styled.ImageBackground`
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
`;
const { height, width } = Dimensions.get("window");

const VideoPlayer = (props) => {
  const [isPlay, setIsPlay] = useState(false);
  // const [video, setVideo] = useState("");
  // const [poster, setPoster] = useState("");
  const [videoRef, setVideoRef] = useState({});

  useEffect(() => {
    if (props.video) {
      //     setIsPlay(props.isPlay);
      //     setVideo(props.video);
      //     setPoster(props.poster);

      console.log(">videoplayer>effect", props.reiniciar);
    }
  }, []);

  // video={this.props.video}
  // poster={this.props.poster}
  // isPlay={this.props.isPlay}
  // xkey={this.props.xkey}
  console.log(">videoplayer>reiniciar", props.reiniciar,props.video);

  if (props.reiniciar&&props.video===videoRef.source) {
    console.log(">videoplayer>reiniciar", props.reiniciar);
    videoRef.replayAsync();
    
  }

  return 1 === 1 ? (
    <Video
      ref={(component) => {
        setVideoRef(component);
      }}
      source={{
        uri: props.video,
      }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay={props.isPlay}
      pause={(ref) => {console.log('ddaasxa');videoRef.replayAsync();return !props.isPlay}}
      isLooping
      onEnd={() => {
        console.log("Done!");
      }}
      // useNativeControls={false}
      usePoster={true}
      posterSource={{
        uri: props.poster,
      }}
      posterStyle={{ width: width, height: height }}
      style={{ width: width, height: height }}
    />
  ) : (
    <Poster
      source={{
        uri: props.poster,
      }}
    />
  );
};

export default VideoPlayer;



.....................


return true? (
      <Video
        ref={(e) => (this.playbackObject = e)}
        source={{
          uri: this.props.video,
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={this.props.isPlay}
        pause={(ref) => {
          !this.props.isPlay;
        }}
        isLooping
        onEnd={() => {
          console.log("Done!");
        }}
        // useNativeControls={false}
        // usePoster={true}
        posterSource={{
          uri: this.props.poster,
        }}
        posterStyle={{ width: width, height: height }}
        style={{ width: width, height: height }}
      />
    ) : (
      <Poster
        source={{
          uri: this.props.poster,
        }}
      />
    );
  }
}

 

export default VideoPlayer;


////////////////////////////////////////////////




// import React, { Component , useContext} from "react";
// import { View, Text, Button, StyleSheet } from "react-native";
// import { AuthContext } from "../componentes/Navigation/AuthProvider";
// import FormButton from "../componentes/FormButton";

// class Agregar extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       agregar: false,
//     };
//   }

//   render() {
//     const {user, logout} = useContext(AuthContext);

//     // this.setState({agregar:true});
//     return (
//       <View style={styles.container}>
//         <FormButton buttonTitle="Logout" onPress={() => logout()} />

//         <Text> Agregar </Text>
//         <Text> {user.json} </Text>
//         <Button
//           title="Agregar a Wf"
//           onPress={() => this.props.navigation.navigate("AgregarWf")}
//         />
//       </View>
//     );
//   }
// }

// export default Agregar;

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 35,
//     alignItems: "center",
//     backgroundColor: "yellow",
//   },
//   button: {
//     marginBottom: 30,
//     width: 300,
//     height: 300,
//     alignItems: "center",
//     backgroundColor: "#2196F3",
//   },
//   buttonText: {
//     textAlign: "center",
//     padding: 20,
//     color: "white",
//   },
// });





// async function obtenerDatosCallF() {
//   try {
//     // let { datosmiswf, obtenerDatosMisWF } = useContext(AuthContext);
//     return obtenerDatosMisWF().then((res) => {
//       console.log(">Miswf> datosmiswf > provider>", datosmiswf);
//       console.log(">Miswf> datosMisWF > 3>res[0]", res[0]);
//       setDataVideos(res);
//       return 1
//     });

//   } catch (error) {
//     console.log(">MisWf>> obtenerDatosCallF> catch >", "\n", error);
//   }
// }



     // datasFx = await firebase
            //   .database()
            //   .ref("/dataVideos")
            //   .once("value")
            //   .then((snapshot) => {
            //     console.log(">AuthProvider> snapshot > ........",snapshot);
            //     datasFx = snapshot.val();
            //     return datasFx;
            //   });
















            ------------
  {/* <View style={{
          flex:1,
             flexDirection: "row",
             marginVertical: 16,
             backgroundColor:'green'
        }}>
        <Button title="Fade In" onPress={fadeIn} />
        <Button title="Fade Out" onPress={fadeOut} />
      </View> */}
      

              // setPagedatosmiswf(dataVideos.length-2);
              // setUltimo(true);
              // setSelected(dataVideos.length - 2)
              // setPagedatosmiswf(dataVideos.length-2);
              // console.log("---{2}------onPageScroll-select ---ultimo-",ultimo,
              // e.nativeEvent.offset === 0,"--",e.nativeEvent.offset,'.length.',dataVideos.length,'.sel.',selected,'.pagedatosmiswf.',pagedatosmiswf);



   // if (e.nativeEvent.position >= 1 && !ultimo) {
              //   //dgb >=2
              //   setPagedatosmiswf(e.nativeEvent.position);
              //   console.log(">[1] vertical scroll>onPageSelected-------------------------", e.nativeEvent.position,ultimo);
              // }else{
              //   if(e.nativeEvent.position >= 1 && ultimo){
              //     setPagedatosmiswf(e.nativeEvent.position - 2);
              //     console.log(">[2] vertical scroll>onPageSelected-------------------------", e.nativeEvent.position,ultimo);
              //   }
              // }




             // if(ultimo){
            //   setUltimo(false);
            //   loadDataVideos();
            //   console.log("---{1}----||||||||||||||||||||||||||||||||||--onPageScroll-select ---ultimo-",ultimo,
            //   e.nativeEvent.offset === 0,"--",e.nativeEvent.offset,'.length.',dataVideos.length,'.sel.',selected,'.pagedatosmiswf.',pagedatosmiswf);

            // };
            //   if(e.nativeEvent.offset === 0 && dataVideos.length === selected+1 && !ultimo)
            //     {

            //       setUltimo(true);
            //       setSelected(dataVideos.length - 2);
            //       setPagedatosmiswf(dataVideos.length - 2);
            //     }else{
            //       console.log("---2------onPageScroll-select ---ultimo-",ultimo,e.nativeEvent.offset === 0,"--",
            //       e.nativeEvent.offset,'.length.',dataVideos.length,'.sel.',selected,'.pagedatosmiswf.',pagedatosmiswf);
            //       //if(selected === pagedatosmiswf) {}//no hacer nada
            //       if(e.nativeEvent.offset === 0 && dataVideos.length === selected+1 && ultimo){
            //         setSelected(selected - 1);

            //         setPagedatosmiswf(selected);
            //       // setSelected(dataVideos.length - 3);

            //       }
            //     }
            // }










///////////////////////////////////////
import React, {
  useState,
  useEffect,
  Component,
  Fragment,
  useContext,
} from "react";
import {
  View,
  Text,
  Button,
  Dimensions,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  RefreshControl,
  SafeAreaView,
  LogBox,
  Animated,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import ViewPager from "@react-native-community/viewpager";
// import { useNavigation } from "@react-navigation/native";
import VideoPlayer from "./VideoPlayer";
import Info from "./Info";
import Sidebar from "./Sidebar";
// import dataVideos from "./dataVideos";
const { height, width } = Dimensions.get("window");
// import { obtenerDatos } from "./Conectar";
import { AuthContext } from "../componentes/Navigation/AuthProvider";

const Container = styled(ViewPager)`
  height: ${height}px;
  flex: 1;
  background: #000;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const Center = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 50px;
  padding: 0px;
`;

const MisWf = ({ navigation }) => {
  const {
    user,
    logout,
    language,
    datosmiswf,
    setDatosmiswf,
    obtenerDatosMisWF,
    pagedatosmiswf,
    setPagedatosmiswf,
    resetDatosMisWF,
  } = useContext(AuthContext);

  const [selected, setSelected] = useState(0);
  const [empezar, setEmpezar] = useState(true);
  const [play, setPlay] = useState(true);

  const [dataVideos, setDataVideos] = useState({});

  const [refreshing, setRefreshing] = useState(false);
  const [ultimo, setUltimo] = useState(false);

  const loadDataVideos = async (ret) => {
    console.log(">loadDataVideos> select-", selected, "--", ret);

    if (ret) {
    } else {
      ret = selected;
    }
    if (!dataVideos[0] && ret === 0) {
      setPagedatosmiswf(0);
      obtenerDatosMisWF().then((res) => {
        setDataVideos(res);
        setDatosmiswf(res); //provider
        console.log(">MisWf traer todo", ret);
      });
    }
    // console.log('-----------------------------------------------------ret---',ret);
    if (dataVideos[0] && ret >= 1) {
      //dgb 2
      let misDatos = dataVideos;
      if (!!misDatos.find((e) => e.id.toString() == (ret + 2 + 1).toString())) {
        //dgb +2
        // console.log("---no debe cargarrrrrr------p.",pagedatosmiswf,"-fin-sele-",ret );
      } else {
        // console.log(">MisWf traer     >", ret);
        setTimeout(() => setUltimo(false), 300); //dgb ultimo

        obtenerDatosMisWF(ret).then((res) => {
          if (!!res) {
            if (
              //dgb >=2
              ret >= 1 &&
              !misDatos.find((e) => e.id.toString() === res.id.toString())
            ) {
              //add/push new data
              let cuenta = [];
              cuenta = misDatos.push(res);
              setDataVideos(misDatos);
              setDatosmiswf(misDatos); //provider set
            }
          }
        });
      }
    }
  };

  useEffect(() => {
    loadDataVideos(0);
    console.log(">MisWf > setUltimo(true)---- useEffect >", selected);
  }, [ ]);

  LogBox.ignoreAllLogs(); //Ignore all log notifications

  if (Array.isArray(dataVideos)) {
    console.log(">MisWf> return........true...",selected, dataVideos.length,Array.isArray(dataVideos) );
  } else {
    console.log(">MisWf> return........false..",selected,typeof dataVideos,!!dataVideos,Array.isArray(dataVideos) );
  }

  return language ? (
    // <Fragment>
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl
            enabled={selected === 0 ? true : false}
            refreshing={refreshing}
            onRefresh={() => {
              if (selected === 0) {
                setRefreshing(true);
                setPagedatosmiswf(0);
                setDatosmiswf(null);
                setSelected(0);
                obtenerDatosMisWF(0).then((res) => {
                  setDataVideos(res);
                  setDatosmiswf(res); //provider set
                  console.log(">MisWf traer   > refreshing", !!res);
                  setRefreshing(false);
                });
              } else {
                setRefreshing(false);
              }
            }}
          />
        }
      >
        <Container
          orientation="vertical"
          transitionStyle="scroll"
          keyboardDismissMode="on-drag"
          onPageScroll={(e) => {
            if (
              e.nativeEvent.offset === 0 &&
              selected > 0 &&
              selected + 1 === dataVideos.length
            ) {
              setUltimo(true); //ultimo
              loadDataVideos(selected - 1);
            } else {
              setUltimo(false); //ultimo
            }
          }}
          onPageSelected={(e) => {
            //    Array.isArray(dataVideos)
            if (!refreshing && !!dataVideos[0]) {
              setSelected(e.nativeEvent.position);
              setEmpezar(true);
              setPagedatosmiswf(e.nativeEvent.position);
            }
          }}
          keyboardDismissMode={() => {
            console.log(" keyboardDismissMode ");
          }}
          initialPage={0}
          style={{ backgroundColor: "purple" }}
          key={1}
        >
          {
            //dataVideos[0] &&
              Array.isArray(dataVideos) ?   (
                  dataVideos.map((item, index) => {
                return (
                  <View key={index}>
                    <VideoPlayer
                      video={item.videoUrl}
                      poster={item.poster}
                      isPlay={selected === index && empezar}
                      xkey={index}
                    />

                    <Gradient
                      locations={[0, 0.26, 0.6, 1]}
                      colors={[
                        "rgba(26,26,26,0.6)",
                        "rgba(26,26,26,0)",
                        "rgba(26,26,26,0)",
                        "rgba(26,26,26,0.6)",
                      ]}
                    >
                      <View
                        style={{
                          position: "absolute",
                          alignSelf: "center",
                          alignItems: "center",
                          marginTop: 0,
                        }}
                      >
                        <TouchableHighlight
                          onPress={() => {
                            empezar ? setEmpezar(false) : setEmpezar(true);
                          }}
                          underlayColor="transparent"
                        >
                          <View
                            style={{
                              width: width,
                              height: height,
                              alignItems: "center",
                              backgroundColor: "transparent",
                            }}
                          ></View>
                        </TouchableHighlight>
                      </View>

                      <Center>
                        <Info
                          user={item.user}
                          data={{ id: item.id }}
                          empezar={{
                            id: item.id,
                            index: index,
                            videosWf: item.videosWf,
                          }}
                        />

                        <Sidebar avatar={item.user.avatar} count={item.count} />
                      </Center>

                      <View
                        style={{
                          position: "absolute",
                          alignSelf: "center",
                          alignItems: "center",
                          marginTop: height - 100
                        }}
                      >
                        <Button
                          title={language.wf.empezar}
                          color="red"
                          onPress={() => {
                            setEmpezar(false);
                            // console.log(
                            //   "MisWf > clic en boton: ",
                            //   selected === index && empezar
                            // );
                            navigation.navigate("Wf", {
                              id: item.id,
                              videosWf: item.videosWf,
                            });
                          }}
                        />
                      </View>
                    </Gradient>
                  </View>
                );
              })
            ) :   (
              <View style={{backgroundColor:"blue"}}>
                <Text>{"No cargo map"}</Text>
              </View>
            )
          }
        </Container>

        {selected + 1 === dataVideos.length && ultimo === true ? (
          <Animated.View
            style={{
              backgroundColor: "#B00020",
              flex: 1,
              height: 50,
            }}
          >
            <Text
              style={{
                justifyContent: "center",
                alignSelf: "center",
                textAlign: "center",
                marginTop: 15,
                color: "#fff",
              }}
            >
              {"...Loading..."}
            </Text>
          </Animated.View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  ) : (
    <View>
      <Text>{"No loading..."}</Text>
    </View>
  );
};

export default MisWf;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: "center",
  },
  button: {
    marginBottom: 30,
    width: 300,
    height: 300,
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
  },
});


//////////////////////////////////////
import React, {
  useState,
  useEffect,
  Component,
  Fragment,
  useContext,
} from "react";
import {
  View,
  Text,
  Button,
  Dimensions,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  RefreshControl,
  SafeAreaView,
  LogBox,
  Animated,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import ViewPager from "@react-native-community/viewpager";
// import { useNavigation } from "@react-navigation/native";
import VideoPlayer from "./VideoPlayer";
import Info from "./Info";
import Sidebar from "./Sidebar";
// import dataVideos from "./dataVideos";
const { height, width } = Dimensions.get("window");
// import { obtenerDatos } from "./Conectar";
import { AuthContext } from "../componentes/Navigation/AuthProvider";

const Container = styled(ViewPager)`
  height: ${height}px;
  flex: 1;
  background: #000;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const Center = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 50px;
  padding: 0px;
`;

const MisWf = ({ navigation }) => {
  const {
    user,
    logout,
    language,
    datosmiswf,
    setDatosmiswf,
    obtenerDatosMisWF,
    pagedatosmiswf,
    setPagedatosmiswf,
    resetDatosMisWF,
  } = useContext(AuthContext);

  const [selected, setSelected] = useState(0);
  const [empezar, setEmpezar] = useState(true);
  const [play, setPlay] = useState(true);

  const [dataVideos, setDataVideos] = useState({});

  const [refreshing, setRefreshing] = useState(false);
  const [ultimo, setUltimo] = useState(false);

  const LoadArrayMap = () => {
    if (!!dataVideos) {
      if (Array.isArray(dataVideos)) {
        return dataVideos.map((item, index) => {
          return  (
            <View key={index}>
              <VideoPlayer
                video={item.videoUrl}
                poster={item.poster}
                isPlay={selected === index && empezar}
                xkey={index}
              />

              <Gradient
                locations={[0, 0.26, 0.6, 1]}
                colors={[
                  "rgba(26,26,26,0.6)",
                  "rgba(26,26,26,0)",
                  "rgba(26,26,26,0)",
                  "rgba(26,26,26,0.6)",
                ]}
              >
                <View
                  style={{
                    position: "absolute",
                    alignSelf: "center",
                    alignItems: "center",
                    marginTop: 0,
                  }}
                >
                  <TouchableHighlight
                    onPress={() => {
                      empezar ? setEmpezar(false) : setEmpezar(true);
                    }}
                    underlayColor="transparent"
                  >
                    <View
                      style={{
                        width: width,
                        height: height,
                        alignItems: "center",
                        backgroundColor: "transparent",
                      }}
                    ></View>
                  </TouchableHighlight>
                </View>

                <Center>
                  <Info
                    user={item.user}
                    data={{ id: item.id }}
                    empezar={{
                      id: item.id,
                      index: index,
                      videosWf: item.videosWf,
                    }}
                  />

                  <Sidebar avatar={item.user.avatar} count={item.count} />
                </Center>

                <View
                  style={{
                    position: "absolute",
                    alignSelf: "center",
                    alignItems: "center",
                    marginTop: height - 100,
                  }}
                >
                  <Button
                    title={language.wf.empezar}
                    color="red"
                    onPress={() => {
                      setEmpezar(false);
                      // console.log(
                      //   "MisWf > clic en boton: ",
                      //   selected === index && empezar
                      // );
                      navigation.navigate("Wf", {
                        id: item.id,
                        videosWf: item.videosWf,
                      });
                    }}
                  />
                </View>
              </Gradient>
            </View>
          );
        });
      } else {
        return (
          <View style={{ backgroundColor: "blue" }}>
            <Text>{"No cargo map-"}</Text>
          </View>
        );
      }
    } else {
      <View style={{ backgroundColor: "blue" }}>
        <Text>{"No cargo map"}</Text>
      </View>;
    }
  };

  const loadDataVideos = async (ret) => {
    console.log(">loadDataVideos> select-", selected, "--", ret);

    if (ret) {
    } else {
      ret = selected;
    }
    if (!dataVideos[0] && ret === 0) {
      setPagedatosmiswf(0);
      obtenerDatosMisWF().then((res) => {
        setDataVideos(res);
        setDatosmiswf(res); //provider
        console.log(">MisWf traer todo", ret);
      });
    }
    // console.log('-----------------------------------------------------ret---',ret);
    if (dataVideos[0] && ret >= 1) {
      //dgb 2
      let misDatos = dataVideos;
      if (!!misDatos.find((e) => e.id.toString() == (ret + 2 + 1).toString())) {
        //dgb +2
        // console.log("---no debe cargarrrrrr------p.",pagedatosmiswf,"-fin-sele-",ret );
      } else {
        // console.log(">MisWf traer     >", ret);
        setTimeout(() => setUltimo(false), 300); //dgb ultimo

        obtenerDatosMisWF(ret).then((res) => {
          if (!!res) {
            if (
              //dgb >=2
              ret >= 1 &&
              !misDatos.find((e) => e.id.toString() === res.id.toString())
            ) {
              //add/push new data
              let cuenta = [];
              cuenta = misDatos.push(res);
              setDataVideos(misDatos);
              setDatosmiswf(misDatos); //provider set
            }
          }
        });
      }
    }
  };

  useEffect(() => {
    loadDataVideos(0);
    console.log(">MisWf > setUltimo(true)---- useEffect >", selected);
  }, []);

  LogBox.ignoreAllLogs(); //Ignore all log notifications

  if (Array.isArray(dataVideos)) {
    console.log(
      ">MisWf> return........true...",
      selected,
      dataVideos.length,
      Array.isArray(dataVideos)
    );
  } else {
    console.log(
      ">MisWf> return........false..",
      selected,
      typeof dataVideos,
      !!dataVideos,
      Array.isArray(dataVideos)
    );
  }

  return language ? (
    // <Fragment>
    <SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl
            enabled={selected === 0 ? true : false}
            refreshing={refreshing}
            onRefresh={() => {
              if (selected === 0) {
                setRefreshing(true);
                setPagedatosmiswf(0);
                setDatosmiswf(null);
                setSelected(0);
                obtenerDatosMisWF(0).then((res) => {
                  setDataVideos(res);
                  setDatosmiswf(res); //provider set
                  console.log(">MisWf traer   > refreshing", !!res);
                  setRefreshing(false);
                });
              } else {
                setRefreshing(false);
              }
            }}
          />
        }
      >
        <Container
          orientation="vertical"
          transitionStyle="scroll"
          keyboardDismissMode="on-drag"
          onPageScroll={(e) => {
            if (
              e.nativeEvent.offset === 0 &&
              selected > 0 &&
              selected + 1 === dataVideos.length
            ) {
              setUltimo(true); //ultimo
              loadDataVideos(selected - 1);
            } else {
              setUltimo(false); //ultimo
            }
          }}
          onPageSelected={(e) => {
            //    Array.isArray(dataVideos)
            if (!refreshing && !!dataVideos[0]) {
              setSelected(e.nativeEvent.position);
              setEmpezar(true);
              setPagedatosmiswf(e.nativeEvent.position);
            }
          }}
          keyboardDismissMode={() => {
            console.log(" keyboardDismissMode ");
          }}
          initialPage={0}
          style={{ backgroundColor: "purple" }}
          key={1}
        >
          {Array.isArray(dataVideos) ? <LoadArrayMap /> : null}
        </Container>

        {selected + 1 === dataVideos.length && ultimo === true ? (
          <Animated.View
            style={{
              backgroundColor: "#B00020",
              flex: 1,
              height: 50,
            }}
          >
            <Text
              style={{
                justifyContent: "center",
                alignSelf: "center",
                textAlign: "center",
                marginTop: 15,
                color: "#fff",
              }}
            >
              {"...Loading..."}
            </Text>
          </Animated.View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  ) : (
    <View>
      <Text>{"No loading..."}</Text>
    </View>
  );
};

export default MisWf;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: "center",
  },
  button: {
    marginBottom: 30,
    width: 300,
    height: 300,
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
  },
});


/////////////////////////////


{Array.isArray(dataVideos) ? 
  dataVideos.map((item, index) => {
  return  (
    <View key={index}>
      <VideoPlayer
        video={item.videoUrl}
        poster={item.poster}
        isPlay={selected === index && empezar}
        xkey={index}
      />

      <Gradient
        locations={[0, 0.26, 0.6, 1]}
        colors={[
          "rgba(26,26,26,0.6)",
          "rgba(26,26,26,0)",
          "rgba(26,26,26,0)",
          "rgba(26,26,26,0.6)",
        ]}
      >
        <View
          style={{
            position: "absolute",
            alignSelf: "center",
            alignItems: "center",
            marginTop: 0,
          }}
        >
          <TouchableHighlight
            onPress={() => {
              empezar ? setEmpezar(false) : setEmpezar(true);
            }}
            underlayColor="transparent"
          >
            <View
              style={{
                width: width,
                height: height,
                alignItems: "center",
                backgroundColor: "transparent",
              }}
            ></View>
          </TouchableHighlight>
        </View>

        <Center>
          <Info
            user={item.user}
            data={{ id: item.id }}
            empezar={{
              id: item.id,
              index: index,
              videosWf: item.videosWf,
            }}
          />

          <Sidebar avatar={item.user.avatar} count={item.count} />
        </Center>

        <View
          style={{
            position: "absolute",
            alignSelf: "center",
            alignItems: "center",
            marginTop: height - 100,
          }}
        >
          <Button
            title={language.wf.empezar}
            color="red"
            onPress={() => {
              setEmpezar(false);
              // console.log(
              //   "MisWf > clic en boton: ",
              //   selected === index && empezar
              // );
              navigation.navigate("Wf", {
                id: item.id,
                videosWf: item.videosWf,
              });
            }}
          />
        </View>
      </Gradient>
    </View>
  );
})
: null}



//////////////////////////VideoPlayer.js

import React, { useState, useEffect, Component } from "react";
import { Dimensions, View, Text } from "react-native";

import { Video } from "expo-av";
import styled from "styled-components/native";

// const Play = Video; //styled(Video)` `

const Poster = styled.ImageBackground`
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
`;
const { height, width } = Dimensions.get("window");

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  _replayVideo = async () => {
    try {
      this.playbackObject.replayAsync({
        progressUpdateIntervalMillis: 5000,
        positionMillis: 0,
        shouldPlay: true,
        rate: 1.0,
        shouldCorrectPitch: false,
        volume: 1.0,
        isMuted: false,
        isLooping: true,
      });
    } catch (e) {
      console.log(">VideoPlayer_replayVideo>", e);
    }
  };

  componentDidUpdate() {
    if (this.props.reiniciar && this.props.video && this.props.isPlay) {
      // console.log(
      //   ">videoplayer>reiniciando.....",
      //   this.props.isPlay,
      //   this.props.reiniciar
      // );
      this._replayVideo();
    }
  }

  render() {
    // console.log(">videoplayer> .....",this.props.video);

    return true ? (
      <Video
        ref={(e) => (this.playbackObject = e)}
        source={{
          uri: this.props.video,
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay={//() => {
          // console.log(">VideoPlayer>shouldPlay >", this.props.isPlay)&&
            this.props.isPlay
        }//}
        pause={(ref) => {
          // console.log(">VideoPlayer>pause      >", !this.props.isPlay);
            !this.props.isPlay;
        }}
        isLooping
        onEnd={() => {
          console.log("Done!");
        }}
        useNativeControls={false}
        usePoster={true}
        posterSource={{
          uri: this.props.poster,
        }}
        // posterStyle={{ width: width, height: height }}
        style={{
          backgroundColor: "red",
          width: width,
          height: height,
          flex: 1,
        }}
        // onPlaybackStatusUpdate={(params) => {
        //   this.setState({ count: this.state.count + 1 });
        //   console.log(this.state.count);
        // }}
        onReadyForDisplay={() => {
          console.log(">VideoPlayer>onReadyForDisplay",this.props.video);
        }}
      />
    ) : (
    <View style={{backgroundColor:'red'}}><Text>{"Poster...."}</Text></View>
      // <Poster
      //   source={{
      //     uri: this.props.poster,
      //   }}
      // />
    );
  }
}

export default VideoPlayer;



/////////////////////////////////////////


////////////////////////////////////////


import React, {
  useState,
  useEffect,
  Component,
  Fragment,
  useContext,
} from "react";
import {
  View,
  Text,
  Button,
  Dimensions,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  RefreshControl,
  SafeAreaView,
  LogBox,
  Animated,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import ViewPager from "@react-native-community/viewpager";
// import { useNavigation } from "@react-navigation/native";
import VideoPlayer from "./VideoPlayer";
import Info from "./Info";
import Sidebar from "./Sidebar";
// import dataVideos from "./dataVideos";
const { height, width } = Dimensions.get("window");
// import { obtenerDatos } from "./Conectar";
import { AuthContext } from "../componentes/Navigation/AuthProvider";

// const Videos  = VideoPlayer
const Container = styled(ViewPager)`
  height: ${height}px;
  flex: 1;
  background: #000;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const Center = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 50px;
  padding: 0px;
`;

const MisWf = ({ navigation }) => {
  const {
    user,
    logout,
    language,
    datosmiswf,
    setDatosmiswf,
    obtenerDatosMisWF,
    pagedatosmiswf,
    setPagedatosmiswf,
    resetDatosMisWF,
  } = useContext(AuthContext);

  const [selected, setSelected] = useState(0);
  const [empezar, setEmpezar] = useState(true);
  const [play, setPlay] = useState(true);

  const [dataVideos, setDataVideos] = useState({});

  const [refreshing, setRefreshing] = useState(false);
  const [ultimo, setUltimo] = useState(false);

  const loadDataVideos = async (ret) => {
    console.log(">loadDataVideos> select-", selected, "--", ret);

    if (ret) {
    } else {
      ret = selected;
    }
    if (!dataVideos[0] && ret === 0) {
      setPagedatosmiswf(0);
      obtenerDatosMisWF().then((res) => {
        setDataVideos(res);
        setDatosmiswf(res); //provider
        console.log(">MisWf traer todo", ret);
      });
    }
    // console.log('-----------------------------------------------------ret---',ret);
    if (dataVideos[0] && ret >= 1) {
      //dgb 2
      let misDatos = dataVideos;
      if (!!misDatos.find((e) => e.id.toString() == (ret + 2 + 1).toString())) {
        //dgb +2
        console.log(
          "---no debe cargarrrrrr------p.",
          pagedatosmiswf,
          "-fin-sele-",
          ret
        );
      } else {
        console.log(
          "---si debe cargarrrrrr------p.",
          pagedatosmiswf,
          "-fin-sele-",
          ret
        );
        if (ultimo) {
          console.log("ultimo");
          setTimeout(() => setUltimo(false), 300); //dgb ultimo
        }

        obtenerDatosMisWF(ret).then((res) => {
          if (!!res) {
            if (
              //dgb >=2
              ret >= 1 &&
              !misDatos.find((e) => e.id.toString() === res.id.toString())
            ) {
              //add/push new data
              let cuenta = [];
              cuenta = misDatos.push(res);
              setDataVideos(misDatos);
              setDatosmiswf(misDatos); //provider set
            }
          }
        });
      }
    }
  };

  useEffect(() => {
    loadDataVideos(0);

    // console.log(">MisWf > setUltimo(true)---- useEffect >", selected);
  }, [selected]);

  // LogBox.ignoreAllLogs(); //Ignore all log notifications

  // if (Array.isArray(dataVideos)) {
  //   console.log(
  //     ">MisWf> return........true...",
  //     selected,
  //     dataVideos.length,
  //     Array.isArray(dataVideos)
  //   );
  // }
  //  else {
  //   console.log(
  //     ">MisWf> return........false..",
  //     selected,
  //     typeof dataVideos,
  //     !!dataVideos,
  //     Array.isArray(dataVideos)
  //   );
  // }

  const LoadArrayMap = () => {
    // if (!!dataVideos) {
      if (Array.isArray(dataVideos)) {
        return dataVideos.map((item, index) => {
          // console.log("rende>__________",dataVideos.length,index,'-id-',item.id)
          return (
            <View
              index={item.id + 999999}
              key={item.id + 999999}
              style={{ flex: 1, backgroundColor: "#10c781" }}
            >
              <VideoPlayer
                video={item.videoUrl}
                poster={item.poster}
                isPlay={selected === index && empezar}
                xkey={index}
                reiniciar={false}
              />
              <Gradient
                key={item.id + 888888}
                locations={[0, 0.26, 0.6, 1]}
                colors={[
                  "rgba(26,26,26,0.6)",
                  "rgba(26,26,26,0)",
                  "rgba(26,26,26,0)",
                  "rgba(26,26,26,0.6)",
                ]}
              >
                <View
                  key={item.id + 777777}
                  style={{
                    position: "absolute",
                    alignSelf: "center",
                    alignItems: "center",
                    marginTop: 0,
                    backgroundColor: "transparent",
                  }}
                >
                  <TouchableHighlight
                    key={item.id + 666666}
                    onPress={() => {
                      empezar ? setEmpezar(false) : setEmpezar(true);
                    }}
                    underlayColor="transparent"
                  >
                    <View
                      key={item.id + 555555}
                      style={{
                        width: width,
                        height: height,
                        alignItems: "center",
                        backgroundColor: "transparent",
                      }}
                    ></View>
                  </TouchableHighlight>
                </View>

                <Center key={item.id + 444444}>
                  <Info
                    user={item.user}
                    data={{ id: item.id }}
                    empezar={{
                      id: item.id,
                      index: index,
                      videosWf: item.videosWf,
                    }}
                  />

                  <Sidebar                   
                    avatar={item.user.avatar}
                    count={item.count}
                    kei={item.id}
                  />
                </Center>

                <View
                  key={item.id + 333333}
                  style={{
                    position: "absolute",
                    alignSelf: "center",
                    alignItems: "center",
                    marginTop: height - 100,
                  }}
                >
                  <Button
                    key={item.id + 222222}
                    title={language.wf.empezar}
                    color="red"
                    onPress={() => {
                      setEmpezar(false);
                      navigation.navigate("Wf", {
                        id: item.id,
                        videosWf: item.videosWf,
                      });
                    }}
                  />
                </View>
              </Gradient>
            </View>
          );

        });
      } else {
        return (
          <View key="n1" style={{ backgroundColor: "blue", flex: 1 }}>
            <Text>{"No cargo map-"}</Text>
          </View>
        );
      }
    // } 
    // else {
    //   return (
    //     <View key="n2" style={{ backgroundColor: "green", flex: 1 }}>
    //       <Text>{"No cargo map"}</Text>
    //     </View>
    //   );
    // }
  };

  // console.log("LoadArrayMap>>>>>>", LoadArrayMap().toString());
  return language ? (
    // <Fragment>
    <SafeAreaView key="s1">
      <ScrollView key="sc1"
        refreshControl={
          <RefreshControl
            enabled={selected === 0 ? true : false}
            refreshing={refreshing}
            onRefresh={() => {
              if (selected === 0) {
                setRefreshing(true);
                setPagedatosmiswf(0);
                setDatosmiswf(null);
                setDataVideos(null);
                setSelected(0);
                obtenerDatosMisWF(0).then((res) => {
                  setDataVideos(res);
                  setDatosmiswf(res); //provider set
                  // console.log(">MisWf traer   > refreshing", !!res);
                  setRefreshing(false);
                });
              } else {
                setRefreshing(false);
              }
            }}
          />
        }
      >
        <Container
          orientation="vertical"
          transitionStyle="scroll"
          keyboardDismissMode="on-drag"
          onPageScroll={(e) => {
            if (Array.isArray(dataVideos)) {
              if (
                e.nativeEvent.offset === 0 &&
                selected > 0 &&
                selected + 1 === dataVideos.length
              ) {
                // console.log(">MisWf > onPageScroll > sel >",selected);
                setUltimo(true); //ultimo
                loadDataVideos(selected - 1);
              } else {
                setUltimo(false); //ultimo
              }
            }
          }}
          onPageSelected={(e) => {
            // console.log(">MisWf > onPageSelected > sel >",selected);
            //
            if (!refreshing && Array.isArray(dataVideos)) {
              setSelected(e.nativeEvent.position);
              setEmpezar(true);
              setPagedatosmiswf(e.nativeEvent.position);
            }
          }}
          keyboardDismissMode={() => {
            console.log(" keyboardDismissMode ");
          }}
          initialPage={0}
          style={{ backgroundColor: "transparent" }}
          key={"co1"}
        >
          {LoadArrayMap()}
        </Container>

        {Array.isArray(dataVideos) &&
        selected + 1 === dataVideos.length &&
        ultimo === true ? (
          <View
            style={{
              backgroundColor: "#B00020",
              flex: 1,
              height: 50,
            }}
          >
            <Text
              style={{
                justifyContent: "center",
                alignSelf: "center",
                textAlign: "center",
                marginTop: 15,
                color: "#fff",
              }}
            >
              {"...Loading..."}
            </Text>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  ) : (
    <View>
      <Text>{"No loading..."}</Text>
    </View>
  );
};

export default MisWf;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: "center",
  },
  button: {
    marginBottom: 30,
    width: 300,
    height: 300,
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
  },
});


/////////////// /////////////// /////////////// /////////////// /////////////// /////////////// /////////////// /////////////// /////////////// /////////////// 


<View
index={item.id}
key={"v"+item.id}
style={{display:"flex",flex: 1 , position:"absolute", 
backgroundColor: "yellow" ,
padding:50,alignContent:"center",alignItems:"center",justifyContent:"center"}}
>

      {/* <Text key={"t1" + index}>{item.videoUrl}</Text>
              <Text key={"t2" + index}>{item.id}</Text> */}


</View>

////////////

    //   return dataVideos.map((item, index) => {
    //     // Sin el prop 'key', React disparará una advertencia de key
    //     return (
    //       <React.Fragment >
    //         <View style={{ height: "100%", backgroundColor: "red" }}>
    //           <Text>{item.videoUrl}</Text>
    //           <Text>{item.id}</Text>
    //         </View>
    //       </React.Fragment>
    //     );
    //   });
    // }



    return (
      <dl>
        {props.items.map(item => (
          // Sin el prop 'key', React disparará una advertencia de key
          <React.Fragment key={item.id}>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
          </React.Fragment>
        ))}
      </dl>
    );
  }



  ////////
  

    // }
    // else {
    //   return (
    //     <View key="n2" style={{ backgroundColor: "green", flex: 1 }}>
    //       <Text>{"No cargo map"}</Text>
    //     </View>
    //   );
    // }




    


    /////////////--------------dgb frament </Fragment>

    ListaVideos = () => {
      if (Array.isArray(dataVideos)) {
        return (
          <View>
            {dataVideos.map((item, index) => (
              <Fragment key={item.id}>
                <View style={{ height: height }}>
                  <Text>{item.id}</Text>
                  <Text>{item.videoUrl}</Text>
                </View>
              </Fragment>
            ))}
          </View>
        );
      } else {
        return (
          <View>
            <Text>{"...No carga array"}</Text>
          </View>
        );
      }
    };
  
    const LoadArrayMapM = () => {
      try {
        //
        if (Array.isArray(dataVideos)) {
          return (
            <View key={"fr1"}>
              {dataVideos.map((item, index) => {
                return (
                  <Fragment key={index}>
                    <View
                      index={item.id}
                      key={"v" + item.id}
                      style={{
                        // display: "flex",
                        // flex: 1,
                        position: "absolute",
                        backgroundColor: "yellow",
                        padding: 50,
                        height: height - 200,
                        alignContent: "center",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Button
                        key={"b1" + index}
                        title={item.videoUrl + "-----" + item.id} //{language.wf.empezar}
                        color="red"
                        onPress={() => {
                          setEmpezar(false);
                          navigation.navigate("Wf", {
                            id: item.id,
                            videosWf: item.videosWf,
                          });
                        }}
                      />
                    </View>
                  </Fragment>
                );
              })}
            </View>
          );
        }
      } catch (e) {
        return (
          <View>
            <Text>
              {"Error"}
              {e}
            </Text>
          </View>
        );
      }
    };

    
////////////////////////////////////////////////////////////////////


import React, {
  useState,
  useEffect,
  Component,
  Fragment,
  useContext,
} from "react";
import {
  View,
  Text,
  Button,
  Dimensions,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  RefreshControl,
  SafeAreaView,
  LogBox,
  Animated,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
import ViewPager from "@react-native-community/viewpager";
// import { useNavigation } from "@react-navigation/native";
import VideoPlayer from "./VideoPlayer";
import Info from "./Info";
import Sidebar from "./Sidebar";
// import dataVideos from "./dataVideos";
const { height, width } = Dimensions.get("window");
// import { obtenerDatos } from "./Conectar";
import { AuthContext } from "../componentes/Navigation/AuthProvider";

// const Videos  = VideoPlayer
const Container = styled(ViewPager)`
  height: ${height}px;
  flex: 1;
  background: #000;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const Center = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 50px;
  padding: 0px;
`;

const MisWf = ({ navigation }) => {
  const {
    user,
    logout,
    language,
    datosmiswf,
    setDatosmiswf,
    obtenerDatosMisWF,
    pagedatosmiswf,
    setPagedatosmiswf,
    resetDatosMisWF,
  } = useContext(AuthContext);

  const [selected, setSelected] = useState(0);
  const [empezar, setEmpezar] = useState(true);
  const [play, setPlay] = useState(true);

  const [dataVideos, setDataVideos] = useState({});

  const [refreshing, setRefreshing] = useState(false);
  const [ultimo, setUltimo] = useState(false);

  const loadDataVideos = async (ret) => {
    console.log(">loadDataVideos> select-", selected, "--", ret);

    if (ret) {
    } else {
      ret = selected;
    }
    if (!dataVideos[0] && ret === 0) {
      setPagedatosmiswf(0);
      obtenerDatosMisWF().then((res) => {
        setDataVideos(res);
        setDatosmiswf(res); //provider
        console.log(">MisWf traer todo", ret);
      });
    }
    // console.log('-----------------------------------------------------ret---',ret);
    if (dataVideos[0] && ret >= 1) {
      //dgb 2
      let misDatos = dataVideos;
      if (!!misDatos.find((e) => e.id.toString() == (ret + 2 + 1).toString())) {
        //dgb +2
        console.log(
          "---no debe cargarrrrrr------p.",
          pagedatosmiswf,
          "-fin-sele-",
          ret
        );
      } else {
        console.log(
          "---si debe cargarrrrrr------p.",
          pagedatosmiswf,
          "-fin-sele-",
          ret
        );
        if (ultimo) {
          console.log("ultimo");
          setTimeout(() => setUltimo(false), 300); //dgb ultimo
        }

        obtenerDatosMisWF(ret).then((res) => {
          if (!!res) {
            if (
              //dgb >=2
              ret >= 1 &&
              !misDatos.find((e) => e.id.toString() === res.id.toString())
            ) {
              //add/push new data
              let cuenta = [];
              cuenta = misDatos.push(res);
              setDataVideos(misDatos);
              setDatosmiswf(misDatos); //provider set
            }
          }
        });
      }
    }
  };

  useEffect(() => {
    loadDataVideos(0);

    // console.log(">MisWf > setUltimo(true)---- useEffect >", selected);
  }, [selected]);

  // LogBox.ignoreAllLogs(); //Ignore all log notifications

  const LoadArrayMapXX = () => {
    // if (!!dataVideos) {
    if (Array.isArray(dataVideos)) {
      let data = dataVideos.map((item, index) => {
        return (
          <View key={index} style={{ backgroundColor: "blue" }}>
            <VideoPlayer
              video={item.videoUrl}
              poster={item.poster}
              isPlay={selected === index && empezar}
              xkey={index}
              reiniciar={false}
            />
          </View>
        );
      });
      return <Fragment key={"item.id"}>{data}</Fragment>;
    } else {
      return (
        <View>
          <Text>{"...No carga..."}</Text>
        </View>
      );
    }
  };

  const LoadArrayMap = () => {
    // if (!!dataVideos) {
    if (Array.isArray(dataVideos)) {
      return dataVideos.map((item, index) => {
        // console.log("rende>__________",dataVideos.length,index,'-id-',item.id)
        return (
          <View
            index={item.id + 999999}
            key={item.id + 999999}
            style={{ flex: 1, backgroundColor: "#10c781" }}
          >
            <VideoPlayer
              video={item.videoUrl}
              poster={item.poster}
              isPlay={selected === index && empezar}
              xkey={index}
              reiniciar={false}
            />
            <Gradient
              key={item.id + 888888}
              locations={[0, 0.26, 0.6, 1]}
              colors={[
                "rgba(26,26,26,0.6)",
                "rgba(26,26,26,0)",
                "rgba(26,26,26,0)",
                "rgba(26,26,26,0.6)",
              ]}
            >
              <View
                key={item.id + 777777}
                style={{
                  position: "absolute",
                  alignSelf: "center",
                  alignItems: "center",
                  marginTop: 0,
                  backgroundColor: "transparent",
                }}
              >
                <TouchableHighlight
                  key={item.id + 666666}
                  onPress={() => {
                    empezar ? setEmpezar(false) : setEmpezar(true);
                  }}
                  underlayColor="transparent"
                >
                  <View
                    key={item.id + 555555}
                    style={{
                      width: width,
                      height: height,
                      alignItems: "center",
                      backgroundColor: "transparent",
                    }}
                  ></View>
                </TouchableHighlight>
              </View>

              <Center key={item.id + 444444}>
                <Info
                  user={item.user}
                  data={{ id: item.id }}
                  empezar={{
                    id: item.id,
                    index: index,
                    videosWf: item.videosWf,
                  }}
                />

                <Sidebar
                  avatar={item.user.avatar}
                  count={item.count}
                  kei={item.id}
                />
              </Center>

              <View
                key={item.id + 333333}
                style={{
                  position: "absolute",
                  alignSelf: "center",
                  alignItems: "center",
                  marginTop: height - 100,
                }}
              >
                <Button
                  key={item.id + 222222}
                  title={language.wf.empezar}
                  color="red"
                  onPress={() => {
                    setEmpezar(false);
                    navigation.navigate("Wf", {
                      id: item.id,
                      videosWf: item.videosWf,
                    });
                  }}
                />
              </View>
            </Gradient>
          </View>
        );
      });
    } else {
      return (
        <View key="n1" style={{ backgroundColor: "blue", flex: 1 }}>
          <Text>{"No cargo map-"}</Text>
        </View>
      );
    }
  };

  const Frameworks = (props) => {
    if (Array.isArray(dataVideos)) {
      return (
        <React.Fragment key={1}>
          {dataVideos.map((item, index) => (
            <React.Fragment key={item.id}>
              <View style={{ height: height, flex: 0, backgroundColor: "red" }}>
                <Text>{item.videoUrl}</Text>
                <Text>{item.id}</Text>
                <Text>{item.user.description}</Text>
              </View>
            </React.Fragment>
          ))}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Text>{"...No carga data..."}</Text>
        </React.Fragment>
      );
    }
  };

  // console.log("LoadArrayMap>>>>>>", LoadArrayMap().toString());
  return language ? (
    // <Fragment>
    <SafeAreaView key="s1">
      <ScrollView
        key="sc1"
        refreshControl={
          <RefreshControl
            enabled={selected === 0 ? true : false}
            refreshing={refreshing}
            onRefresh={() => {
              if (selected === 0) {
                setRefreshing(true);
                setPagedatosmiswf(0);
                setDatosmiswf(null);
                setDataVideos(null);
                setSelected(0);
                obtenerDatosMisWF(0).then((res) => {
                  setDataVideos(res);
                  setDatosmiswf(res); //provider set
                  // console.log(">MisWf traer   > refreshing", !!res);
                  setRefreshing(false);
                });
              } else {
                setRefreshing(false);
              }
            }}
          />
        }
      >
        <Container
          orientation="vertical"
          transitionStyle="scroll"
          keyboardDismissMode="on-drag"
          onPageScroll={(e) => {
            if (Array.isArray(dataVideos)) {
              if (
                e.nativeEvent.offset === 0 &&
                selected > 0 &&
                selected + 1 === dataVideos.length
              ) {
                // console.log(">MisWf > onPageScroll > sel >",selected);
                setUltimo(true); //ultimo
                loadDataVideos(selected - 1);
              } else {
                setUltimo(false); //ultimo
              }
            }
          }}
          onPageSelected={(e) => {
            // console.log(">MisWf > onPageSelected > sel >",selected);
            //
            if (!refreshing && Array.isArray(dataVideos)) {
              setSelected(e.nativeEvent.position);
              setEmpezar(true);
              setPagedatosmiswf(e.nativeEvent.position);
            }
          }}
          keyboardDismissMode={() => {
            console.log(" keyboardDismissMode ");
          }}
          initialPage={0}
          style={{ backgroundColor: "transparent" }}
          key={"co1"}
        >
          <Frameworks />
        </Container>

        {Array.isArray(dataVideos) &&
        selected + 1 === dataVideos.length &&
        ultimo === true ? (
          <View
            style={{
              backgroundColor: "#B00020",
              flex: 1,
              height: 50,
            }}
          >
            <Text
              style={{
                justifyContent: "center",
                alignSelf: "center",
                textAlign: "center",
                marginTop: 15,
                color: "#fff",
              }}
            >
              {"...Loading..."}
            </Text>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  ) : (
    <View>
      <Text>{"No loading..."}</Text>
    </View>
  );
};

export default MisWf;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: "center",
  },
  button: {
    marginBottom: 30,
    width: 300,
    height: 300,
    alignItems: "center",
    backgroundColor: "#2196F3",
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
  },
});



/////////////////////////////////////////////////////////
.........................................................


import React, {
  useState,
  useEffect,
  Component,
  Fragment,
  useContext,
} from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
// import ViewPager from "@react-native-community/viewpager";
import VideoPlayer from "../componentes/VideoPlayer";
import { Pager, PagerProvider } from "@crowdlinker/react-native-pager";

const config = {
  velocityThreshold: 0.01,
  directionalOffsetThreshold: 80,
  gestureIsClickThreshold: 0.01,
};

const { height } = Dimensions.get("window");

// const Containerx = styled(ViewPager)`
//   height: ${height}px;
// `;

const Gradient = styled(LinearGradient)`
  height: 100%;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const Center = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 0px;
  margin-top: 50px;
  position: absolute;
  left: 5px;
`;

const windowWidth = Dimensions.get("window").width; //useWindowDimensions().width;
const windowHeight = Dimensions.get("window").height; //useWindowDimensions().height;



const Wf = (props) => {
  const [play, setPlay] = useState(false);
  const [reiniciar, setReiniciar] = useState(false);
  const [xdataVideos, setXdataVideos] = useState(null);
  const [onSelected, setOnSelected] = useState(null);
  const [activeIndex, onChange] = useState(1);

  onPlay = () => {
    if (play) {
      setPlay(false);
      setReiniciar(false);
    } else {
      setPlay(true);
      setReiniciar(true);
    }
  };

  useEffect(() => {
    console.log(">WF>props>", props);

    setXdataVideos(props.route.params.videosWf);
  }, []);

 
 elementos = () => {
   
 }

  return (
    <Fragment key="wf">
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Fragment key="wf1">
            <PagerProvider activeIndex={activeIndex} onChange={onChange}>
              <Pager>
                {/* {Array.isArray(xdataVideos) ? (
                  xdataVideos.map((itemx, indexx) => {
                    return (  
               //  <View key={"i-"+indexx}> <Text>{itemx.videoUrl}</Text></View>  
                    
                   // <View key={"wf-" + indexx} collapsable={false}>  
                      //   <VideoPlayer
                      //     video={itemx.videoUrl}
                      //     poster={itemx.poster}
                      //     isPlay={onSelected === indexx && play}
                      //     xkey={"wf-" + indexx}
                      //     reiniciar={reiniciar}
                      //   />

                      //   <Gradient
                      //     locations={[0, 0.26, 0.6, 1]}
                      //     colors={[
                      //       "rgba(26,26,26,0.6)",
                      //       "rgba(26,26,26,0)",
                      //       "rgba(26,26,26,0)",
                      //       "rgba(26,26,26,0.6)",
                      //     ]}
                      //   >
                      //     <Center>
                      //       <AntDesign
                      //         name="back"
                      //         size={30}
                      //         color="red"
                      //         onPress={() => {
                      //           props.navigation.navigate("Home");
                      //         }}
                      //       />
                      //     </Center>

                      //     <View
                      //       style={{
                      //         // backgroundColor: "blue",
                      //         position: "absolute",
                      //         alignSelf: "center",
                      //         alignItems: "center",
                      //         marginTop: height - 200,
                      //       }}
                      //     >
                      //       <Text style={styles.titulo}>{itemx.id}</Text>
                      //       {!play ? (
                      //         <AntDesign
                      //           name="playcircleo"
                      //           size={64}
                      //           color={"white"}
                      //           onPress={() => {
                      //             onPlay();
                      //           }}
                      //         />
                      //       ) : (
                      //         <Feather
                      //           name="stop-circle"
                      //           size={64}
                      //           color="red"
                      //           onPress={() => {
                      //             onPlay();
                      //           }}
                      //         />
                      //       )}
                      //     </View>
                      //   </Gradient>
                      // </View>
                //     );
                //   })
                // ) 
                
                // : (
                //   <Text>{"...No carga..."}</Text>
                // )}
                
              </Pager>
            </PagerProvider>
          </Fragment>

          {/*      
         <ViewPager
            overScrollMode={"never"}
            scrollEnabled={true}
            orientation="horizontal"
            transitionStyle="scroll"
            key={"wf1"}
            // onPageSelected={(e) => {
            //   setOnSelected(e.nativeEvent.position);
            //   setPlay(false);
            // }}
            // keyboardDismissMode={() => {
            //   console.log(" keyboardDismissMode ");
            // }}
            // initialPage={0}
            style={{ flex: 1, height: height, backgroundColor: "yellow" }}
          >   
           
     
  
          </ViewPager>  */}
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

class MyPager extends React.Component {
  render() {
    return (
      <ViewPager style={styles.viewPager} initialPage={0} key={"pwf1"}>
        <View key="1">
          <Text>First page</Text>
        </View>
        <View key="2">
          <Text>Second page</Text>
        </View>
      </ViewPager>
    );
  }
}

export default Wf;

var styles = StyleSheet.create({
  background: {
    position: "absolute",
    backgroundColor: "white",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  backgroundInfo: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
    // justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
    fontSize: 40,
    fontWeight: "800",
    marginBottom: 20,
  },
  backgroundVideo: {
    width: 0,
    height: 0,
  },
  backgroundAbajo: {
    // position: "absolute",
    // flex:0,
    bottom: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  play: {
    position: "absolute",
    // flex:0,
    // alignSelf:"center",
  },
  shadow: {
    shadowColor: "red",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    // iOS
    shadowOffset: {
      width: 0, // These can't both be 0
      height: 1, // i.e. the shadow has to be offset in some way
    },
    // Android
    shadowOffset: {
      width: 0, // Same rules apply from above
      height: 1, // Can't both be 0
    },
  },
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: "red",
    marginHorizontal: 20,
    flex: 1,
  },
  text: {
    fontSize: 42,
  },
  viewpager: {
    backgroundColor: "red",
    marginHorizontal: 20,
    flex: 1,
  },
});



////////////

{Array.from({ length: activeIndex + 3 }, (_, i) => (
              <Elementos key={i} />
            ))}





{
  /* 
            { ? (
                  xdataVideos.map((itemx, indexx) => {
                    return (  
               //  <View key={"i-"+indexx}> <Text>{itemx.videoUrl}</Text></View>  
                    
                   // <View key={"wf-" + indexx} collapsable={false}>  
                      //   <VideoPlayer
                      //     video={itemx.videoUrl}
                      //     poster={itemx.poster}
                      //     isPlay={onSelected === indexx && play}
                      //     xkey={"wf-" + indexx}
                      //     reiniciar={reiniciar}
                      //   />

                      //   <Gradient
                      //     locations={[0, 0.26, 0.6, 1]}
                      //     colors={[
                      //       "rgba(26,26,26,0.6)",
                      //       "rgba(26,26,26,0)",
                      //       "rgba(26,26,26,0)",
                      //       "rgba(26,26,26,0.6)",
                      //     ]}
                      //   >
                      //     <Center>
                      //       <AntDesign
                      //         name="back"
                      //         size={30}
                      //         color="red"
                      //         onPress={() => {
                      //           props.navigation.navigate("Home");
                      //         }}
                      //       />
                      //     </Center>

                      //     <View
                      //       style={{
                      //         // backgroundColor: "blue",
                      //         position: "absolute",
                      //         alignSelf: "center",
                      //         alignItems: "center",
                      //         marginTop: height - 200,
                      //       }}
                      //     >
                      //       <Text style={styles.titulo}>{itemx.id}</Text>
                      //       {!play ? (
                      //         <AntDesign
                      //           name="playcircleo"
                      //           size={64}
                      //           color={"white"}
                      //           onPress={() => {
                      //             onPlay();
                      //           }}
                      //         />
                      //       ) : (
                      //         <Feather
                      //           name="stop-circle"
                      //           size={64}
                      //           color="red"
                      //           onPress={() => {
                      //             onPlay();
                      //           }}
                      //         />
                      //       )}
                      //     </View>
                      //   </Gradient>
                      // </View>
                //     );
                //   })
                // ) 
                
                // : (
                //   <Text>{"...No carga..."}</Text>
                // )}
                
              </Pager>
            </PagerProvider>
          </Fragment>

            
         <ViewPager
            overScrollMode={"never"}
            scrollEnabled={true}
            orientation="horizontal"
            transitionStyle="scroll"
            key={"wf1"}
            // onPageSelected={(e) => {
            //   setOnSelected(e.nativeEvent.position);
            //   setPlay(false);
            // }}
            // keyboardDismissMode={() => {
            //   console.log(" keyboardDismissMode ");
            // }}
            // initialPage={0}
            style={{ flex: 1, height: height, backgroundColor: "yellow" }}
          >   
           
     
  
          </ViewPager>    */
}



         {/* {Array.from({ length: activeIndex + 3 }, (_, i) => (
              <Elementos key={i} />
            ))} */}



// </Fragment>
      // </ScrollView>
    // </SafeAreaView>



// <SafeAreaView style={styles.container}>
      // <ScrollView style={styles.scrollView}>
        // <Fragment key="wf1"></Fragment>

        height: height,


        {Array.isArray(xdataVideos) ? (
          xdataVideos.map((item, index) => (
            <Elementos key={index} item={item} />
          ))
        ) : (
          <View>
            <Text>{"...No Carga..."}</Text>
          </View>
        )}



        Array.isArray(xdataVideos)?:<View><Text>{"...No carga..."}</Text></View>




        {Array.from({ length: 7 }, (_, i) => (
          <Elementos key={i} item={i} />
        ))}




///////////////////// 
@viewPager

import React, {
  useState,
  useEffect,
  Component,
  Fragment,
  useContext,
} from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
// import ViewPager from "@react-native-community/viewpager";
import VideoPlayer from "../componentes/VideoPlayer";
import { Pager, PagerProvider } from "@crowdlinker/react-native-pager";

const config = {
  velocityThreshold: 0.01,
  directionalOffsetThreshold: 80,
  gestureIsClickThreshold: 0.01,
};

const { height } = Dimensions.get("window");

// const Containerx = styled(ViewPager)`
//   height: ${height}px;
// `;

const Gradient = styled(LinearGradient)`
  height: 100%;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const Center = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 0px;
  margin-top: 50px;
  position: absolute;
  left: 5px;
`;

const windowWidth = Dimensions.get("window").width; //useWindowDimensions().width;
const windowHeight = Dimensions.get("window").height; //useWindowDimensions().height;

const Wf = (props) => {
  const [play, setPlay] = useState(false);
  const [reiniciar, setReiniciar] = useState(false);
  const [xdataVideos, setXdataVideos] = useState(null);
  const [onSelected, setOnSelected] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);

  onPlay = () => {
    if (play) {
      setPlay(false);
      setReiniciar(false);
    } else {
      setPlay(true);
      setReiniciar(true);
    }
  };

  onChange = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    // const [onChange]

    setXdataVideos(props.route.params.videosWf);
  }, []);

  useEffect(() => {
    console.log(">WF>props>activeIndex>", activeIndex); //props.route.params.videosWf);
  });

  const Elementos = ({ index,item }) => {
    return (
      <View style={{ backgroundColor: "purple", height: height  }}>
        <VideoPlayer
          video={item.videoUrl}
          poster={item.poster}
          isPlay={activeIndex === index && play}
          xkey={"wf-" + index}
          reiniciar={reiniciar}
        />
      </View>
    );
    // if (Array.isArray(dataVideos)) {
    //   return dataVideos.map((item, index) => {
    //     console.log("--LoadArrayMap ---------->", index, item.id);
    //     return (
    //       <View>
    //         <Text>{index}</Text>
    //       </View>
    //     );
    //   });
    // }
  };
  console.log("....");

  return (
    Array.isArray(xdataVideos) && (
      <View style={styles.background}>
        <PagerProvider
          type="vertical"
          activeIndex={activeIndex}
          onChange={onChange}
          initialIndex={0}
        >
          <Pager style={{ backgroundColor: "#000" }}>
            {xdataVideos.map((item, i) => (
              <Elementos index={i} item={item} />
            ))}
          </Pager>
        </PagerProvider>
      </View>
    )
  );
};

export default Wf;

var styles = StyleSheet.create({
  background: {
    // position: "absolute",
    backgroundColor: "red",
    height: height,
    flex: 1,
  },
  backgroundInfo: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    bottom: 0,
    // justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    color: "white",
    textShadowColor: "black",
    textShadowOffset: { width: -1, height: 0 },
    textShadowRadius: 10,
    fontSize: 40,
    fontWeight: "800",
    marginBottom: 20,
  },
  backgroundVideo: {
    width: 0,
    height: 0,
  },
  backgroundAbajo: {
    // position: "absolute",
    // flex:0,
    bottom: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  play: {
    position: "absolute",
    // flex:0,
    // alignSelf:"center",
  },
  shadow: {
    shadowColor: "red",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    // iOS
    shadowOffset: {
      width: 0, // These can't both be 0
      height: 1, // i.e. the shadow has to be offset in some way
    },
    // Android
    shadowOffset: {
      width: 0, // Same rules apply from above
      height: 1, // Can't both be 0
    },
  },
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: "red",
    marginHorizontal: 20,
    flex: 1,
  },
  text: {
    fontSize: 42,
  },
  viewpager: {
    backgroundColor: "red",
    marginHorizontal: 20,
    flex: 1,
  },
});




////////

<Elementos index={i} item={item} />


      <Gradient
                          locations={[0, 0.26, 0.6, 1]}
                          colors={[
                            "rgba(26,26,26,0.6)",
                            "rgba(26,26,26,0)",
                            "rgba(26,26,26,0)",
                            "rgba(26,26,26,0.6)",
                          ]}
                        >
                          <Center>
                            <AntDesign
                              name="back"
                              size={30}
                              color="red"
                              onPress={() => {
                                props.navigation.navigate("Home");
                              }}
                            />
                          </Center>

                          <View
                            style={{
                              // backgroundColor: "blue",
                              position: "absolute",
                              alignSelf: "center",
                              alignItems: "center",
                              marginTop: height - 200,
                            }}
                          >
                            <Text style={styles.titulo}>{itemx.id}</Text>
                            {!play ? (
                              <AntDesign
                                name="playcircleo"
                                size={64}
                                color={"white"}
                                onPress={() => {
                                  onPlay();
                                }}
                              />
                            ) : (
                              <Feather
                                name="stop-circle"
                                size={64}
                                color="red"
                                onPress={() => {
                                  onPlay();
                                }}
                              />
                            )}
                          </View>
                        </Gradient>




///    // if (Array.isArray(dataVideos)) {
    //   return dataVideos.map((item, index) => {
    //     console.log("--LoadArrayMap ---------->", index, item.id);
    //     return (
    //       <View>
    //         <Text>{index}</Text>
    //       </View>
    //     );
    //   });
    // } 









    /////////////.........

    <Gradient
    locations={[0, 0.26, 0.6, 1]}
    colors={[
      "rgba(26,26,26,0.6)",
      "rgba(26,26,26,0)",
      "rgba(26,26,26,0)",
      "rgba(26,26,26,0.6)",
    ]}
  >
    <Center>
      <AntDesign
        name="back"
        size={30}
        color="red"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
    </Center>

    <View
      style={{
        backgroundColor: "blue",
        position: "absolute",
        alignSelf: "center",
        alignItems: "center",
        marginTop: 200,
      }}
    >
      <Text style={styles.titulo}>{item.id}</Text>
      {!play ? (
        <AntDesign
          name="playcircleo"
          size={64}
          color={"white"}
          onPress={() => {
            onPlay();
          }}
        />
      ) : (
        <Feather
          name="stop-circle"
          size={64}
          color="red"
          onPress={() => {
            onPlay();
          }}
        />
      )}
    </View>
  </Gradient>



////////////.............


const Elementos = ({ index, item }) => {
  return (
    <View style={{ flex: 1, height: height }} key={"wfe" + index}>
      <VideoPlayer
        video={item.videoUrl}
        poster={item.poster}
        isPlay={activeIndex === index && play}
        xkey={"wf-" + index}
        reiniciar={reiniciar}
      />
      <Text style={{ flex: 1, position: "absolute", fontSize: 50 }}>
        {item.id}
      </Text>

      <View
        style={{
          // zIndex:999,
          // flex:0,
          backgroundColor: "blue",
          position: "absolute",
          alignSelf: "center",
          alignItems: "center",
          marginTop: 200,
        }}
      >
        <Text style={styles.titulo}>{item.id}</Text>
        {!play ? (
          <AntDesign
            name="playcircleo"
            size={64}
            color={"white"}
            onPress={() => {
              onPlay();
            }}
          />
        ) : (
          <Feather
            name="stop-circle"
            size={64}
            color="red"
            onPress={() => {
              onPlay();
            }}
          />
        )}
      </View>
    </View>
  );
};
console.log("....");



///



//    <Gradient
locations={[0, 0.26, 0.6, 1]}
colors={[
  "rgba(85, 155, 99,1)",
  "rgba(85, 155, 99,1)",
  "rgba(85, 155, 99,1)",
  "rgba(85, 155, 99,1)",
]}

onPress={() => {
  onPlay();
}}

>


</Gradient></ScrollView>   

















---------------------------------------------




import React, {
  useState,
  useEffect,
  Component,
  Fragment,
  useContext,
} from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
// import ViewPager from "@react-native-community/viewpager";
import VideoPlayer from "../componentes/VideoPlayer";
import { Pager, PagerProvider } from "@crowdlinker/react-native-pager";

const config = {
  velocityThreshold: 0.01,
  directionalOffsetThreshold: 80,
  gestureIsClickThreshold: 0.01,
};

const { height } = Dimensions.get("window");

// const Containerx = styled(ViewPager)`
//   height: ${height}px;
// `;

const Gradient = styled(LinearGradient)`
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  height: ${height}px;
`;

const Center = styled.View`
  flex: 0;
  flex-direction: row;
  padding: 0px;
  margin-top: 50px;
  top: 100px;
  left: 50px;
`;

const windowWidth = Dimensions.get("window").width; //useWindowDimensions().width;
const windowHeight = Dimensions.get("window").height; //useWindowDimensions().height;

const Wf = (props) => {
  const [play, setPlay] = useState(false);
  const [reiniciar, setReiniciar] = useState(false);
  const [xdataVideos, setXdataVideos] = useState(null);
  const [onSelected, setOnSelected] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);

  onPlay = () => {
    console.log("log onPlay", play);
    if (play) {
      setPlay(false);
      setReiniciar(false);
    } else {
      setPlay(true);
      setReiniciar(true);
    }
  };

  onChange = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    setXdataVideos(props.route.params.videosWf);
  }, []);

  return (
    Array.isArray(xdataVideos) && (
      <View style={styles.background} key={"wf0"}>
        <PagerProvider
          key={"wf1"}
          type="vertical"
          activeIndex={activeIndex}
          onChange={onChange}
          initialIndex={0}
        >
          <Pager style={{ backgroundColor: "#000" }} key={"wfp1"}>
            {xdataVideos.map((item, i) => (
              <View style={{ flex: 1, height: height }} key={"wfe" + i}>
                <VideoPlayer
                  video={item.videoUrl}
                  poster={item.poster}
                  isPlay={activeIndex === i && play}
                  xkey={"wf-" + i}
                  reiniciar={reiniciar}
                />

                {!play ? (
                  <AntDesign
                    name="playcircleo"
                    size={64}
                    color={"white"}
                    onPress={() => {
                      onPlay();
                    }}
                  />
                ) : (
                  <Feather
                    name="stop-circle"
                    size={64}
                    color="red"
                    onPress={() => {
                      onPlay();
                    }}
                  />
                )}

                <Center>
                  <Button
                    title="Registrarse"
                    onPress={() => onPlay()}
                    style={styles.boton}
                  />
                  <AntDesign
                    name="back"
                    size={30}
                    color="red"
                    onPress={() => {
                      props.navigation.navigate("Home");
                    }}
                  />
                </Center>

                <View
                  style={{
                    backgroundColor: "blue",
                    position: "absolute",
                    alignSelf: "center",
                    alignItems: "center",
                    marginTop: height - 200,
                  }}
                >
                  <Text style={styles.titulo}>{item.id}</Text>
                </View>
              </View>
            ))}
          </Pager>
        </PagerProvider>
      </View>
    )
  );
};

export default Wf;

var styles = StyleSheet.create({
  background: {
    // position: "absolute",
    backgroundColor: "black",
    height: height,
    flex: 1,
  },
  titulo: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 70,
    color: "#B00020",
  },
  boton: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 70,
    color: "#B00020",
  },
});





..............dgb wf


import React, {
  useState,
  useEffect,
  Component,
  Fragment,
  useContext,
} from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";
// import ViewPager from "@react-native-community/viewpager";
import VideoPlayer from "../componentes/VideoPlayer";
import { Pager, PagerProvider } from "@crowdlinker/react-native-pager";

const config = {
  velocityThreshold: 0.01,
  directionalOffsetThreshold: 80,
  gestureIsClickThreshold: 0.01,
};

const { height } = Dimensions.get("window");

// const Containerx = styled(ViewPager)`
//   height: ${height}px;
// `;

const Gradient = styled(LinearGradient)`
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 100%;
  height: ${height}px;
`;

const Center = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 0px;
  margin-top: 35px;
  left: 5px;
  position: absolute;
`;

const windowWidth = Dimensions.get("window").width; //useWindowDimensions().width;
const windowHeight = Dimensions.get("window").height; //useWindowDimensions().height;

const Wf = (props) => {
  const [play, setPlay] = useState(false);
  const [reiniciar, setReiniciar] = useState(false);
  const [xdataVideos, setXdataVideos] = useState(null);
  const [onSelected, setOnSelected] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);

  onPlay = () => {
    console.log("log onPlay", play);
    if (play) {
      setPlay(false);
      setReiniciar(false);
    } else {
      setPlay(true);
      setReiniciar(true);
    }
  };

  onChange = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    setXdataVideos(props.route.params.videosWf);
  }, []);

  return (
    Array.isArray(xdataVideos) && (
      <View style={styles.background} key={"wf0"}>
        <PagerProvider
          key={"wf1"}
          type="vertical"
          activeIndex={activeIndex}
          onChange={onChange}
          initialIndex={0}
        >
          <Pager style={{ backgroundColor: "#000" }} key={"wfp1"}>
            {xdataVideos.map((item, i) => (
              <View style={{ flex: 0, height: height }} key={"wfe" + i}>
                <VideoPlayer
                  video={item.videoUrl}
                  poster={item.poster}
                  isPlay={activeIndex === i && play}
                  xkey={"wf-" + i}
                  reiniciar={reiniciar}
                />

                <Center>
                  <AntDesign
                    name="back"
                    size={30}
                    color="red"
                    onPress={() => {
                      props.navigation.navigate("Home");
                    }}
                    style={styles.iconPlay}
                  />
                </Center>

                <View
                  style={{
                    backgroundColor: "blue",
                    position: "absolute",
                    alignSelf: "center",
                    alignItems: "center",
                    marginTop: height - 200,
                  }}
                >
                  <Text style={styles.titulo}>{item.id}</Text>
                  {!play ? (
                    <AntDesign
                      name="playcircleo"
                      size={64}
                      color={"white"}
                      onPress={() => {
                        onPlay();
                      }}
                      style={styles.iconPlay}
                    />
                  ) : (
                    <Feather
                      name="stop-circle"
                      size={64}
                      color="red"
                      onPress={() => {
                        onPlay();
                      }}
                      style={styles.iconPlay}
                    />
                  )}
                </View>
              </View>
            ))}
          </Pager>
        </PagerProvider>
      </View>
    )
  );
};

export default Wf;

var styles = StyleSheet.create({
  background: {
    // position: "absolute",
    backgroundColor: "black",
    height: height,
    flex: 1,
  },
  titulo: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 70,
    color: "#B00020",
  },
  iconPlay: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 70,
    color: "#B00020",
  },
  boton: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 70,
    color: "#B00020",
  },
});

.............


{
  /* <PagerProvider
key={"wf1"}
type="vertical"
activeIndex={activeIndex}
onChange={onChange}
initialIndex={0}
>
<Pager style={{ backgroundColor: "#000" }} key={"wfp1"}>
  {xdataVideos.map((item, i) => (
    <View style={{ flex: 0, height: height }} key={"wfe" + i}>
      <VideoPlayer
        video={item.videoUrl}
        poster={item.poster}
        isPlay={activeIndex === i && play}
        xkey={"wf-" + i}
        reiniciar={reiniciar}
      />

      <Center>
        <AntDesign
          name="back"
          size={30}
          color="red"
          onPress={() => {
            props.navigation.navigate("Home");
          }}
          style={styles.iconPlay}
        />
      </Center>

      <View
        style={{
          backgroundColor: "blue",
          position: "absolute",
          alignSelf: "center",
          alignItems: "center",
          marginTop: height - 200,
        }}
      >
        <Text style={styles.titulo}>{item.id}</Text>
        {!play ? (
          <AntDesign
            name="playcircleo"
            size={64}
            color={"white"}
            onPress={() => {
              onPlay();
            }}
            style={styles.iconPlay}
          />
        ) : (
          <Feather
            name="stop-circle"
            size={64}
            color="red"
            onPress={() => {
              onPlay();
            }}
            style={styles.iconPlay}
          />
        )}
      </View>
    </View>
  ))}
</Pager>
</PagerProvider> */
}



            {/* <SafeAreaView style={styles.container} key={"wfsfs1"}> */}
  {/* </SafeAreaView> */}














  ..........wf antes animated dgb


  import React, {
    useState,
    useEffect,
    Component,
    Fragment,
    useContext,
    useRef,
  } from "react";
  import {
    View,
    Text,
    Button,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    ScrollView,
    Animated,
    Platform,
  } from "react-native";
  import { AntDesign, Feather } from "@expo/vector-icons";
  import { LinearGradient } from "expo-linear-gradient";
  import styled from "styled-components/native";
  // import ViewPager from "@react-native-community/viewpager";
  // import ViewPager from "@react-native-community/viewpager";
  import VideoPlayer from "../componentes/VideoPlayer";
  import { Pager, PagerProvider } from "@crowdlinker/react-native-pager";
  
  const config = {
    velocityThreshold: 0.01,
    directionalOffsetThreshold: 80,
    gestureIsClickThreshold: 0.01,
  };
  const ratio = Platform.OS === "ios" ? 2 : 1.2;
  const { height, width } = Dimensions.get("window");
  const perspective = width;
  const angle = Math.atan(perspective / (width / 2));
  
  // const Containerx = ViewPager;
  
  // const Containerx = styled(ViewPager)`
  //   height: ${height}px;
  // `;
  
  const Gradient = styled(LinearGradient)`
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100%;
    height: ${height}px;
  `;
  
  const Center = styled.View`
    flex: 1;
    flex-direction: row;
    padding: 0px;
    margin-top: 35px;
    left: 5px;
    position: absolute;
  `;
  
  const windowWidth = Dimensions.get("window").width; //useWindowDimensions().width;
  const windowHeight = Dimensions.get("window").height; //useWindowDimensions().height;
  // const RviewPager = ViewPager;
  
  const SCREEN_WIDTH = Dimensions.get("window").width;
  
  const xOffset = new Animated.Value(0);
  var selected = null;
  
  
  const transitionAnimation = (index) => {
    return {
      transform: [
        { perspective: 800 },
        {
          scale: xOffset.interpolate({
            inputRange: [
              (index - 1) * SCREEN_WIDTH,
              index * SCREEN_WIDTH,
              (index + 1) * SCREEN_WIDTH,
            ],
            outputRange: [1, 1, 1], //0.5,1,0.5//[0.25, 1, 0.25],
          }),
        },
        {
          rotateX: xOffset.interpolate({
            inputRange: [
              (index - 1) * SCREEN_WIDTH, //-
              index * SCREEN_WIDTH,
              (index + 1) * SCREEN_WIDTH, //+
            ],
            outputRange: ["0deg", "0deg", "0deg"], //45,0,45
          }),
        },
        {
          rotateY: xOffset.interpolate({
            inputRange: [
              (index - 1) * SCREEN_WIDTH, //-1
              index * SCREEN_WIDTH, //*
              (index + 1) * SCREEN_WIDTH, //+1
            ],
            outputRange: ["30deg", "0deg", "-90deg"], //-45,0,45
          }),
        },
      ],
    };
  };
  
  const Wf = (props) => {
    const [play, setPlay] = useState(false);
    const [reiniciar, setReiniciar] = useState(false);
    const [xdataVideos, setXdataVideos] = useState(null);
    const [onSelected, setOnSelected] = useState(null);
    const [activeIndex, setActiveIndex] = useState(1);
    const [x, setX] = useState(new Animated.Value(0));
  
    // console.log("log props>",  "-", props);
    const Screen = (props) => {
      return (
        <View key={"wfsfsv1" + props.index + 1} style={styles.scrollPage}>
          <Animated.View
            key={"wfsfsvav1" + 1 + props.index}
            style={[styles.screen, xtransitionAnimation(props.index)]}
          >
            <View style={styles.marcoArriba} key={"wfsfsvavv1" + 1 + props.index}>
              <AntDesign
                key={"wfsfsvava1" + props.index}
                name="back"
                size={40}
                color="#B00020"
                onPress={() => {
                  props.navigation.navigate("Home");
                }}
                style={styles.atras}
              />
            </View>
            <View style={styles.marcoInterior} key={"wfsfsvavv2" + 1 + props.index}>
              <Text key={"wfsfsvavvt1" + 1 + props.index} style={styles.pos}>
                {props.item.id}
              </Text>
              {!props.play ? (
                <AntDesign
                  key={"wfsfsvavva1" + props.index}
                  name="playcircleo"
                  size={64}
                  color={"white"}
                  // style={styles.ico}
                  onPress={() => {
                    onPlay(props.index);
                  }}
                />
              ) : (
                <Feather
                  key={"wfsfsvavvf1" + props.index}
                  name="stop-circle"
                  size={64}
                  color="#B00020"
                  style={styles.play}
                  onPress={() => {
                    onPlay(props.index);
                  }}
                />
              )}
            </View>
            <VideoPlayer
              video={props.item.videoUrl}
              poster={props.item.poster}
              isPlay={props.index === selected && props.play}
              xkey={props.index}
              reiniciar={false}
            />
              <Animated.View style={getMaskStyle(props.index)} />
          </Animated.View>
        </View>
      );
    };
  
    xtransitionAnimation = (index) => {
      // getStyle(index: number) {
      // const [x,setX] = useState( new Animated.Value(0));
      const offset = index * width;
  
      const inputRange = [offset - width, offset + width];
  
      const translateX = x.interpolate({
        inputRange,
        outputRange: [width / ratio, -width / ratio],
        extrapolate: "clamp",
      });
      const rotateY = x.interpolate({
        inputRange,
        outputRange: [`${angle}rad`, `-${angle}rad`],
        extrapolate: "clamp",
      });
  
      const translateX1 = x.interpolate({
        inputRange,
        outputRange: [width / 2, -width / 2],
        extrapolate: "clamp",
      });
  
      const extra = width / ratio / Math.cos(angle / 2) - width / ratio;
      const translateX2 = x.interpolate({
        inputRange,
        outputRange: [-extra, extra],
        extrapolate: "clamp",
      });
  
      return {
        ...StyleSheet.absoluteFillObject,
        transform: [
          { perspective },
          { translateX },
          { rotateY },
          { translateX: translateX1 },
          { translateX: translateX2 },
        ],
      };
    };
  
    getMaskStyle = (index) => {
      //  const { x } = this.state;
      const offset = index * width;
      const inputRange = [offset - width, offset, offset + width];
      const opacity = x.interpolate({
        inputRange,
        outputRange: [0.75, 0, 0.75],
        extrapolate: "clamp",
      });
      return {
        backgroundColor: "black",
        ...StyleSheet.absoluteFillObject,
        opacity,
      };
    };
  
    onPlay = (i) => {
      console.log("log onPlay>", i, "-", play);
      selected = i;
      if (play) {
        setPlay(false);
        setReiniciar(false);
      } else {
        setPlay(true);
        setReiniciar(true);
      }
    };
  
    onChange = (index) => {
      setActiveIndex(index);
    };
  
    useEffect(() => {
      setXdataVideos(props.route.params.videosWf);
    }, []);
  
    return (
      Array.isArray(xdataVideos) && (
        <View style={styles.background} key={"wf1"}>
          <SafeAreaView style={styles.container} key="wfs1">
            <Fragment key={"wfsf1"}>
              <Animated.ScrollView
                key={"wfsfs1"}
                scrollEventThrottle={16}
                // onScroll={Animated.event(
                //   [{ nativeEvent: { contentOffset: { x: xOffset } } }],
                //   { useNativeDriver: true }
                // )}
                onScroll={Animated.event(
                  [
                    {
                      nativeEvent: {
                        contentOffset: { x },
                      },
                    },
                  ],
                  { useNativeDriver: true },
                )}
                
                onMomentumScrollEnd={() => {
                  setPlay(false);
                }}
                horizontal
                pagingEnabled
                decelerationRate={0.99}
                style={styles.scrollView}
              >
                {xdataVideos.map((item, i) => (
                  <Screen
                    key={"wfsfsscre1" + i}
                    text={item.videoUrl}
                    index={i}
                    item={item}
                    play={play}
                    navigation={props.navigation}
                  />
                ))}
              </Animated.ScrollView>
            </Fragment>
          </SafeAreaView>
        </View>
      )
    );
  };
  
  export default Wf;
  
  var styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "transparent",
    },
    background: {
      // position: "absolute",
      backgroundColor: "transparent",
      height: height,
      flex: 1,
    },
    scrollView: {
      flexDirection: "row",
      backgroundColor: "transparent",
    },
    scrollPage: {
      width: SCREEN_WIDTH,
      padding: 0,
    },
    screen: {
      height: height,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25,
      backgroundColor: "transparent",
    },
    text: {
      fontSize: 45,
      fontWeight: "bold",
    },
    boton: {
      backgroundColor: "red",
    },
    marcoInterior: {
      position: "absolute",
      top: height - 200,
      flex: 1,
      zIndex: 1,
      alignItems: "center",
      justifyContent: "center",
      // alignItems:"flex-end"
    },
    pos: {
      textShadowColor: "#fff",
      textShadowOffset: { width: -1, height: 0 },
      textShadowRadius: 10,
      fontSize: 70,
      fontWeight: "800",
      color: "#B00020",
    },
    ico: {
      color: "#B00020",
      // textShadowColor: "#000",
      // textShadowOffset: { width: 1, height: 0 },
      // textShadowRadius: 5,
    },
    marcoArriba: {
      position: "absolute",
      top: 50,
      left: 0,
      flex: 1,
      zIndex: 1,
    },
    atras: {},
  });

  
  .......................dgb wf animated cube

  import React, {
    useState,
    useEffect,
    Component,
    Fragment,
    useContext,
    useRef,
  } from "react";
  import {
    View,
    Text,
    Button,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    ScrollView,
    Animated,
    Platform,
  } from "react-native";
  import { AntDesign, Feather } from "@expo/vector-icons";
  import { LinearGradient } from "expo-linear-gradient";
  import styled from "styled-components/native";
  // import ViewPager from "@react-native-community/viewpager";
  // import ViewPager from "@react-native-community/viewpager";
  import VideoPlayer from "../componentes/VideoPlayer";
  import { Pager, PagerProvider } from "@crowdlinker/react-native-pager";
  
  const config = {
    velocityThreshold: 0.01,
    directionalOffsetThreshold: 80,
    gestureIsClickThreshold: 0.01,
  };
  const ratio = Platform.OS === "ios" ? 2 : 1.2;
  const { height, width } = Dimensions.get("window");
  const perspective = width;
  const angle = Math.atan(perspective / (width / 2));
  
  // const Containerx = ViewPager;
  
  // const Containerx = styled(ViewPager)`
  //   height: ${height}px;
  // `;
  
  const Gradient = styled(LinearGradient)`
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100%;
    height: ${height}px;
  `;
  
  const Center = styled.View`
    flex: 1;
    flex-direction: row;
    padding: 0px;
    margin-top: 35px;
    left: 5px;
    position: absolute;
  `;
  
  const windowWidth = Dimensions.get("window").width; //useWindowDimensions().width;
  const windowHeight = Dimensions.get("window").height; //useWindowDimensions().height;
  // const RviewPager = ViewPager;
  
  const SCREEN_WIDTH = Dimensions.get("window").width;
  
  const xOffset = new Animated.Value(0);
  var selected = null;
  
  const transitionAnimation = (index) => {
    return {
      transform: [
        { perspective: 800 },
        {
          scale: xOffset.interpolate({
            inputRange: [
              (index - 1) * SCREEN_WIDTH,
              index * SCREEN_WIDTH,
              (index + 1) * SCREEN_WIDTH,
            ],
            outputRange: [1, 1, 1], //0.5,1,0.5//[0.25, 1, 0.25],
          }),
        },
        {
          rotateX: xOffset.interpolate({
            inputRange: [
              (index - 1) * SCREEN_WIDTH, //-
              index * SCREEN_WIDTH,
              (index + 1) * SCREEN_WIDTH, //+
            ],
            outputRange: ["0deg", "0deg", "0deg"], //45,0,45
          }),
        },
        {
          rotateY: xOffset.interpolate({
            inputRange: [
              (index - 1) * SCREEN_WIDTH, //-1
              index * SCREEN_WIDTH, //*
              (index + 1) * SCREEN_WIDTH, //+1
            ],
            outputRange: ["30deg", "0deg", "-90deg"], //-45,0,45
          }),
        },
      ],
    };
  };
  
  const Wf = (props) => {
    const [play, setPlay] = useState(false);
    const [reiniciar, setReiniciar] = useState(false);
    const [xdataVideos, setXdataVideos] = useState(null);
    const [onSelected, setOnSelected] = useState(null);
    const [activeIndex, setActiveIndex] = useState(1);
    const [x, setX] = useState(new Animated.Value(0));
  
    // console.log("log props>",  "-", props);
    const Screen = (props) => {
      return (
        <View key={"wfsfsv1" + props.index + 1} style={styles.scrollPage}>
        <Animated.View
          key={"wfsfsvav1" + 1 + props.index}
          // style={[styles.screen, transitionAnimation(props.index)]}
          style={transitionAnimation(props.index)}
        >
          <View style={styles.marcoArriba} key={"wfsfsvavv1" + 1 + props.index}>
            <AntDesign
              key={"wfsfsvava1" + props.index}
              name="back"
              size={40}
              color="#B00020"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
              style={styles.atras}
            />
          </View>
          <View style={styles.marcoInterior} key={"wfsfsvavv2" + 1 + props.index}>
            <Text key={"wfsfsvavvt1" + 1 + props.index} style={styles.pos}>
              {props.item.id}
            </Text>
            {!props.play ? (
              <AntDesign
                key={"wfsfsvavva1" + props.index}
                name="playcircleo"
                size={64}
                color={"white"}
                // style={styles.ico}
                onPress={() => {
                  onPlay(props.index);
                }}
              />
            ) : (
              <Feather
                key={"wfsfsvavvf1" + props.index}
                name="stop-circle"
                size={64}
                color="#B00020"
                style={styles.play}
                onPress={() => {
                  onPlay(props.index);
                }}
              />
            )}
          </View>
          <VideoPlayer
            video={props.item.videoUrl}
            poster={props.item.poster}
            isPlay={props.index === selected && props.play}
            xkey={props.index}
            reiniciar={false}
          />
          <Animated.View style={getMaskStyle(props.index)} />
        </Animated.View>
        </View>
      );
    };
  
    xtransitionAnimation = (index) => {
      // getStyle(index: number) {
      // const [x,setX] = useState( new Animated.Value(0));
      const offset = index * width;
  
      const inputRange = [offset - width, offset + width];
  
      const translateX = x.interpolate({
        inputRange,
        outputRange: [width / ratio, -width / ratio],
        extrapolate: "clamp",
      });
      const rotateY = x.interpolate({
        inputRange,
        outputRange: [`${angle}rad`, `-${angle}rad`],
        extrapolate: "clamp",
      });
  
      const translateX1 = x.interpolate({
        inputRange,
        outputRange: [width / 2, -width / 2],
        extrapolate: "clamp",
      });
  
      const extra = width / ratio / Math.cos(angle / 2) - width / ratio;
      const translateX2 = x.interpolate({
        inputRange,
        outputRange: [-extra, extra],
        extrapolate: "clamp",
      });
  
      return {
        ...StyleSheet.absoluteFillObject,
        transform: [
          { perspective },
          { translateX },
          { rotateY },
          { translateX: translateX1 },
          { translateX: translateX2 },
        ],
      };
    };
  
    getMaskStyle = (index) => {
      //  const { x } = this.state;
      const offset = index * width;
      const inputRange = [offset - width, offset, offset + width];
      const opacity = x.interpolate({
        inputRange,
        outputRange: [0.75, 0, 0.75],
        extrapolate: "clamp",
      });
      return {
        backgroundColor: "black",
        ...StyleSheet.absoluteFillObject,
        opacity,
      };
    };
  
    onPlay = (i) => {
      console.log("log onPlay>", i, "-", play);
      selected = i;
      if (play) {
        setPlay(false);
        setReiniciar(false);
      } else {
        setPlay(true);
        setReiniciar(true);
      }
    };
  
    onChange = (index) => {
      setActiveIndex(index);
    };
  
    useEffect(() => {
      setXdataVideos(props.route.params.videosWf);
    }, []);
  
    return (
      Array.isArray(xdataVideos) && (
        <View style={styles.background} key={"wf1"}>
          {/* <SafeAreaView style={styles.container} key="wfs1"> */}
          {/* <Fragment key={"wfsf1"}> */}
          {xdataVideos.map((item, i) => (
            <Screen
              key={"wfsfsscre1" + i}
              text={item.videoUrl}
              index={i}
              item={item}
              play={play}
              navigation={props.navigation}
            />
          ))}
  
          <Animated.ScrollView
            key={"wfsfs1"}
            style={StyleSheet.absoluteFillObject}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToInterval={width}
            contentContainerStyle={{ width: width * 7 }}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: { x },
                  },
                },
              ],
              { useNativeDriver: true },
            )}
            decelerationRate={0.99}
            horizontal
  
            // scrollEventThrottle={16}
            // showsHorizontalScrollIndicator={false}
            // snapToInterval={width}
            // style={StyleSheet.absoluteFillObject}
            // horizontal
            // pagingEnabled
            // decelerationRate={0.99}
            // onScroll={Animated.event(
            //   [
            //     {
            //       nativeEvent: {
            //         contentOffset: { x },
            //       },
            //     },
            //   ],
            //   { useNativeDriver: true }
            // )}
            // onMomentumScrollEnd={() => {
            //   setPlay(false);
            // }}
  
            // onScroll={Animated.event(
            //   [{ nativeEvent: { contentOffset: { x: xOffset } } }],
            //   { useNativeDriver: true }
            // )}
  
            // style={styles.scrollView}
          />
  
          {/* </Animated.ScrollView> */}
          {/* </Fragment> */}
          {/* </SafeAreaView> */}
        </View>
      )
    );
  };
  
  export default Wf;
  
  var styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
    },
    background: {
      // position: "absolute",
      backgroundColor: "red",
      height: height,
      flex: 1,
      zIndex:1,
    },
    scrollView: {
      flexDirection: "row",
      backgroundColor: "yellow",
    },
    scrollPage: {
      width: SCREEN_WIDTH,
      padding: 0,
    },
    screen: {
      height: height,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 25,
      backgroundColor: "green",
    },
    text: {
      fontSize: 45,
      fontWeight: "bold",
    },
    boton: {
      backgroundColor: "red",
    },
    marcoInterior: {
      // position: "absolute",
      top: height - 200,
      flex: 1,
      zIndex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "brown",
  
      // alignItems:"flex-end"
    },
    pos: {
      textShadowColor: "#fff",
      textShadowOffset: { width: -1, height: 0 },
      textShadowRadius: 10,
      fontSize: 70,
      fontWeight: "800",
      color: "#B00020",
    },
    ico: {
      color: "#B00020",
      // textShadowColor: "#000",
      // textShadowOffset: { width: 1, height: 0 },
      // textShadowRadius: 5,
    },
    marcoArriba: {
      // position: "absolute",
      top: 50,
      left: 0,
      flex: 1,
      zIndex: 1,
    },
    atras: {},
  });

  