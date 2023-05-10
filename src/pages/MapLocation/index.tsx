import React from 'react';
import {
  Animated,
  PanResponder,
  StyleSheet,
  Dimensions,
  Platform,
  PermissionsAndroid,
} from 'react-native';

const {height} = Dimensions.get('window');
const BOTTOM_SHEET_MAX_HEIGHT = height * 0.6;
const BOTTOM_SHEET_MIN_HEIGHT = height * 0.1;
const MAXIMUM_DRAG_DISTANCE = BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT;
const MAXIMUM_DOWNWARD_TRANSLATE_Y = 0;

import {
  IconContent,
  BackButton as Button,
  Container,
  IconContainer,
  OngTitle,
  OngContainer,
  OngImg,
  OngTitleContent,
  OngInfoText,
  OngInfo,
  OngDistanceContent,
  OngDistanceText,
  ContentMarker,
  Balon,
  ImgOng,
} from './styles';

import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {THEME} from '../../theme';

import Geolocation from '@react-native-community/geolocation';
import {BackButton} from '../../components/Buttons/BackButton';

import outStockOng from '../../../assets/outStockOng.png';
import NovaEsperanca from '../../../assets/NovaEsperanca.png';
import AmigodaVez from '../../../assets/AmigodaVez.png';

import {useNavigation, useRoute} from '@react-navigation/native';
import {AppNavigationProps} from '../../routes';

import Icon from 'react-native-vector-icons/FontAwesome5';

interface MyParams {
  showModal: boolean;
}

const MapLocation: React.FC = () => {
  const route = useRoute();
  const myFeedBack = (route.params as MyParams)?.showModal;
  const [showModal, setShowModal] = React.useState(myFeedBack);

  const [region, setRegion] = React.useState<
    | {
        latitude: number;
        longitude: number;
        latitudeDelta: number;
        longitudeDelta: number;
      }
    | undefined
  >(undefined);

  const navigation = useNavigation<AppNavigationProps>();

  React.useEffect(() => {
    getMyLocation();
  }, []);

  const getMyLocation = () => {
    Geolocation.getCurrentPosition(
      info => {
        setRegion({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        });
      },
      error => console.log(error),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  const OngList = [
    {
      name: 'Família Solidária',
      foto: outStockOng,
      subnome: 'Prefeitura de Mogi das Cruzes',
      distance: '1,5 km',
    },
    {
      name: 'Semear',
      foto: AmigodaVez,
      subnome: 'Organização pela vida e saúde',
      distance: '2,5 km',
    },
    {
      name: 'Nova esperança',
      foto: NovaEsperanca,
      subnome: 'Associção Missão Resgate',
      distance: '3,5 km',
    },
  ];

  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const lastGestureDy = React.useRef(0);
  const DRAG_THRESHOLD = 50;
  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animatedValue.setOffset(lastGestureDy.current);
      },
      onPanResponderMove: (e, gesture) => {
        animatedValue.setValue(gesture.dy);
      },
      onPanResponderRelease: (e, gesture) => {
        animatedValue.flattenOffset();
        lastGestureDy.current += gesture.dy;
        if (lastGestureDy.current < MAXIMUM_DRAG_DISTANCE) {
          lastGestureDy.current = MAXIMUM_DOWNWARD_TRANSLATE_Y;
        } else if (lastGestureDy.current > MAXIMUM_DRAG_DISTANCE) {
          lastGestureDy.current = MAXIMUM_DRAG_DISTANCE;
        }

        if (gesture.dy > 0) {
          if (gesture.dy <= DRAG_THRESHOLD) {
            springAnimation('up');
          } else {
            springAnimation('down');
          }
        } else {
          if (gesture.dy >= -DRAG_THRESHOLD) {
            springAnimation('down');
          } else {
            springAnimation('up');
          }
        }
      },
    }),
  ).current;

  const springAnimation = (direction: 'up' | 'down') => {
    lastGestureDy.current =
      direction === 'down'
        ? MAXIMUM_DOWNWARD_TRANSLATE_Y
        : MAXIMUM_DRAG_DISTANCE;
    Animated.spring(animatedValue, {
      toValue: lastGestureDy.current,
      useNativeDriver: true,
    }).start();
  };

  const bottomSheetAnimation = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [MAXIMUM_DRAG_DISTANCE, MAXIMUM_DOWNWARD_TRANSLATE_Y],
          outputRange: [MAXIMUM_DRAG_DISTANCE, MAXIMUM_DOWNWARD_TRANSLATE_Y],
          extrapolate: 'clamp',
        }),
      },
    ],
  };

  const handleGoBack = () => {
    setShowModal(false);
    navigation.navigate('Home');
  };

  return (
    <Container>
      {showModal ? (
        <Button>
          <BackButton onPress={() => handleGoBack()} />
        </Button>
      ) : null}
      <MapView
        initialRegion={{
          latitude: -8.053770345997485,
          longitude: -34.893403117188974,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
        onMapReady={() => {
          Platform.OS === 'android'
            ? PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              ).then(() => {
                console.log('Aceito');
              })
            : '';
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        provider={PROVIDER_GOOGLE}
        region={region}
        zoomEnabled={true}
        showsUserLocation={true}
        loadingEnabled={true}>
        <Marker
          coordinate={{
            latitude: -8.053023149984211,
            longitude: -34.890650834686696,
          }}>
          <ContentMarker>
            <Balon>
              <ImgOng source={outStockOng} />
              <Icon name="caret-down" size={18} color="red" />
            </Balon>
          </ContentMarker>
        </Marker>

        <Marker
          coordinate={{
            latitude: -8.05762042573195,
            longitude: -34.88924190239979,
          }}>
          <ContentMarker>
            <Balon>
              <ImgOng source={AmigodaVez} />
              <Icon name="caret-down" size={18} color="red" />
            </Balon>
          </ContentMarker>
        </Marker>

        <Marker
          coordinate={{
            latitude: -8.049872133053935,
            longitude: -34.89715306555255,
          }}>
          <ContentMarker>
            <Balon>
              <ImgOng source={NovaEsperanca} />
              <Icon name="caret-down" size={18} color="red" />
            </Balon>
          </ContentMarker>
        </Marker>
      </MapView>
      {showModal ? (
        <Animated.View style={[styles.bottomSheet, bottomSheetAnimation]}>
          <IconContainer {...panResponder.panHandlers}>
            <IconContent />
          </IconContainer>
          <OngTitle>ONGs mais próximas</OngTitle>
          {OngList.map(item => (
            <OngContainer activeOpacity={1}>
              <OngImg source={item.foto} />
              <OngInfo>
                <OngTitleContent>{item.name}</OngTitleContent>
                <OngInfoText>{item.subnome}</OngInfoText>
              </OngInfo>
              <OngDistanceContent>
                <OngDistanceText>{item.distance}</OngDistanceText>
              </OngDistanceContent>
            </OngContainer>
          ))}
        </Animated.View>
      ) : null}
    </Container>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    width: '100%',
    height: BOTTOM_SHEET_MAX_HEIGHT,
    position: 'absolute',
    bottom: BOTTOM_SHEET_MIN_HEIGHT - BOTTOM_SHEET_MAX_HEIGHT,

    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowColor: '#a8bed2',
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
    backgroundColor: THEME.colors.white,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    alignItems: 'center',
  },
});

export {MapLocation};
