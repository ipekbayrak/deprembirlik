import React, { useState } from 'react';
import { View, Text, Picker } from 'react-native';

const CategorySelect = () => {
  const [selectedValue, setSelectedValue] = useState('kayıp');

  return (
    <View>
      <Text>Kategori Seçin:</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label='Kayıp' value='kayıp' />
        <Picker.Item label='Erzak' value='erzak' />
        <Picker.Item label='Göçük' value='göçük' />
        <Picker.Item label='Barınma' value='barınma' />
        <Picker.Item label='Ulaşım' value='ulaşım' />
      </Picker>
    </View>
  );
};

export default CategorySelect;
