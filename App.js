import React, { useState, useEffect, useRef } from "react";
import { AppState } from "react-native";
import Providers from "./componentes/Navigation/Index";
import CargarRegursos from "./utils/CargarRecursos";

const App = () => {
  const seCargo = CargarRegursos();

  if (!seCargo) {
    return null;
  } else {
    return <Providers />;
  }
};

export default App;

// import {useFonts} from 'expo-font';
// const [loaded] = useFonts({
//   KufamSemiBoldItalic: require('./assets/fonts/Kufam-SemiBoldItalic.ttf'),
//   LatoBold: require('./assets/fonts/Lato-Bold.ttf'),
//   LatoBoldItalic: require('./assets/fonts/Lato-BoldItalic.ttf'),
//   LatoItalic: require('./assets/fonts/Lato-Italic.ttf'),
//   LatoRegular: require('./assets/fonts/Lato-Regular.ttf'),
// });
// if (!loaded) {
//   console.log('>App>No cargo fonts');
//   return null;
// }
