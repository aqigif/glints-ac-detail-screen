import React, {useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Submit from '../../Component/Button';

export default function profile(props) {
  return (
    <View style={styles.backgroundColor}>
      <View style={styles.profileBG}>
        <Fontisto name="person" size={moderateScale(60)} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.Text}>Name</Text>
        <Text style={styles.Text}>Username</Text>
        <Text style={styles.Text}>Email</Text>
      </View>
      <Submit
        press={() => props.navigation.navigate('editProfile')}
        title="SETTINGS"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundColor: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  mainContainer: {
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(5),
    height: heightPercentageToDP(92),
    width: widthPercentageToDP(100),
    backgroundColor: 'black',
  },
  profileBG: {
    backgroundColor: 'orange',
    width: moderateScale(100),
    height: moderateScale(100),
    top: heightPercentageToDP(10),
    borderRadius: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateScale(50),
  },
  textContainer: {
    marginVertical: heightPercentageToDP(10),
    alignItems: 'center',
    justifyContent: 'space-around',
    height: heightPercentageToDP(25),
  },
  Text: {
    color: 'white',
    fontSize: 25,
  },
});
