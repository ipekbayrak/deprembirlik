import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CategorySelect from './CategorySelect';
import GocukComponent from './GocukComponent';

export const AnnouncementAdd = ({ closeModal }) => {
  const [selectedCategory, setSelectedCategory] = useState('gocuk');

  return (
    <View style={{ padding: 20 }}>
      <CategorySelect setSelectedCategory={setSelectedCategory} />
      {(selectedCategory === 'gocuk') && (<GocukComponent />)}
      <TouchableOpacity
        style={{
          backgroundColor: '#3f51b5',
          padding: 12,
          alignItems: 'center',
          marginTop: 20
        }}
        onPress={closeModal}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Gönder</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#3f51b5',
          padding: 12,
          alignItems: 'center',
          marginTop: 20
        }}
        onPress={closeModal}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Close</Text>
      </TouchableOpacity>
    </View>
  );
};
