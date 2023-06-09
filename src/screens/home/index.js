import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import UserAvatar from 'react-native-user-avatar';

import Input from '../../components/input';

export default function Home(props) {
  const MARKERS = [
    {
      latlng: {
        latitude: -23.5505,
        longitude: -46.6333
      },
      title: 'Edifício Ramos',
      description: 'Avenida Almeida, 258 - São Paulo, SP - 03001-034'
    },
    {
      latlng: {
        latitude: -23.5605,
        longitude: -46.6233
      },
      title: 'Coworking Céu',
      description: 'Avenida Ramos de Carcará, 2276 - São Paulo, SP - 03201-114'
    },
    {
      latlng: {
        latitude: -23.5105,
        longitude: -46.6933
      },
      title: 'Shopping Plaza',
      description: 'Rua Alabaste, 25 - São Paulo, SP - 02301-123'
    },
    {
      latlng: {
        latitude: -23.5405,
        longitude: -46.6413
      },
      title: 'Supermercado Batista',
      description: 'Rua das Camélias, 133 - São Paulo, SP - 01101-013'
    },
    {
      latlng: {
        latitude: -23.5065,
        longitude: -46.6433
      },
      title: 'Escola de Arte Macadâmia',
      description: 'Avenida Santos Dumont, 11 - São Paulo, SP - 04002-098'
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.changeScreenTo(3)}
        >
          <UserAvatar size={50} name='John Doe' />
        </TouchableOpacity>

        <Input placeholder='Buscar localização' type='none' />
      </View>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.5505,
          longitude: -46.6333,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation
        showsMyLocationButton
        showsCompass
        showsScale
        zoomControlEnabled
        zoomEnabled
        zoomTapEnabled
      >
        {MARKERS.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
            onCalloutPress={() => props.changeScreenTo(6)}
          />
        ))}
      </MapView>

      <Text style={styles.description}>
        Não encontrou um ponto próximo a você?{'\n'}
        <Text
          style={styles.descriptionUrl}
          onPress={() => props.changeScreenTo(5)}
        >
          Sugira o seu local pra gente!
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#033D6A',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
    height: 100,
    padding: 20,
    marginTop: 40
  },
  map: {
    width: '90%',
    height: '75%'
  },
  description: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    padding: 12
  },
  descriptionUrl: {
    color: '#009CFF',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
});
