import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {Rating, Button} from 'react-native-elements/';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Roboto from '../../Component/Roboto';

export default function HomeAddReview({tampak, Close}) {
  const [rating, setRating] = useState([5]);
  const [headline, setHeadline] = useState();
  const [review, setReview] = useState();
  return (
    <Modal transparent visible={tampak} animationType="slide">
      <View style={styles.modalBackground}>
        <View style={styles.card}>
          <View style={styles.closeReview}>
            <TouchableOpacity onPress={Close}>
              <AntDesign name="close" size={moderateScale(25)} />
            </TouchableOpacity>
          </View>
          <View style={{paddingBottom: moderateScale(10)}}>
            <Roboto
              size={moderateScale(18)}
              title="How do you think about this movie?"
              fontWeight="bold"
            />
          </View>
          <View style={{paddingBottom: moderateScale(10)}}>
            <Rating
              ratingCount={10}
              imageSize={35}
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
  card: {
    width: widthPercentageToDP(100),
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
    width: moderateScale(300),
  },
  review: {
    paddingBottom: moderateScale(80),
    borderRadius: moderateScale(4),
    width: moderateScale(300),
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'black',
    width: moderateScale(120),
    color: 'white',
    borderRadius: moderateScale(10),
    marginTop: moderateScale(10),
  },
  rating: {
    backgroundColor: '#FFE7AB',
  },
  closeReview: {
    width: widthPercentageToDP(90),
    alignItems: 'flex-end',
  },
});
