import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from '../style';
import { useSelector } from 'react-redux';
const IMG_URL = 'https://image.tmdb.org/t/p/w300';

function DetailsScreen({route}) {
  const {item} = route.params;
  const movie = useSelector(state => state)
  console.log('movie : ',movie.movie.movie.value);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{item.title}</Text>
          <Text style={styles.modalText}>{item.date}</Text>
          <Text style={styles.overview}>{item.overview}</Text>
          <Image
            style={{width: 300, height: 400}}
            source={{uri: IMG_URL + item.poster_path}}
          />
        </View>
      </View>
    </View>
  );
}
export default DetailsScreen;
