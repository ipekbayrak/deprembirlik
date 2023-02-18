import React, { useState } from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import GocukComponent from './Type/GocukComponent';
import styles from '../style';
import Kayip from './Type/Kayip';
import Erzak from './Type/Erzak';
import Barinma from './Type/Barinma';
import Ulasim from './Type/Ulasim';
import { Toaster } from 'react-hot-toast';

export const AnnouncementBrowse = ({ announcement, closeModal }) => {
  const selectedCategory = announcement.type;
  const [announcement_, setAnnouncement] = useState(announcement);

  return (
    <>
      <Toaster position='top-center' />
      <ScrollView style={styles.scrollContainer}>
        {(selectedCategory === 'gocuk') && (<GocukComponent noEdit announcement={announcement_} setAnnouncement={setAnnouncement} />)}
        {(selectedCategory === 'kayip') && (<Kayip noEdit announcement={announcement_} setAnnouncement={setAnnouncement} />)}
        {(selectedCategory === 'erzak') && (<Erzak noEdit announcement={announcement_} setAnnouncement={setAnnouncement} />)}
        {(selectedCategory === 'barinma') && (<Barinma noEdit announcement={announcement_} setAnnouncement={setAnnouncement} />)}
        {(selectedCategory === 'ulasim') && (<Ulasim noEdit announcement={announcement_} setAnnouncement={setAnnouncement} />)}
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
