import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export default function Input(props) {
  return (
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor="white"
      style={styles.input}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: widthPercentageToDP(80),
    fontSize: 18,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
});
