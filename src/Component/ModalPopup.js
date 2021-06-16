import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';

import {Card, Rating} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Roboto from '../Component/Roboto';
import Foundation from 'react-native-vector-icons/Foundation';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export default function ModalPopup({visible, onClose}) {
  return (
    <Modal transparent visible={visible}>
      <View style={styles.modalBackground}>
        <View style={styles.modal}>
          <View style={styles.closeModal}>
            <TouchableOpacity onPress={onClose}>
              <AntDesign name="close" size={moderateScale(25)} />
            </TouchableOpacity>
          </View>
          <Card containerStyle={styles.card}>
            <Image
              source={require('../Assets/Images/tes.png')}
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
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image
                  source={require('../Assets/Images/tes.png')}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>
              <View
                style={{
                  flex: 1,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    backgroundColor: 'red',
                  }}>
                  <Rating
                    ratingCount={1}
                    imageSize={20}
                    startingValue={1}
                    readonly
                  />
                  <Rating
                    ratingCount={1}
                    imageSize={20}
                    startingValue={0}
                    readonly
                  />
                </View>
                <View
                  style={{
                    alignContent: 'flex-end',
                    alignItems: 'flex-end',
                    justifyContent: 'space-around',
                    backgroundColor: 'yellow',
                    flex: 1,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Roboto title="9/10" />
                    <Roboto title="Rate This" />
                  </View>
                  <View
                    style={{
                      paddingLeft: moderateScale(25),
                      paddingTop: moderateScale(10),
                      backgroundColor: 'white',
                      flex: 1,
                      alignContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Roboto
                      title="Description jhbahjdbajdblabdlakblk ajhsbd"
                      textAlign="justify"
                    />
                  </View>
                </View>
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
              <View style={{flexDirection: 'row'}}>
                <Foundation
                  name="share"
                  size={moderateScale(20)}
                  style={{paddingVertical: moderateScale(2)}}
                />
              </View>
            </View>
          </Card>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    alignSelf: 'center',
    width: widthPercentageToDP(99),
    height: heightPercentageToDP(80),
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: moderateScale(10),
  },
  closeModal: {
    alignItems: 'flex-end',
    paddingRight: moderateScale(20),
  },

  image: {
    width: moderateScale(90),
    height: moderateScale(131),
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
  genre: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trailer: {
    width: moderateScale(300),
    height: moderateScale(168),
    borderRadius: 20,
  },
});
