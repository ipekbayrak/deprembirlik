import React, { useState, useEffect } from 'react';
import { Picker, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LocationSelector from '../LocationSelector';
import PhotoUpload from '../PhotoUpload';

const Kayip = ({ closeModal, setAnnouncement }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('kimsesiz');
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  useEffect(() => {
    setAnnouncement({
      name,
      phone,
      title,
      description,
      category: selectedCategory,
      location,
      type: 'kayip'
    });
  }, [name, title, phone, title, description, selectedCategory, location]);

  return (
    <>
      <Text>Başlık:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        onChange={e => handleInputChange(e, setTitle)}
      />

      <Text>Kayıp - Kimsesiz:</Text>
      <Picker
        selectedValue={selectedCategory}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
      >
        <Picker.Item label='Kimsesiz - Ailesi Aranıyor' value='kimsesiz' />
        <Picker.Item label='Kayıp - Kendisi Aranıyor' value='kayip' />
      </Picker>

      <Text>İsim Soyisim:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        onChange={e => handleInputChange(e, setName)}
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

export default Kayip;
