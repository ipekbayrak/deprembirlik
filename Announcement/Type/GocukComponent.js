import React, { useEffect, useState } from 'react';
import { Picker, Text, TextInput } from 'react-native';
import LocationSelector from '../LocationSelector';
import styles from '../../style';

const GocukComponent = ({ setAnnouncement, announcement, noEdit }) => {
  const [title, setTitle] = useState(announcement ? announcement.title : '');
  const [description, setDescription] = useState(announcement ? announcement.description : '');
  const [selectedCategory, setSelectedCategory] = useState(announcement ? announcement.category : 'guncel');
  const x = (announcement && announcement.location) ? parseFloat(announcement.location[0]) : 38.895;
  const y = (announcement && announcement.location) ? parseFloat(announcement.location[1]) : 35.452;
  const [location, setLocation] = useState([x, y]);  const [phone, setPhone] = useState(announcement ? announcement.phone : '');

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  useEffect(() => {
    setAnnouncement({
      ...announcement,
      phone,
      title,
      description,
      category: selectedCategory,
      location,
      type: 'gocuk'
    });
  }, [title, phone, title, description, selectedCategory, location]);

  const valueToPicker = (value) => {
    switch (value) {
      case 'guncel':
        return 'Güncel';
      case 'ekip':
        return 'Ekip Geldi';
      case 'cikarildi':
        return 'Çıkarıldı';
      case 'iptal':
        return 'İptal';
      default:
        return 'Güncel';
    }
  };

  return (
    <>
      <Text>Başlık:</Text>
      <TextInput
        value={title}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        onChange={e => handleInputChange(e, setTitle)}
        editable={!noEdit}
      />

      <Text>Durum</Text>
      {
      noEdit === true
        ? (<Text style={styles.textInputStyle}>{valueToPicker(selectedCategory)}</Text>)
        : (
          <Picker
            selectedValue={selectedCategory}
            style={{ height: 50, width: '100%' }}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          >
            <Picker.Item label='Güncel' value='guncel' />
            <Picker.Item label='Ekip Geldi' value='ekip' />
            <Picker.Item label='Çıkarıldı' value='cikarildi' />
            <Picker.Item label='İptal' value='iptal' />
          </Picker>
          )
        }

      <Text>İrtibat Telefon Numarası:</Text>
      <TextInput
        value={phone}
        editable={!noEdit}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        onChange={e => handleInputChange(e, setPhone)}
      />

      <Text>Açıklama:</Text>
      <TextInput
        value={description}
        editable={!noEdit}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        onChange={e => handleInputChange(e, setDescription)}
      />

      <LocationSelector
        location={location}
        noEdit={noEdit}
        setLocation={setLocation}
      />

    </>
  );
};

export default GocukComponent;
