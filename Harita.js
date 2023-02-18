import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Map, Marker } from 'pigeon-maps';
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const CustomMarkerIcon = ({ name, color }) => {
  return (
    <MaterialCommunityIcons name={name} size={65} color={color} />
  );
};

const strLocationToFloatLocation = (strLocation) => {
  return [parseFloat(strLocation[0]), parseFloat(strLocation[1])];
};

const Harita = ({ navigation, announcements }) => {
  const [center, setCenter] = useState([38.957264, 35.3982175]);
  const [zoom, setZoom] = useState(6);
  const color1 = `hsl(${0 % 360}deg 39% 70%)`;
  const color2 = `hsl(${20 % 360}deg 39% 70%)`;
  const color3 = `hsl(${40 % 360}deg 39% 70%)`;
  const color4 = `hsl(${60 % 360}deg 39% 70%)`;

  const openInfoDialog = (announcement) => {};

  const TipOlustur = (tip) => {
    if (tip === 'gocuk') {
      return 'Göçük';
    } else if (tip === 'kayip') {
      return 'Kayıp';
    } else if (tip === 'erzak') {
      return 'Erzak';
    } else if (tip === 'barinma') {
      return 'Barınma';
    } else if (tip === 'ulasim') {
      return 'Ulaşım';
    }
  };

  return (
    <View style={styles.container}>
      {(Platform.OS === 'android' || Platform.OS === 'ios') && <Text>android</Text>}
      {(Platform.OS !== 'android' && Platform.OS !== 'ios') &&
      (
        <Map
          center={center}
          zoom={zoom}
          onBoundsChanged={({ center, zoom }) => {
            setCenter(center);
            setZoom(zoom);
          }}
        >
          {announcements.map((announcement, index) => (
            announcement.location &&
              <Marker
                key={index}
                width={50}
                anchor={strLocationToFloatLocation(announcement.location)}
                payload={index}
                color={
                (announcement.type === 'kayip' && color1) ||
                (announcement.type === 'gocuk' && color2) ||
                (announcement.type === 'erzak' && color3) ||
                (announcement.type === 'barinma' && color4)
              }
                onClick={() => openInfoDialog(announcement)}
              />
          ))}
        </Map>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: '100%'
  },
  input: {
    height: 40,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderColor: '#ccc',
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: '#3f51b5',
    padding: 12,
    alignItems: 'center'
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default Harita;
