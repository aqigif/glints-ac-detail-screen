import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Card} from 'react-native-elements';

import Feather from 'react-native-vector-icons/Feather';
import Roboto from '../Component/Roboto';
import Foundation from 'react-native-vector-icons/Foundation';
import {moderateScale} from 'react-native-size-matters';

export default function Kartu() {
  return (
    <View style={styles.card}>
      <Card>
        <Image
          source={require('../Assets/Images/tes.png')}
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
    </View>
  );
}

const styles = StyleSheet.create({
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
});
