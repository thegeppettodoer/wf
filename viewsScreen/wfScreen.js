import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class wfScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> wfScreen </Text>
        <Button
        title="Agregar a Wf"
        onPress={() => this.props.navigation.navigate('Home')}
      />
      </View>
    );
  }
}

export default wfScreen;



// import React from 'react';
// import { View, Text } from 'react-native';

// export default function wfScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Listar xxxxxxx </Text>
//     </View>
//   );
// }
 