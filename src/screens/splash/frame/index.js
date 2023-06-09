import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';

export default function Frame(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.image} alt={props.title} />

      <Text style={styles.description}>{props.description}</Text>
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
    width: 128,
    height: 128
  },
  description: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    padding: 36
  }
});
