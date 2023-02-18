import React, { useState, useEffect } from 'react';
import { Picker, Text, TextInput } from 'react-native';
import LocationSelector from '../LocationSelector';
import PhotoUpload from '../PhotoUpload';
import styles from '../../style';

const Barinma = ({ setAnnouncement, announcement, noEdit }) => {
  const [title, setTitle] = useState(announcement ? announcement.title : '');
  const [description, setDescription] = useState(announcement ? announcement.description : '');
  const [selectedCategory, setSelectedCategory] = useState(announcement ? announcement.category : 'organizasyon');
  const [location, setLocation] = useState(announcement ? announcement.location : [38.895, 35.452]);
  const [phone, setPhone] = useState(announcement ? announcement.phone : '');
  const [capacity, setCapacity] = useState(announcement ? announcement.capacity : '');

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const valueToPicker = (value) => {
    switch (value) {
      case 'organizasyon':
        return 'Organizasyon';
      case 'sahsi':
        return 'Şahsi';
      default:
        return 'Organizasyon';
    }
  };

  useEffect(() => {
    setAnnouncement({
      ...announcement,
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
        value={title}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        onChange={e => handleInputChange(e, setTitle)}
        editable={!noEdit}
      />

      <Text>Organizasyon - Şahsi:</Text>
      {
      noEdit === true
        ? (<Text style={styles.textInputStyle}>{valueToPicker(selectedCategory)}</Text>)
        : (
          <Picker
            selectedValue={selectedCategory}
            style={{ height: 50, width: '100%' }}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          >
            <Picker.Item label='Organizasyon' value='organizasyon' />
            <Picker.Item label='Şahsi' value='sahsi' />
          </Picker>
          )
        }

      <Text>Kapasite:</Text>
      <TextInput
        value={capacity}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        onChange={e => handleInputChange(e, setCapacity)}
        editable={!noEdit}
      />

      {/* <Text>Fotoğraf:</Text> <PhotoUpload /> */}

      <Text>İrtibat Telefon Numarası:</Text>
      <TextInput
        value={phone}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        onChange={e => handleInputChange(e, setPhone)}
        editable={!noEdit}
      />

      <Text>Açıklama:</Text>
      <TextInput
        value={description}
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        onChange={e => handleInputChange(e, setDescription)}
        editable={!noEdit}
      />

      <LocationSelector location={location} noEdit={noEdit} setLocation={setLocation} />

    </>
  );
};

export default Barinma;
