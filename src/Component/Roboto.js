import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Roboto(props) {
  const styles = StyleSheet.create({
    textStyle: {
      fontFamily: `Roboto-${props.type ? props.type : 'Regular'}`,
      fontSize: props.size ? props.size : 16,
      color: props.color ? props.color : 'black',
      textAlign: props.textAlign ? props.textAlign : 'left',
      fontWeight: props.fontWeight ? props.fontWeight : 'normal',
      ...props.style,
    },
  });

  return (
    <View>
      <Text style={styles.textStyle}> {props.title} </Text>
    </View>
  );
}
