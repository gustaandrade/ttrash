import * as React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default function Input(props) {
  return (
    <View style={styles.container}>
      {props.label && <Text style={styles.label}>{props.label}</Text>}

      <TextInput
        secureTextEntry={props.type == 'password'}
        textContentType={
          props.type == 'email'
            ? 'emailAddress'
            : props.type == 'password'
            ? 'password'
            : 'none'
        }
        keyboardType={props.type == 'email' ? 'email-address' : 'default'}
        placeholder={props.placeholder}
        placeholderTextColor='#ffffff'
        style={[
          styles.input,
          { borderColor: props.error ? '#fc6d47' : '#ffffff' }
        ]}
      />

      <Text style={styles.textError}>{props.error && props.error.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 1
  },
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingLeft: 15,
    fontSize: 18,
    color: '#ffffff',
    minWidth: '80%'
  },
  label: {
    paddingVertical: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  placeholder: {
    color: '#ffffff'
  },
  textError: {
    color: '#fc6d47',
    fontSize: 14
  }
});
