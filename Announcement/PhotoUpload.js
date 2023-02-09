import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ImagePicker } from 'react-native';

const PhotoUpload = ({ onImageSelected }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePicker = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
      });

      if (!result.cancelled) {
        setSelectedImage(result.uri);
        onImageSelected(result.uri);
      }
    } catch (error) {
      console.log('Error in image picker: ', error);
    }
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <TouchableOpacity onPress={handleImagePicker}>
        {selectedImage
          ? (
            <Image source={{ uri: selectedImage }} style={{ width: 200, height: 200 }} />
            )
          : (
            <Text>Select a photo</Text>
            )}
      </TouchableOpacity>
    </View>
  );
};

export default PhotoUpload;
