import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import romance from '../Screen/Romance/romance';
import thriller from '../Screen/Thriller/thriller';
import comedy from '../Screen/Comedy/comedy';
import action from '../Screen/Action/action';

export default function topTab() {
  const topTab = createMaterialTopTabNavigator();
  return (
    <View>
      <topTab.Navigator>
        <topTab.Screen name="Action" component={action} />
        <topTab.Screen name="Romance" component={romance} />
        <topTab.Screen name="Thriller" component={thriller} />
        <topTab.Screen name="Comedy" component={comedy} />
      </topTab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({});
