import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import CategorySelect from './CategorySelect';
import GocukComponent from './Type/GocukComponent';
import styles from '../style';
import Kayip from './Type/Kayip';
import Erzak from './Type/Erzak';
import Barinma from './Type/Barinma';
import Ulasim from './Type/Ulasim';
import toastHelper from '../toastHelper';

export const AnnouncementAdd = ({ closeModal, user, fetchAnnouncements }) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [active, setActive] = useState(false);
  const [announcement, setAnnouncement] = useState({});

  const handleAnnouncement = async () => {
    try {
      const response = await fetch('https://data.mongodb-api.com/app/data-zaqgh/endpoint/announcement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + user.token
        },
        body: JSON.stringify({ announcement })
      });
      const data = await response.json();

      if (data.status === true) {
        toastHelper('Duyuru eklendi!', 'success');
        closeModal();
        fetchAnnouncements();
        // Store the login state in AsyncStorage
        // Navigate to the Home screen
        // navigation.navigate('Ana Sayfa');
      } else {
        toastHelper('Hata!', 'error');
      }
    } catch (error) {
      toastHelper('Çalışma zamanı hatası!', 'error');
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.scrollContainer}>
      <CategorySelect
        setSelectedCategory={setSelectedCategory}
        setActive={setActive}
      />
      {(selectedCategory === 'gocuk') && (<GocukComponent setAnnouncement={setAnnouncement} />)}
      {(selectedCategory === 'kayip') && (<Kayip setAnnouncement={setAnnouncement} />)}
      {(selectedCategory === 'erzak') && (<Erzak setAnnouncement={setAnnouncement} />)}
      {(selectedCategory === 'barinma') && (<Barinma setAnnouncement={setAnnouncement} />)}
      {(selectedCategory === 'ulasim') && (<Ulasim setAnnouncement={setAnnouncement} />)}

      {(active) && (
        <>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => {
              console.log(announcement);
              handleAnnouncement();
            }}
          >
            <Text style={styles.buttonText}>Gönder</Text>
          </TouchableOpacity>

        </>)}
      <TouchableOpacity
        style={styles.saveButton}
        onPress={closeModal}
      >
        <Text style={styles.buttonText}>İptal</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};
