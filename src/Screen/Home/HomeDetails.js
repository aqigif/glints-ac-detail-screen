import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {SearchBar, Card, Rating} from 'react-native-elements';
import {moderateScale} from 'react-native-size-matters';

import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Roboto from '../../Component/Roboto';

export default function HomeDetails() {
  const [search, setSearch] = useState();
  return (
    <SafeAreaView style={styles.fullScreen}>
      <ScrollView style={styles.scrollView}>
        <SearchBar
          placeholder="Search movies"
          containerStyle={{
            backgroundColor: 'black',
            paddingBottom: moderateScale(20),
          }}
          inputContainerStyle={{backgroundColor: 'white'}}
          onChangeText={text => setSearch(text)}
          value={search}
        />
        <View style={styles.card}>
          <Card>
            <Image
              source={require('../../Assets/Images/tes.png')}
              style={styles.trailer}
              resizeMode="contain"
            />
            <View style={styles.genre}>
              <View>
                <Roboto
                  title="JUDUL"
                  style={{paddingVertical: moderateScale(10)}}
                />
              </View>
              <View>
                <Roboto
                  title="Tahun | Genre"
                  style={{paddingVertical: moderateScale(10)}}
                />
              </View>
            </View>
            <View
              style={{borderBottomColor: '#B7B7B7', borderBottomWidth: 1}}
            />
            <View style={styles.rating}>
              <View>
                <Image
                  source={require('../../Assets/Images/tes.png')}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
              <View>
                <Rating ratingCount={1} imageSize={20} readonly />
                <Roboto title="9/10" />
              </View>
              <View>
                <Rating ratingCount={1} imageSize={20} readonly />
                <TouchableOpacity>
                  <Roboto title="Rate This" />
                </TouchableOpacity>
              </View>
              <View>
                <Roboto title="Description jhbahjdbajdblabdlakblk ajhsbd" />
              </View>
            </View>
            <View
              style={{borderBottomColor: '#B7B7B7', borderBottomWidth: 1}}
            />
            <View style={styles.underline}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: moderateScale(10),
                  paddingVertical: moderateScale(2),
                }}>
                <Feather name="message-circle" size={moderateScale(15)} />
                <Roboto title="123" size={moderateScale(12)} />
              </View>
              <View>
                <Foundation
                  name="share"
                  size={moderateScale(20)}
                  style={{paddingVertical: moderateScale(2)}}
                />
              </View>
            </View>
          </Card>
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
    paddingHorizontal: moderateScale(15),
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  trailer: {
    width: moderateScale(300),
    height: moderateScale(168),
    borderRadius: 20,
  },
  image: {
    width: moderateScale(90),
    height: moderateScale(131),
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

  scrollView: {
    flexGrow: 1,
  },
  genre: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    paddingTop: moderateScale(10),
  },

  tes: {
    backgroundColor: 'red',
    flex: 1,
  },
});
