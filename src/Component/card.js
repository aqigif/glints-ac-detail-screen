import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {Card} from 'react-native-elements';

import ModalPopup from './ModalPopup';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Roboto from '../Component/Roboto';
import Foundation from 'react-native-vector-icons/Foundation';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export default function Kartu() {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <ModalPopup onClose={() => setVisible(false)} visible={visible} />
      <TouchableOpacity onPress={() => setVisible(true)} activeOpacity={0.8}>
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
      </TouchableOpacity>
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
