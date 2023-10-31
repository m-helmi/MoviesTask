/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../style';

const GridView = props => {
  return (
    <View style={styles.gridBox}>
      <TouchableOpacity onPress={props.onPressDetails}>
        <Image style={styles.stlImg} source={{uri: props.pic}} />
        <Text style={styles.title}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default GridView;
