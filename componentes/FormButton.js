import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';

const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    // marginTop: 10,
    // flex: 0,
    // margin:10,
    width: '100%',
    height: 45,
    backgroundColor: '#B00020',//'#2e64e5',
    // padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'normal',
    color: '#ffffff',
    fontFamily: 'LatoRegular',
    textAlign:"center",
  },
});
