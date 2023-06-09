import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Image } from 'expo-image';

import logo from '../../../assets/logo.png';

export default function Identity(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={logo} alt='Logo' />

      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#033D6A',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  image: {
    width: 80,
    height: 80
  },
  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    padding: 8
  }
});
