import React, { Component } from "react";
import { View, Text, Button } from "react-native";

class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> HomeScreen </Text>
        <Button
        title="Ir a Wf"
        onPress={() => this.props.navigation.navigate('Wf')}
      />

      </View>
    );
  }
}

export default Inicio;
