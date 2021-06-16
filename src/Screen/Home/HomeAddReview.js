import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Rating, Button} from 'react-native-elements/';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Roboto from '../../Component/Roboto';

export default function HomeAddReview() {
  const [rating, setRating] = useState([5]);
  const [headline, setHeadline] = useState();
  const [review, setReview] = useState();
  return (
    <View style={styles.card}>
      <View style={{paddingBottom: moderateScale(10)}}>
        <Roboto title="How do you think about this movie?" />
      </View>
      <View style={{paddingBottom: moderateScale(10)}}>
        <Rating
          ratingCount={10}
          imageSize={25}
          onFinishRating={setRating}
          style={styles.rating}
          tintColor={'#FFE7AB'}
        />
      </View>
      <View style={{paddingBottom: moderateScale(10)}}>
        <Roboto title={`Your rating: ${rating}`} />
      </View>
      <View style={{paddingBottom: moderateScale(10)}}>
        <TextInput
          value={headline}
          placeholder="Write your headline for your review here"
          onChangeText={text => setHeadline(text)}
          style={styles.headline}
        />
      </View>
      <View style={{paddingBottom: moderateScale(10)}}>
        <TextInput
          value={review}
          placeholder="Write your headline for your review here"
          onChangeText={text => setReview(text)}
          style={styles.review}
        />
      </View>
      <View style={{paddingBottom: moderateScale(5)}}>
        <Button title="Submit" buttonStyle={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(20),
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: moderateScale(15),
    backgroundColor: '#FFE7AB',
  },
  headline: {
    backgroundColor: 'white',
    borderRadius: moderateScale(4),
  },
  review: {
    paddingBottom: moderateScale(80),
    borderRadius: moderateScale(4),
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'black',
    width: moderateScale(120),
    color: 'white',
    borderRadius: moderateScale(10),
  },
  rating: {
    backgroundColor: '#FFE7AB',
  },
});
