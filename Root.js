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
import AllReview from './src/Screen/Review/review';
import HomeDetails from './src/Screen/Home/HomeDetails';
import HomeAddReview from './src/Screen/Home/HomeAddReview';
import editProfile from './src/Screen/Profile/editProfile';
import userReview from './src/Screen/Review/userReview';

import {Avatar} from 'react-native-elements';

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
        <Stack.Screen
          options={{headerShown: false}}
          name="editProfile"
          component={editProfile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const AddReviewStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="AllUserReview"
        component={AllReview}
      />
    </Stack.Navigator>
  );
};

const MyBottomTab = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="AddReview"
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
        component={userReview}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Foundation name="home" size={23} color={color} />
          ),
        }}
        name="AddReview"
        component={AddReviewStack}
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
        component={profile}
        labeled={true}
      />
    </BottomTab.Navigator>
  );
};
