import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Map, Marker } from 'pigeon-maps';

const Harita = ({ navigation }) => {
  const [center, setCenter] = useState([38.957264, 35.3982175]);
  const [zoom, setZoom] = useState(6);

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
          <Marker width={50} anchor={center} />
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
