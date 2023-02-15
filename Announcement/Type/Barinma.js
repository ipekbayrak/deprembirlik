import React, { useState, useEffect } from 'react';
import { Picker, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LocationSelector from '../LocationSelector';
import PhotoUpload from '../PhotoUpload';

const Barinma = ({ closeModal, setAnnouncement }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('organizasyon');
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [phone, setPhone] = useState('');
  const [capacity, setCapacity] = useState('');

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
      capacity,
      type: 'barinma'
    });
  }, [title, phone, title, description, selectedCategory, location, capacity]);

  return (
    <>
      <Text>Başlık:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        onChange={e => handleInputChange(e, setTitle)}
      />

      <Text>Organizasyon - Şahsi:</Text>
      <Picker
        selectedValue={selectedCategory}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
      >
        <Picker.Item label='Organizasyon' value='organizasyon' />
        <Picker.Item label='Şahsi' value='sahsi' />
      </Picker>

      <Text>Kapasite:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        onChange={e => handleInputChange(e, setCapacity)}
      />

      {/* <Text>Fotoğraf:</Text> <PhotoUpload /> */}

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

export default Barinma;
