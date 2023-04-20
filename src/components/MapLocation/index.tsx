import React from 'react';

import {Container} from './styles';

import MapView, {Marker} from 'react-native-maps';

import Geolocation from '@react-native-community/geolocation';

const MapLocation: React.FC = () => {
  return (
    <Container>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </Container>
  );
};

export {MapLocation};
