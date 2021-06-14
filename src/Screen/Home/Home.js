import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {SearchBar, Card} from 'react-native-elements';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FastImage from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';

import Fontisto from 'react-native-vector-icons/Fontisto';
import Roboto from '../../Component/Roboto';
import Tombol from '../../Component/Tombol';
import Kartu from '../../Component/card';

export default function Home() {
  const BottomTab = createMaterialBottomTabNavigator();
  const [search, setSearch] = useState();
  return (
    <SafeAreaView style={styles.fullScreen}>
      <ScrollView style={styles.scrollView}>
        <SearchBar
          placeholder="Search movies"
          containerStyle={{backgroundColor: 'black'}}
          inputContainerStyle={{backgroundColor: 'white'}}
          onChangeText={text => setSearch(text)}
          value={search}
        />
        {/* genre */}
        <View style={styles.bestGenre}>
          <View>
            <Roboto
              title="Best Genre"
              fontSize={moderateScale(18)}
              color="white"
            />
          </View>
          <View>
            <Roboto title="more>>" fontSize={moderateScale(12)} color="white" />
          </View>
        </View>
        {/* topTab */}
        <View style={styles.genre}>
          <View>
            <Tombol text="Action" />
          </View>
          <View>
            <Tombol text="Romance" />
          </View>
          <View>
            <Tombol text="Thriller" />
          </View>
          <View>
            <Tombol text="Comedy" />
          </View>
        </View>
        <View>
          <Roboto
            title="Hot Action Movie"
            fontSize={moderateScale(18)}
            color="white"
          />
        </View>
        <View>
          <Kartu />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    backgroundColor: 'black',
    flex: 1,
    paddingVertical: moderateScale(10),
  },
  bestGenre: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(10),
  },
  genre: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  scrollView: {
    flexGrow: 1,
  },

  tes: {
    backgroundColor: 'red',
    flex: 1,
  },
});
