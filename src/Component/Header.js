import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import {moderateScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Head(props) {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View>
          <TouchableOpacity onPress={props.LeftPress}>
            <AntDesign
              name={props.leftIcon}
              size={moderateScale(30)}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.textStyle}>{props.title}</Text>
        </View>
        <View style={styles.rightIcon}>
          <TouchableOpacity onPress={props.RightPress}>
            <AntDesign
              name={props.rightIcon}
              size={moderateScale(30)}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: moderateScale(62),
    width: widthPercentageToDP(100),
    flexDirection: 'row',
    paddingHorizontal: moderateScale(10),
    alignItems: 'center',
    backgroundColor: '#848282',
  },
  textStyle: {
    fontSize: 22,
    color: 'white',
    marginLeft: moderateScale(10),
  },
  rightIcon: {
    alignItems: 'flex-end',
    width: widthPercentageToDP(55),
  },
});
