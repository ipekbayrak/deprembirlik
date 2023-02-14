import React, { useState } from 'react';
import { Picker, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LocationSelector from './LocationSelector';
import PhotoUpload from './PhotoUpload';

const Barinma = ({ closeModal, setAnnouncement }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('kayıp');
  const [aranan, setAranan] = useState('kendi');

  return (
    <>
      <Text>Başlık:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
      />

      <Text>Organizasyon - Şahsi:</Text>
      <Picker
        selectedValue={aranan}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue) => setAranan(itemValue)}
      >
        <Picker.Item label='Organizasyon' value='organizasyon' />
        <Picker.Item label='Şahsi' value='sahsi' />
      </Picker>

      <Text>Kapasite:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
      />

      {/* <Text>Fotoğraf:</Text> <PhotoUpload /> */}

      <Text>İrtibat Telefon Numarası:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
      />

      <Text>Açıklama:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
      />

      <LocationSelector />

    </>
  );
};

export default Barinma;
