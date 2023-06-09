import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Splash from './src/screens/splash';
import Login from './src/screens/login';
import Register from './src/screens/register';
import Home from './src/screens/home';
import Profile from './src/screens/profile';
import Points from './src/screens/points';
import Suggestion from './src/screens/suggestion';
import Place from './src/screens/place';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(-1);

  return (
    <View style={styles.container}>
      {currentScreen == -1 && <Splash changeScreenTo={setCurrentScreen} />}
      {currentScreen == 0 && <Home changeScreenTo={setCurrentScreen} />}
      {currentScreen == 1 && <Login changeScreenTo={setCurrentScreen} />}
      {currentScreen == 2 && <Register changeScreenTo={setCurrentScreen} />}
      {currentScreen == 3 && <Profile changeScreenTo={setCurrentScreen} />}
      {currentScreen == 4 && <Points changeScreenTo={setCurrentScreen} />}
      {currentScreen == 5 && <Suggestion changeScreenTo={setCurrentScreen} />}
      {currentScreen == 6 && <Place changeScreenTo={setCurrentScreen} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
