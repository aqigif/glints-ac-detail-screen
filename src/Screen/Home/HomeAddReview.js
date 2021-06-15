import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Rating} from 'react-native-elements/';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Roboto from '../../Component/Roboto';

export default function HomeAddReview() {
  const [rating, setRating] = useState();
  return (
    <View style={styles.card}>
      <View>
        <Roboto title="How do you think about this movie?" />
        <Rating ratingCount={10} imageSize={20} onFinishRating={setRating} />
        <Text>{`Your rating ${rating}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingTop: moderateScale(20),
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(20),
    backgroundColor: '#FFE7AB',
    lineHeight: moderateScale(10),
  },
});
