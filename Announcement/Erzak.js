import React, { useState } from 'react';
import { Picker, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LocationSelector from './LocationSelector';
import PhotoUpload from './PhotoUpload';

const Erzak = ({ closeModal, setAnnouncement}) => {
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

      <Text>Talep - Arz:</Text>
      <Picker
        selectedValue={aranan}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue) => setAranan(itemValue)}
      >
        <Picker.Item label='Talep - İhtiyaç Kaydı' value='talep' />
        <Picker.Item label='Arz - Bağış Kaydı' value='arz' />
      </Picker>

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

export default Erzak;
