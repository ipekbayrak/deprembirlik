import React, { useState, useEffect } from 'react';
import { Picker, Text, TextInput } from 'react-native';
import LocationSelector from '../LocationSelector';
import PhotoUpload from '../PhotoUpload';
import styles from '../../style';

const Kayip = ({ setAnnouncement, announcement, noEdit }) => {
  const [title, setTitle] = useState(announcement ? announcement.title : '');
  const [description, setDescription] = useState(announcement ? announcement.description : '');
  const [selectedCategory, setSelectedCategory] = useState(announcement ? announcement.category : 'kimsesiz');
  const [location, setLocation] = useState(announcement ? announcement.location : [38.895, 35.452]);
  const [name, setName] = useState(announcement ? announcement.name : '');
  const [phone, setPhone] = useState(announcement ? announcement.phone : '');

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  useEffect(() => {
    setAnnouncement({
      ...announcement,
      name,
      phone,
      title,
      description,
      category: selectedCategory,
      location,
      type: 'kayip'
    });
  }, [name, title, phone, title, description, selectedCategory, location]);

  const valueToPicker = (value) => {
    switch (value) {
      case 'kimsesiz':
        return 'Kimsesiz - Ailesi Aranıyor';
      case 'kayip':
        return 'Kayıp - Kendisi Aranıyor';
      default:
        return 'Kimsesiz - Ailesi Aranıyor';
    }
  };

  return (
    <>
      <Text>Başlık:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        onChange={e => handleInputChange(e, setTitle)}
        editable={!noEdit}
        value={title}
      />

      <Text>Kayıp - Kimsesiz:</Text>
      {
      noEdit === true
        ? (<Text style={styles}>{valueToPicker(selectedCategory)}</Text>)
        : (
          <Picker
            selectedValue={selectedCategory}
            style={{ height: 50, width: '100%' }}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          >
            <Picker.Item label='Kimsesiz - Ailesi Aranıyor' value='kimsesiz' />
            <Picker.Item label='Kayıp - Kendisi Aranıyor' value='kayip' />
          </Picker>
          )
      }

      <Text>İsim Soyisim:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        onChange={e => handleInputChange(e, setName)}
        editable={!noEdit}
        value={name}
      />

      {/* <Text>Fotoğraf:</Text> <PhotoUpload /> */}

      <Text>İrtibat Telefon Numarası:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        onChange={e => handleInputChange(e, setPhone)}
        editable={!noEdit}
        value={phone}
      />

      <Text>Açıklama:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        onChange={e => handleInputChange(e, setDescription)}
        editable={!noEdit}
        value={description}
      />

      <LocationSelector location={location} noEdit={noEdit} setLocation={setLocation} />

    </>
  );
};

export default Kayip;
