import React, {useEffect, useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import Submit from '../../Component/Button';
import Input from '../../Component/Input';
import {loginAction} from './action';

export default function Login(props) {
  const dispatch = useDispatch();
  const dataLogin = useSelector(state => state.Login);
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const submitLogin = () => {
    dispatch(loginAction({email: Email, password: Password}));
  };

  useEffect(() => {
    if (dataLogin?.responseError?.error) {
      setPassword('');
      setEmail('');
      ToastAndroid.showWithGravity(
        `Sorry, ${dataLogin?.payload?.error || 'Something went wrong'}`,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
    }
  }, [dataLogin]);

  return (
    <SafeAreaView style={styles.fullScreen}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <MaterialCommunityIcons
            name="movie-open"
            size={moderateScale(100)}
            color={'orange'}
          />
          <View style={styles.input}>
            <Input
              placeholder="Email"
              value={Email}
              onChangeText={text => setEmail(text)}
            />
            <Input
              placeholder="Password"
              value={Password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
            <View style={styles.forgotContainer}>
              <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <Submit press={submitLogin} title="SIGN IN" />
            <View style={styles.bottomContainer}>
              <Text style={styles.bottomText}>Don't Have an Account?</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('Register')}>
                <Text style={styles.bottomText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    backgroundColor: 'black',
  },
  scroll: {
    flexGrow: 1,
  },
  mainContainer: {
    paddingVertical: heightPercentageToDP(10),
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(100),
    alignItems: 'center',
    flex: 1,
  },
  input: {
    height: heightPercentageToDP(25),
    justifyContent: 'space-evenly',
    marginTop: heightPercentageToDP(5),
  },
  forgotContainer: {
    width: widthPercentageToDP(80),
    alignItems: 'flex-end',
  },
  forgot: {
    color: 'white',
    fontSize: 18,
    width: widthPercentageToDP(40),
  },
  buttonContainer: {
    alignItems: 'center',
    height: heightPercentageToDP(15),
    width: widthPercentageToDP(50),
    justifyContent: 'flex-end',
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
