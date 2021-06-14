import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {moderateScale} from 'react-native-size-matters';

export default function Submit(props) {
  return (
    <Button
      title={props.title}
      onPress={props.press}
      titleStyle={styles.textStyle}
      buttonStyle={styles.button}
      containerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
  },
  button: {
    backgroundColor: 'white',
    width: moderateScale(120),
    borderRadius: moderateScale(100),
  },
  container: {
    width: moderateScale(120),
    borderRadius: moderateScale(100),
  },
});
