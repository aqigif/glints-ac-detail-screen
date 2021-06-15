import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Roboto from './Roboto';

const Tombol = ({text, action}) => {
  return (
    <TouchableOpacity onPress={action} style={styles.button}>
      <MaterialIcon name="movie-outline" size={18} color="black" />
      <Roboto style={styles.textButton} title={text} size={14} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderRadius: 8,
    height: 40,
    flexDirection: 'row',
    paddingHorizontal: moderateScale(4),
    alignItems: 'center',
  },
  textButton: {
    color: 'black',
  },
});
export default Tombol;
