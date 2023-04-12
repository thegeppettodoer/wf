import { Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";

export default function CargarRegursos() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function cargarResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          KufamSemiBoldItalic: require("../assets/fonts/Kufam-SemiBoldItalic.ttf"),
          LatoBold: require("../assets/fonts/Lato-Bold.ttf"),
          LatoBoldItalic: require("../assets/fonts/Lato-BoldItalic.ttf"),
          LatoItalic: require("../assets/fonts/Lato-Italic.ttf"),
          LatoRegular: require("../assets/fonts/Lato-Regular.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    cargarResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
