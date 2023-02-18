import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { announcementList as styles } from '../style';
import { AnnouncementBrowse } from './AnnouncementBrowse';
import { AnnouncementEdit } from './AnnouncementEdit';

const AnnouncementList = ({ announcements, loading, user, fetchAnnouncements }) => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

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

  const timeAgo = (utcTime) => {
    const date = new Date(utcTime);
    const now = new Date();
    const diff = (now.getTime() - date.getTime()) / 1000;

    if (diff < 60) {
      return `${Math.floor(diff)} saniye${diff < 2 ? '' : 's'} önce`;
    } else if (diff < 3600) {
      const minutes = Math.floor(diff / 60);
      return `${minutes} dakika${minutes < 2 ? '' : 's'} önce`;
    } else if (diff < 86400) {
      const hours = Math.floor(diff / 3600);
      return `${hours} saat${hours < 2 ? '' : 's'} önce`;
    } else if (diff < 604800) {
      const days = Math.floor(diff / 86400);
      return `${days} gün${days < 2 ? '' : 's'} önce`;
    } else if (diff < 2592000) {
      const weeks = Math.floor(diff / 604800);
      return `${weeks} hafta${weeks < 2 ? '' : 's'} önce`;
    } else if (diff < 31536000) {
      const months = Math.floor(diff / 2592000);
      return `${months} ay${months < 2 ? '' : 's'} önce`;
    } else {
      const years = Math.floor(diff / 31536000);
      return `${years} yıl${years < 2 ? '' : 's'} önce`;
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <ScrollView style={styles.scrollContainer}>
        {announcements.map((announcement, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemContainer}
            onPress={() => {
              /* add function for tap effect here */
              setSelectedAnnouncement(announcement);
              setModalVisible(true);
            }}
          >
            {announcement.thumbnail && (
              <Image source={{ uri: announcement.thumbnail }} style={styles.thumbnail} />
            )}
            <View style={styles.textContainer}>
              <View style={styles.detailsContainer}>
                <Text style={styles.type}>{TipOlustur(announcement.type)}</Text>
              </View>
              <Text style={styles.title}>{announcement.title}</Text>
              <Text style={styles.description}>{announcement.description}</Text>
              <View style={styles.detailsContainer}>
                <Text style={styles.time}>{announcement.time}</Text>
                {announcement.status === 'passed' && (
                  <Text style={styles.passed}>Passed</Text>
                )}
                {announcement.status === 'cancelled' && (
                  <Text style={styles.cancelled}>Cancelled</Text>
                )}
                {announcement.status === 'waiting' && (
                  <Text style={styles.waiting}>Waiting</Text>
                )}
              </View>
              <View style={styles.detailsContainer}>
                <Text>Tip: {announcement.category}</Text>
              </View>
              <View style={styles.rightAlign}>
                <Text>{announcement.username}</Text>
              </View>
              <View style={styles.rightAlign}>
                <Text>{announcement.date && timeAgo(announcement.date)}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {selectedAnnouncement && (!user || (selectedAnnouncement.username !== user.username)) && (
        <Modal
          animationType='slide'
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <AnnouncementBrowse
            closeModal={() => setModalVisible(false)}
            fetchAnnouncements={fetchAnnouncements}
            announcement={selectedAnnouncement}
            user={user}
          />
        </Modal>
      )}
      {selectedAnnouncement && user && (selectedAnnouncement.username === user.username) && (
        <Modal
          animationType='slide'
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <AnnouncementEdit
            closeModal={() => setModalVisible(false)}
            fetchAnnouncements={fetchAnnouncements}
            announcement={selectedAnnouncement}
            user={user}
          />
        </Modal>
      )}
    </>
  );
};

export default AnnouncementList;
