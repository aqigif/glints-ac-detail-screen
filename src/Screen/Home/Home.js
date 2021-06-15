import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {SearchBar, Card} from 'react-native-elements';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FastImage from 'react-native-fast-image';
import {moderateScale} from 'react-native-size-matters';

import Fontisto from 'react-native-vector-icons/Fontisto';
import Roboto from '../../Component/Roboto';
import Tombol from '../../Component/Tombol';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';

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
          <TouchableOpacity>
            <Roboto title="more>>" fontSize={moderateScale(12)} color="white" />
          </TouchableOpacity>
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
        <View style={{paddingVertical: moderateScale(10)}}>
          <Roboto
            title="Hot Action Movie"
            fontSize={moderateScale(18)}
            color="white"
          />
        </View>
        <TouchableOpacity style={styles.card}>
          <Card>
            <Image
              source={require('../../Assets/Images/tes.png')}
              style={styles.image}
              resizeMode="contain"
            />
            <Roboto
              title="DESCRIPTION"
              style={{paddingVertical: moderateScale(5)}}
            />
            <View style={{borderBottomColor: 'B7B7B7', borderBottomWidth: 1}} />
            <View style={styles.underline}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: moderateScale(10),
                  paddingVertical: moderateScale(2),
                  marginBottom: moderateScale(20),
                }}>
                <Feather name="message-circle" size={moderateScale(15)} />
                <Roboto title="123" size={moderateScale(12)} />
              </View>
              <View></View>
              <View>
                <Foundation
                  name="share"
                  size={moderateScale(20)}
                  style={{paddingVertical: moderateScale(2)}}
                />
              </View>
            </View>
          </Card>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    backgroundColor: 'black',
    flex: 1,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
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

  image: {
    width: moderateScale(300),
    height: moderateScale(168),
    borderRadius: 20,
  },
  underline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(10),
  },
  card: {
    width: moderateScale(326),
    height: moderateScale(319),
  },
  card: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 20,
    paddingVertical: moderateScale(10),
  },

  tes: {
    backgroundColor: 'red',
    flex: 1,
  },
});
