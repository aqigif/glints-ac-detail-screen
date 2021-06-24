import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';

import Home from './src/Screen/Home/Home';
import HomeCart from './src/Screen/Home/HomeCart';
import Register from './src/Screen/Register/Register';
import Login from './src/Screen/Login/Login';
import AllReview from './src/Screen/Review/review';
import editProfile from './src/Screen/Profile/editProfile';
import userReview from './src/Screen/Review/userReview';

import {Avatar} from 'react-native-elements';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const transitionScreen = {
  ...TransitionPresets.SlideFromRightIOS,
};
const BottomTab = createMaterialBottomTabNavigator();

export default function Root() {
  const isLoggedIn = useSelector(state => state?.Login?.responseSuccess?.token);
  console.log(isLoggedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={transitionScreen}>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              options={{headerShown: false}}
              name="MyBottomTab"
              component={MyBottomTab}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="UserReview"
              component={userReview}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              options={{headerShown: false}}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="Register"
              component={Register}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MyBottomTab = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      labeled={false}
      activeColor="black"
      barStyle={{backgroundColor: 'white'}}
      screenOptions={() => transitionScreen}>
      <BottomTab.Screen
        options={{
          tabBarColor: 'pink',
          tabBarIcon: () => (
            <Feather name="message-circle" size={23} color="black" />
          ),
        }}
        name="Review"
        component={AllReview}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Foundation name="home" size={23} color={color} />
          ),
        }}
        name="Home"
        component={HomeCart}
      />
      <BottomTab.Screen
        listeners={false}
        options={{
          tabBarIcon: () => (
            <Avatar
              size={25}
              rounded
              source={{
                uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
              }}></Avatar>
          ),
        }}
        name="Profile"
        component={editProfile}
        labeled={true}
      />
    </BottomTab.Navigator>
  );
};
