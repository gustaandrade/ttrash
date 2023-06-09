import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../../components/header';
import Form from '../../components/form';

export default function Points(props) {
  return (
    <View style={styles.container}>
      <Header title='Pontos' changeScreenTo={props.changeScreenTo} target={3} />

      <Form changeScreenTo={props.changeScreenTo} type='points' />
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
