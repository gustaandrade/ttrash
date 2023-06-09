import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import Identity from '../../components/identity';
import Frame from './frame';
import Button from '../../components/button';

import splash1 from '../../../assets/splash1.png';
import splash2 from '../../../assets/splash2.png';
import splash3 from '../../../assets/splash3.png';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Screen = props => (
  <View style={{ flex: 1, backgroundColor: props.color, width: '100%' }}>
    <Text>{props.text}</Text>
  </View>
);

export default function Splash(props) {
  const SCREENS = [
    <Frame
      image={splash1}
      title='Procurar'
      description='Procure por pontos de coleta de lixo eletrônico na sua região'
    />,
    <Frame
      image={splash2}
      title='Separar'
      description='Separe os componentes eletrônicos de acordo com suas características'
    />,
    <Frame
      image={splash3}
      title='Levar'
      description='Leve os componentes até o ponto de coleta e receba bônus de empresas parceiras'
    />
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <View style={styles.container}>
      <Identity title='TECH TRASH' />

      <Carousel
        data={SCREENS}
        renderItem={({ item }) => item}
        onSnapToItem={i => setActiveTab(i)}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={SCREEN_WIDTH}
        slideStyle={{ width: SCREEN_WIDTH }}
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        disableIntervalMomentum
      />

      <View>
        <Pagination
          dotsLength={SCREENS.length}
          containerStyle={{ backgroundColor: '#033D6A' }}
          dotStyle={styles.ww}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          activeDotIndex={activeTab}
        />
      </View>

      <View style={styles.buttonArea}>
        <Button text='Entrar' onPress={() => props.changeScreenTo(1)} />
      </View>
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
  tabsContainer: {
    flexDirection: 'row',
    height: 50,
    paddingTop: 0,
    paddingBottom: 0
  },
  ww: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
    backgroundColor: '#ffffff'
  },
  buttonArea: {
    width: '100%',
    padding: 32
  }
});
