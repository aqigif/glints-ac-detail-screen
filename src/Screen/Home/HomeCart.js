import React from 'react';
import {Text, View, ScrollView, Button} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {saveToCart} from './Redux/action';

export default function Home(props) {
  const dispatch = useDispatch();
  const dataCarts = useSelector(state => state?.Home?.listCart);
  return (
    <View>
      <Button
        title="Add To Cart"
        onPress={() =>
          dispatch(
            saveToCart({
              id: 100,
              productName: 'Gelas',
            }),
          )
        }
      />
      <ScrollView>
        {Array.from(dataCarts || []).map(item => {
          return (
            <View>
              <Text>{item?.productName}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
