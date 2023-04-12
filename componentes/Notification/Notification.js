import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform } from "react-native";
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const registerForPushNotificationsAsync = async () => {
  let token;
  console.log("Constants.isDevice:", Constants.isDevice);
  // if (Constants.isDevice) {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    alert("Failed to get push token for push notification!");
    return;
  }
  token = (await Notifications.getExpoPushTokenAsync()).data;
  console.log("token:", token);
  // } else {
  //   alert("Must use physical device for Push Notifications");
  // }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
      sound:true,
      android: {
        sound: true,
      },
      ios: {
        sound: true,
      },
      priority:'max',
    });
  }

  return token;
};

const schedulePushNotification = async (note) => {
 
  console.log("- schedulePushNotification:-",  note["titulo"]);

  if (note) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "⏰ " + note['titulo'] + " ⏰",
        body: note['mensaje'],
        data: { data: "goes-here" },
        sound: 'default', // <- for Android below 8.0
      },
      trigger: {
        seconds: 2,
        channelId: 'default', // <- for Android 8.0+, see definition above
      },
        });
  }
};

export const Notificacion = async () => {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
};

export const LaunchNotificationLocal = async (note) => {
  //Lanzar notificacion
  schedulePushNotification(note);
};
