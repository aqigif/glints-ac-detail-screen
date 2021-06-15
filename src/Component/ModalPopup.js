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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Roboto from '../Component/Roboto';
import Foundation from 'react-native-vector-icons/Foundation';
import {moderateScale} from 'react-native-size-matters';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export default function ModalPopup({visible}, props) {
  const [showModal, setShowModal] = useState(visible);
  useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };
  return (
    <Modal
      onRequestClose={() => setShowModal(!showModal)}
      transparent
      visible={showModal}>
      <View style={styles.modalBackground}>
        <View style={styles.modal}>
          <View style={styles.closeModal}>
            <TouchableOpacity onPress={() => setShowModal(!showModal)}>
              <AntDesign name="close" size={moderateScale(25)} />
            </TouchableOpacity>
          </View>
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
    width: moderateScale(300),
    height: moderateScale(168),
    borderRadius: 20,
  },
  underline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(10),
  },
});
