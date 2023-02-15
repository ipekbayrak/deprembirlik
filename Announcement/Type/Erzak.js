import React, { useState, useEffect } from 'react';
import { Picker, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LocationSelector from '../LocationSelector';
import PhotoUpload from '../PhotoUpload';

const Erzak = ({ closeModal, setAnnouncement }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('organizasyon');
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [phone, setPhone] = useState('');

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  useEffect(() => {
    setAnnouncement({
      phone,
      title,
      description,
      category: selectedCategory,
      location,
      type: 'erzak'
    });
  }, [title, phone, description, selectedCategory, location]);

  return (
    <>
      <Text>Başlık:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        onChange={e => handleInputChange(e, setTitle)}
      />

      <Text>Talep - Arz:</Text>
      <Picker
        selectedValue={selectedCategory}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
      >
        <Picker.Item label='Talep - İhtiyaç Kaydı' value='talep' />
        <Picker.Item label='Arz - Bağış Kaydı' value='arz' />
      </Picker>

      <Text>İrtibat Telefon Numarası:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        onChange={e => handleInputChange(e, setPhone)}
      />

      <Text>Açıklama:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        onChange={e => handleInputChange(e, setDescription)}
      />

      <LocationSelector setLocation={setLocation} />

    </>
  );
};

export default Erzak;
