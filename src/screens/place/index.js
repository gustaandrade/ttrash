import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../../components/header';
import Form from '../../components/form';

export default function Place(props) {
  return (
    <View style={styles.container}>
      <Header
        title='Local de coleta'
        changeScreenTo={props.changeScreenTo}
        target={0}
      />

      <Form changeScreenTo={props.changeScreenTo} type='place' />
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
