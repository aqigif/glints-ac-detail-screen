import React from 'react';
import {StyleSheet, Text, SafeAreaView, View, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Card, Rating} from 'react-native-elements/';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';

import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Roboto from '../../Component/Roboto';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();

export default function userReview() {
  return (
    <SafeAreaView style={styles.fullScreen}>
      <ScrollView style={styles.scrollView}>
        <Card containerStyle={styles.card}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../Assets/Images/tes.png')}
              style={styles.image}
              resizeMode="contain"
            />
            <View
              style={{
                flexDirection: 'column',
                flex: 1,
              }}>
              <Roboto title="JUDUL & Tahun" size={moderateScale(18)} />
              <Roboto title="Reviewed" size={moderateScale(14)} />
              <View
                style={{flexDirection: 'row', paddingTop: moderateScale(10)}}>
                <View>
                  <Rating
                    ratingCount={1}
                    imageSize={20}
                    startingValue={1}
                    readonly
                  />
                </View>
                <View>
                  <Roboto
                    title={`Skor`}
                    style={{paddingLeft: moderateScale(2)}}
                  />
                </View>
              </View>
              <View
                style={{flexDirection: 'row', paddingTop: moderateScale(10)}}>
                <TouchableOpacity>
                  <MaterialIcon
                    name="edit"
                    size={18}
                    color="white"
                    style={styles.icon}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={styles.icon}>
                  <Foundation name="trash" size={18} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.padding}>
              <Roboto title="Heading" size={moderateScale(12)} />
            </View>
            <View>
              <Roboto
                title="This movie should encourage each and every one of us to become a better person, treat everyone with respect and make each other feel like they belong in this world, instead of making them feel isolated."
                size={moderateScale(12)}
                textAlign="justify"
              />
            </View>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    backgroundColor: 'black',
    flex: 1,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  padding: {
    paddingVertical: moderateScale(10),
  },
  icon: {
    height: moderateScale(20),
    width: moderateScale(20),
    backgroundColor: '#F7A707',
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateScale(10),
  },
  trailer: {
    width: moderateScale(300),
    height: moderateScale(168),
    borderRadius: 20,
  },
  image: {
    width: moderateScale(80),
    height: moderateScale(116),
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
});
