import React from 'react';
import { View, TouchableOpacity, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { AnnouncementAdd } from './AnnouncementAdd';
import AnnouncementList from './AnnouncementList';
import toastHelper from '../toastHelper';
import { announcementStyles as styles } from '../style';

export const Announcement = ({ navigation, user, announcements, fetchAnnouncements, loading }) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <AnnouncementList
        announcements={announcements}
        loading={loading}
        user={user}
        fetchAnnouncements={fetchAnnouncements}
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
          fetchAnnouncements={fetchAnnouncements}
          user={user}
        />
      </Modal>
    </View>
  );
};
