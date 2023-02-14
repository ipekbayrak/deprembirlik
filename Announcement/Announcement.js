import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { AnnouncementAdd } from './AnnouncementAdd';
import AnnouncementList from './AnnouncementList';
import toastHelper from '../toastHelper';
import { announcementStyles as styles } from '../style';

export const Announcement = ({ navigation, user }) => {
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
        onPress={() => {
          if (user) {
            setModalVisible(true);
            return;
          }
          toastHelper('Duyuru ekleyebilmek için giriş yapmalısınız!', 'error');
          navigation.navigate('Kayıt');
        }}
      >
        <AntDesign name='plus' size={24} color='white' />
      </TouchableOpacity>
      <Modal
        animationType='slide'
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <AnnouncementAdd
          closeModal={() => setModalVisible(false)}
          user={user}
        />
      </Modal>
    </View>
  );
};
