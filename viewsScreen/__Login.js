//

import React, { Component } from "react";
import { View, Text, Button, Alert } from "react-native";
const { logIn } = require("../componentes/Conectar");

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "", error: "", mensaje: "" };
  }
  alertar() {
    Alert.alert(
      "Login " + this.state.error,
      this.state.mensaje,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        // { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }
  async loginCall() {
    logIn(function (err, res) {
      this.setState({ user: res, error: res.error, mensaje: res.message });
      if (res.error === 0) {
        console.log("Login> loginCall>0  > ", res);
      } else {
        console.log("Login> loginCall>err> ", err);

        this.props.navigation.navigate("Login");
        this.alertar();
      }
    });
    // let call = await logIn();

    //   this.props.navigation.navigate("Home");
    //   // this.alertar();
    // }
    // return call;
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Iniciar sesion fb </Text>
        <Button title="Login" onPress={() => this.loginCall()} />
      </View>
    );
  }
}

export default LoginScreen;
