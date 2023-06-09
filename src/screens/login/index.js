import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Identity from '../../components/identity';
import Form from '../../components/form';

export default function Login(props) {
  return (
    <View style={styles.container}>
      <Identity title='Login' />

      <Form changeScreenTo={props.changeScreenTo} type='login' />
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
  }
});
