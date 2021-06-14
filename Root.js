import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from './src/Screen/Home/Home';
import Register from './src/Screen/Register/Register';
import Login from './src/Screen/Login/Login';

const Stack = createStackNavigator();

const transitionScreen = {
  ...TransitionPresets.SlideFromRightIOS,
};

export default function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Register"
        screenOptions={transitionScreen}>
        <Stack.Screen name="Home" component={Home} />
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
