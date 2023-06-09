import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Button from '../button';

export default function Header(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.changeScreenTo(props.target)}>
        <Text style={styles.buttonTitle}>{'<'}</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'space-between',
    justifyContent: 'flex-start',
    backgroundColor: '#033D6A',
    width: '100%',
    maxHeight: 100,
    padding: 24,
    marginTop: 24,
    marginBottom: 48
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 60,
    textAlign: 'center',
    marginRight: 24
  }
});
