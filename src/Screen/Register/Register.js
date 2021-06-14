import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';

import {useDispatch} from 'react-redux';
import Submit from '../../Component/Button';
import {setDataRegister} from './action';

import Fontisto from 'react-native-vector-icons/Fontisto';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import Input from '../../Component/Input';

export default function Register(props) {
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
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.profileBG}>
            <Fontisto name="person" size={moderateScale(60)} />
          </View>
          <View style={styles.inputContainer}>
            <Input
              placeholder="Name"
              onChangeText={text => setFullname(text)}
            />
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
          <View style={styles.button}>
            <Submit press={submitData} title="SIGN UP" />
            <View style={styles.bottomContainer}>
              <Text style={styles.bottomText}>Already Have Account?</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Login')}>
                <Text style={styles.bottomText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: 'black',
    height: heightPercentageToDP(100),
    width: widthPercentageToDP(100),
  },
  profileBG: {
    backgroundColor: 'orange',
    width: moderateScale(100),
    height: moderateScale(100),
    top: heightPercentageToDP(10),
    borderRadius: moderateScale(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    top: heightPercentageToDP(12),
    bottom: heightPercentageToDP(5),
    height: heightPercentageToDP(40),
    justifyContent: 'space-evenly',
  },
  button: {
    top: heightPercentageToDP(18),
    alignItems: 'center',
  },
  bottomContainer: {
    marginTop: moderateScale(15),
    flexDirection: 'row',
  },
  bottomText: {
    color: 'white',
    fontSize: 14,
    marginRight: moderateScale(7),
  },
});
