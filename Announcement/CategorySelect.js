import React, { useState } from 'react';
import { View, Text, Picker } from 'react-native';

const CategorySelect = ({ setSelectedCategory, setActive }) => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View>
      <Text>Kategori Seçin:</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue(itemValue);
          setSelectedCategory(itemValue);
          if (itemValue === 'kayip') {
            setActive(true);
          }
          if (itemValue === 'erzak') {
            setActive(true);
          }
          if (itemValue === 'gocuk') {
            setActive(true);
          }
          if (itemValue === 'barinma') {
            setActive(true);
          }
          if (itemValue === 'ulasim') {
            setActive(false);
          }
          if (itemValue === '') {
            setActive(false);
          }
        }}
      >
        <Picker.Item label='' value='' />
        <Picker.Item label='Kayıp' value='kayip' />
        <Picker.Item label='Erzak' value='erzak' />
        <Picker.Item label='Göçük' value='gocuk' />
        <Picker.Item label='Barınma' value='barinma' />
        <Picker.Item label='Ulaşım' value='ulasim' />
      </Picker>
    </View>
  );
};

export default CategorySelect;
