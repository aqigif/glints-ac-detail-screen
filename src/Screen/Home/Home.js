import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {SearchBar, Card} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import ModalPopup from '../../Component/ModalPopup';
import {moderateScale} from 'react-native-size-matters';

import Fontisto from 'react-native-vector-icons/Fontisto';
import Roboto from '../../Component/Roboto';
import Tombol from '../../Component/Tombol';
import Feather from 'react-native-vector-icons/Feather';
import Foundation from 'react-native-vector-icons/Foundation';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

import {useDispatch, useSelector} from 'react-redux';
import {getMovie} from './Redux/action';

export default function Home(props) {
  const dispatch = useDispatch();
  const [search, setSearch] = useState();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const filter = {
      page: 3,
    };
    dispatch(getMovie(filter));
  }, []);

  const dataMovie = useSelector(state => state.Home.listData);

  return (
    <SafeAreaView style={styles.fullScreen}>
      <ScrollView style={styles.scrollView}>
        <SearchBar
          placeholder="Search movies"
          containerStyle={{backgroundColor: 'black'}}
          inputContainerStyle={{backgroundColor: 'white'}}
          onChangeText={text => setSearch(text)}
          value={search}
        />
        {/* genre */}
        <View style={styles.bestGenre}>
          <View>
            <Roboto
              title="Best Genre"
              fontSize={moderateScale(18)}
              color="white"
            />
          </View>
          <TouchableOpacity>
            <Roboto title="more>>" fontSize={moderateScale(12)} color="white" />
          </TouchableOpacity>
        </View>
        {/* topTab */}
        <View style={styles.genre}>
          <View>
            <Tombol text="Action" />
          </View>
          <View>
            <Tombol text="Romance" />
          </View>
          <View>
            <Tombol text="Thriller" />
          </View>
          <View>
            <Tombol text="Comedy" />
          </View>
        </View>
        <View style={{paddingVertical: moderateScale(10)}}>
          <Roboto
            title="Hot Action Movie"
            fontSize={moderateScale(18)}
            color="white"
          />
        </View>
        <View style={styles.cardContainer}>
          <ModalPopup
            openReview={() => {
              setVisible(false);
              props.navigation.navigate('AllUserReview');
            }}
            onClose={() => setVisible(false)}
            visible={visible}
          />
          {dataMovie.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setVisible(true)}
                activeOpacity={0.8}>
                <Card containerStyle={styles.card}>
                  <FastImage
                    style={styles.image}
                    source={{
                      uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                    }}
                    resizeMode="contain"
                  />
                  <View
                    style={{
                      height: moderateScale(80),
                    }}>
                    <Roboto
                      title={item.overview}
                      style={{paddingVertical: moderateScale(5)}}
                    />
                  </View>
                  <View
                    style={{borderBottomColor: 'B7B7B7', borderBottomWidth: 1}}
                  />
                  <View style={styles.underline}>
                    <View
                      style={{
                        paddingHorizontal: moderateScale(10),
                        paddingVertical: moderateScale(2),
                      }}>
                      <TouchableOpacity
                        onPress={() =>
                          props.navigation.navigate('AllUserReview')
                        }>
                        <View style={{flexDirection: 'row'}}>
                          <Feather
                            name="message-circle"
                            size={moderateScale(20)}
                          />
                          <Roboto title="123" size={moderateScale(14)} />
                        </View>
                      </TouchableOpacity>
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
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    backgroundColor: 'black',
    flex: 1,
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(5),
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  bestGenre: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(10),
  },
  genre: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  scrollView: {
    flexGrow: 1,
  },

  image: {
    width: moderateScale(300),
    height: moderateScale(168),
    borderRadius: 20,
  },
  underline: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(10),
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    width: moderateScale(340),
    height: moderateScale(300),
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: moderateScale(10),
  },

  tes: {
    backgroundColor: 'red',
    flex: 1,
  },
});
