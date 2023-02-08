import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { AnnouncementAdd } from './AnnouncementAdd';
import AnnouncementList from './AnnouncementList';

export const Announcement = ({ navigation }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: 'Announcement 1', description: 'This is the first announcement' },
    { id: 2, title: 'Announcement 2', description: 'This is the second announcement' }
  ]);

  return (
    <View style={styles.container}>
      <AnnouncementList
        announcements={announcements}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <AntDesign name='plus' size={24} color='white' />
      </TouchableOpacity>
      <Modal
        animationType='slide'
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <AnnouncementAdd closeModal={() => setModalVisible(false)} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  announcementContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    marginTop: 8
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#3f51b5',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
