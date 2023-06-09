import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../../components/header';
import Form from '../../components/form';

export default function Suggestion(props) {
  return (
    <View style={styles.container}>
      <Header
        title='Sugestão'
        changeScreenTo={props.changeScreenTo}
        target={0}
      />

      <Form changeScreenTo={props.changeScreenTo} type='suggestion' />
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
