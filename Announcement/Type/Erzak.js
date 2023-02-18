import React, { useState, useEffect } from 'react';
import { Picker, Text, TextInput } from 'react-native';
import LocationSelector from '../LocationSelector';
import PhotoUpload from '../PhotoUpload';
import styles from '../../style';

const Erzak = ({ setAnnouncement, announcement, noEdit }) => {
  const [title, setTitle] = useState(announcement ? announcement.title : '');
  const [description, setDescription] = useState(announcement ? announcement.description : '');
  const [selectedCategory, setSelectedCategory] = useState(announcement ? announcement.category : 'talep');
  const x = (announcement && announcement.location) ? parseFloat(announcement.location[0]) : 0;
  const y = (announcement && announcement.location) ? parseFloat(announcement.location[1]) : 0;
  let xy = [x, y];
  if (x === 0 && y === 0) {
    xy = null;
  }
  const [location, setLocation] = useState(xy);
  const [phone, setPhone] = useState(announcement ? announcement.phone : '');

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const valueToPicker = (value) => {
    switch (value) {
      case 'talep':
        return 'Talep - İhtiyaç Kaydı';
      case 'arz':
        return 'Arz - Bağış Kaydı';
      default:
        return 'Talep - İhtiyaç Kaydı';
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
      type: 'erzak'
    });
  }, [title, phone, description, selectedCategory, location]);

  return (
    <>
      <Text>Başlık:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        onChange={e => handleInputChange(e, setTitle)}
        editable={!noEdit}
        value={title}
      />

      <Text>Talep - Arz:</Text>
      {
      noEdit === true
        ? (<Text style={styles.textInputStyle}>{valueToPicker(selectedCategory)}</Text>)
        : (
          <Picker
            selectedValue={selectedCategory}
            style={{ height: 50, width: '100%' }}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          >
            <Picker.Item label='Talep - İhtiyaç Kaydı' value='talep' />
            <Picker.Item label='Arz - Bağış Kaydı' value='arz' />
          </Picker>
          )
      }

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

export default Erzak;
