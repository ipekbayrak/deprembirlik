import React, { useState } from 'react';
import { Picker, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LocationSelector from './LocationSelector';
import PhotoUpload from './PhotoUpload';

const Kayip = ({ closeModal, setAnnouncement }) => {
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

      <Text>Kayıp - Kimsesiz:</Text>
      <Picker
        selectedValue={aranan}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue) => setAranan(itemValue)}
      >
        <Picker.Item label='Kimsesiz - Ailesi Aranıyor' value='kimsesiz' />
        <Picker.Item label='Kayıp - Kendisi Aranıyor' value='kayip' />
      </Picker>

      <Text>İsim Soyisim:</Text>
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

export default Kayip;
