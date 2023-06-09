import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Identity from '../../components/identity';
import Form from '../../components/form';

export default function Register(props) {
  return (
    <View style={styles.container}>
      <Identity title='Cadastro' />

      <Form changeScreenTo={props.changeScreenTo} type='register' />
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
