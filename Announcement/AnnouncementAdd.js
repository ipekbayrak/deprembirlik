import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import CategorySelect from './CategorySelect';
import LocationSelector from './LocationSelector';

export const AnnouncementAdd = ({ closeModal }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // Add the announcement to the list and navigate back to the announcement list page
    // ...

  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Title:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
      />

      <Text>Image:</Text>
      {/* Upload Image component */}

      <Text>Contact Phone Number:</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
      />

      <Text>Location:</Text>
      <LocationSelector />
      <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
      />
      <CategorySelect />

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

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  input: {
    height: 40,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderColor: '#ccc',
    borderWidth: 1
  },
  submitButton: {
    backgroundColor: '#3f51b5',
    padding: 12,
    alignItems: 'center'
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});
