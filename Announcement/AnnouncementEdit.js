import React, { useState } from 'react';
import { Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import GocukComponent from './Type/GocukComponent';
import styles from '../style';
import Kayip from './Type/Kayip';
import Erzak from './Type/Erzak';
import Barinma from './Type/Barinma';
import Ulasim from './Type/Ulasim';
import toastHelper from '../toastHelper';
import { Toaster } from 'react-hot-toast';

export const AnnouncementEdit = ({ announcement, closeModal, user, fetchAnnouncements }) => {
  const selectedCategory = announcement.type;
  const [announcement_, setAnnouncement] = useState(announcement);

  const handleAnnouncement = async (del) => {
    try {
      const response = await fetch('https://data.mongodb-api.com/app/data-zaqgh/endpoint/announcement', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + user.token
        },
        body: JSON.stringify({ announcement: { ...announcement_, deleted: del === true ? true : undefined } })
      });
      const data = await response.json();
      const error = data && data.message;
      if (data.status === true) {
        toastHelper('Duyuru düzenlendi!', 'success');
        closeModal();
        fetchAnnouncements();
      } else {
        toastHelper('Hata! ' + error, 'error');
      }
    } catch (error) {
      toastHelper('Çalışma zamanı hatası!', 'error');
      console.error(error);
    }
  };

  return (
    <>
      <Toaster position='top-center' />
      <ScrollView style={styles.scrollContainer}>
        {(selectedCategory === 'gocuk') && (<GocukComponent announcement={announcement_} setAnnouncement={setAnnouncement} />)}
        {(selectedCategory === 'kayip') && (<Kayip announcement={announcement_} setAnnouncement={setAnnouncement} />)}
        {(selectedCategory === 'erzak') && (<Erzak announcement={announcement_} setAnnouncement={setAnnouncement} />)}
        {(selectedCategory === 'barinma') && (<Barinma announcement={announcement_} setAnnouncement={setAnnouncement} />)}
        {(selectedCategory === 'ulasim') && (<Ulasim announcement={announcement_} setAnnouncement={setAnnouncement} />)}

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => {
            handleAnnouncement(true);
          }}
        >
          <Text style={styles.buttonText}>Sil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {
            console.log(announcement_);
            handleAnnouncement();
          }}
        >
          <Text style={styles.buttonText}>Düzenle</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.saveButton}
          onPress={closeModal}
        >
          <Text style={styles.buttonText}>Kapat</Text>
        </TouchableOpacity>

      </ScrollView>
    </>
  );
};
