import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform, Switch } from 'react-native';
import { Map, Marker } from 'pigeon-maps';

const LocationSelector = ({ location, setLocation, noEdit }) => {
  const [center, setCenter] = useState(location);
  const [zoom, setZoom] = useState(11);
  const [enable, setEnable] = useState(!!location);
  const [tmpHarita, setTmpHarita] = useState([38.895, 35.452]);

  useEffect(() => {
    if (Platform.OS === 'web') {
      if (navigator.geolocation && !noEdit && !location) {
        navigator.geolocation.getCurrentPosition(
          position => {
            setCenter([position.coords.latitude.toString(), position.coords.longitude.toString()]);
            setLocation && setLocation([position.coords.latitude.toString(), position.coords.longitude.toString()]);
            setZoom(15);
          },
          error => console.error(error),
          { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
      }
    }
  }, []);

  const handleSwitchToggle = () => {
    if (enable) {
      setTmpHarita(center);
    } else {
      setCenter(tmpHarita);
      setLocation && setLocation(tmpHarita);
    }
    setEnable(!enable);
    setLocation && setLocation(null);
  };

  return (
    <View style={styles.container}>
      <Text>Harita</Text>
      {!noEdit &&
        <Switch
          style2={styles.text}
          value={enable}
          onValueChange={handleSwitchToggle}
          disabled={noEdit}
        />}
      {
      enable &&
        <>
          <Text>Konum: {center[0]} - {center[1]} </Text>
          {(Platform.OS === 'android' || Platform.OS === 'ios') && <Text>android</Text>}
          {(Platform.OS !== 'android' && Platform.OS !== 'ios') &&
      (
        <>
          <Map
            height={300}
            center={center}
            zoom={zoom}
            onBoundsChanged={({ center, zoom }) => {
              !noEdit && setCenter(center);
              setLocation && setLocation([center[0].toString(), center[1].toString()]);
              setZoom(zoom);
            }}
          >
            <Marker width={50} anchor={center} />
          </Map>
        </>
      )}
        </>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    width: '100%',
    height: '80%'
  }
});

const styles2 = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  text: {
    flex: 1,
    marginRight: 10
  }
});

export default LocationSelector;
