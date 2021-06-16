import React from 'react';
import {StyleSheet, Text, SafeAreaView, View, Image} from 'react-native';
import {Card, Rating} from 'react-native-elements/';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';

import Foundation from 'react-native-vector-icons/Foundation';
import Roboto from '../../Component/Roboto';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Head from '../../Component/Header';

import {Avatar} from 'react-native-elements';

export default function AllReview(props) {
  return (
    <SafeAreaView style={styles.fullScreen}>
      <Head
        title="All Review"
        leftIcon="left"
        LeftPress={() => props.navigation.navigate('Home')}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.containerCard}>
          <Card containerStyle={styles.card}>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: moderateScale(20)}}>
                <Avatar
                  size={80}
                  rounded
                  source={{
                    uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                  }}
                />
              </View>
              <View style={{flexDirection: 'column'}}>
                <View
                  style={{
                    flexDirection: 'column',
                    flex: 1,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Rating
                        ratingCount={1}
                        imageSize={20}
                        startingValue={1}
                        readonly
                      />
                      <Roboto
                        title={`Skor`}
                        style={{paddingLeft: moderateScale(2)}}
                      />
                    </View>
                    <Roboto title="Comment" size={moderateScale(18)} />
                  </View>
                </View>
                <View style={{marginBottom: moderateScale(5)}}>
                  <Roboto title="Reviewer: Name" />
                </View>
              </View>
            </View>
            <View>
              <View style={styles.containerDesc}>
                <Roboto
                  title="This movie should encourage each and every one of us to become a better person, treat everyone with respect and make each other feel like they belong in this world, instead of making them feel isolated."
                  size={moderateScale(12)}
                  textAlign="justify"
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
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  padding: {
    paddingVertical: moderateScale(2),
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
  containerCard: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    width: moderateScale(340),
    height: moderateScale(150),
    backgroundColor: 'white',
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
  containerDesc: {
    width: moderateScale(310),
    height: moderateScale(50),
  },
});
