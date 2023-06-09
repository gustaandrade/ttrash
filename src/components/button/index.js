import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
  return (
    <Pressable style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#009CFF'
  },
  text: {
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.25,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});
