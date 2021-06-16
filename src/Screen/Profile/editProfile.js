import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import Head from '../../Component/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Input from '../../Component/Input';
import Submit from '../../Component/Button';

import {setDataRegister} from '../Register/action';
import {useDispatch} from 'react-redux';

export default function editProfile(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState('');
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Fullname, setFullname] = useState('');

  const submitData = () => {
    dispatch(
      setDataRegister({
        email: Email,
        username: Username,
        password: Password,
        fullname: Fullname,
      }),
    );
    props.navigation.navigate('Home');
  };
  return (
    <SafeAreaView>
      <Head
        LeftPress={() => props.navigation.navigate('Profile')}
        leftIcon="close"
        title="Edit Profile"
        rightIcon="check"
        RightPress={submitData}
      />
      <ScrollView contentContainerStyle={styles.backgroundColor}>
        <View style={styles.profileBG}>
          <Fontisto name="person" size={moderateScale(60)} />
        </View>
        <View style={styles.inputContainer}>
          <Input placeholder="Name" onChangeText={text => setFullname(text)} />
          <Input
            placeholder="Username"
            onChangeText={text => setUsername(text)}
          />
          <Input placeholder="Email" onChangeText={text => setEmail(text)} />
          <Input
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
        </View>
        <View style={styles.submit}>
          <Submit
            title="LOG OUT"
            press={() =>
              props.navigation.reset({
                index: 0,
                routes: [{name: 'Login'}],
              })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundColor: {
    height: heightPercentageToDP(90),
    width: widthPercentageToDP(100),
    backgroundColor: 'black',
    alignItems: 'center',
  },
  profileBG: {
    backgroundColor: 'orange',
    width: moderateScale(100),
    height: moderateScale(100),
    top: heightPercentageToDP(8),
    borderRadius: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateScale(50),
  },
  inputContainer: {
    top: heightPercentageToDP(5),
    bottom: heightPercentageToDP(5),
    height: heightPercentageToDP(40),
    justifyContent: 'space-evenly',
  },
  submit: {
    marginTop: heightPercentageToDP(10),
  },
});
