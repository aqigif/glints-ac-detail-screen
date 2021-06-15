import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';

import Home from './src/Screen/Home/Home';
import Register from './src/Screen/Register/Register';
import Login from './src/Screen/Login/Login';
import profile from './src/Screen/Profile/profile';
import review from './src/Screen/Review/review';
import HomeDetails from './src/Screen/Home/HomeDetails';
import HomeAddReview from './src/Screen/Home/HomeAddReview';

const Stack = createStackNavigator();

const transitionScreen = {
  ...TransitionPresets.SlideFromRightIOS,
};
const BottomTab = createMaterialBottomTabNavigator();

export default function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Register"
        screenOptions={transitionScreen}>
        <Stack.Screen
          options={{headerShown: false}}
          name="MyBottomTab"
          component={MyBottomTab}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
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
      screenOptions={transitionScreen}>
      <BottomTab.Screen
        options={{
          tabBarColor: 'pink',
          tabBarIcon: () => (
            <Feather name="message-circle" size={23} color="black" />
          ),
        }}
        name="Review"
        component={review}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: () => <Foundation name="home" size={23} color="black" />,
        }}
        name="Home"
        component={Home}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: () => <Fontisto name="person" size={23} color="black" />,
        }}
        name="Profile"
        component={profile}
        labeled={true}
      />
    </BottomTab.Navigator>
  );
};