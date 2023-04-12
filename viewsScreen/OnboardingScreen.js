import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Saltar</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Siguiente</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Hecho</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
          {
            backgroundColor: '#fcdc4c',
            image: <Image source={require('../assets/onboarding-img1.png')} />,
            title: 'Conectate con entrenadores',
            subtitle: 'Entrenadores que eligas te haran seguimiento personalizado, asi lograr resultados.',
          },
          {
            backgroundColor: '#e04f9f',
            image: <Image source={require('../assets/onboarding-img2.png')} />,
            title: 'Comparte tus rutinas',
            subtitle: 'Se una creador influye en la rutina de bienestar y genera ingresos por tus contenidos.',
          },
          {
            backgroundColor: '#44b5db',
            image: <Image source={require('../assets/onboarding-img3.png')} />,
            title: 'Adquiere rutines personalizadas',
            subtitle: "Solicita a tu entrenador la rutina personalizada en video.",
          },
        ]}
      />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
