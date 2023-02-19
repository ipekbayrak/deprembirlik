import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, Modal } from 'react-native';
import { Map, Marker, Overlay } from 'pigeon-maps';
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { AnnouncementBrowse } from './Announcement/AnnouncementBrowse';
import './mapStyle.css';
const CustomMarkerIcon = ({ announcement }) => {
  const color = (announcement.type === 'kayip' && 'blue') ||
  (announcement.type === 'gocuk' && 'red') ||
  (announcement.type === 'erzak' && 'green') ||
  (announcement.type === 'barinma' && 'grey');
  const name = (announcement.type === 'kayip' && 'map-marker-account-outline') ||
  (announcement.type === 'gocuk' && 'map-marker-alert-outline') ||
  (announcement.type === 'erzak' && 'archive-marker-outline') ||
  (announcement.type === 'barinma' && 'home-map-marker');
  return (
    <MaterialCommunityIcons
      name={name}
      size={30}
      color={color}
    />
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

  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const openInfoDialog = (announcement) => {
    setSelectedAnnouncement(announcement);
  };

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
                onClick={() => openInfoDialog(announcement)}
              >
                <CustomMarkerIcon
                  announcement={announcement}
                />

              </Marker>
          ))}
        </Map>
      )}
      {selectedAnnouncement && (
        <Modal
          animationType='slide'
          transparent={false}
          visible={selectedAnnouncement}
          onRequestClose={() => setSelectedAnnouncement(null)}
        >
          <AnnouncementBrowse
            closeModal={() => setSelectedAnnouncement(null)}
            announcement={selectedAnnouncement}
          />
        </Modal>
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
