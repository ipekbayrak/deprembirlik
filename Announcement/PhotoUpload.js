import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Platform } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const PhotoUpload = () => {
  const [image, setImage] = useState(null);
  const [option, setOption] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const webFileSelectedHandler = event => {
    setSelectedFile(event.target.files[0]);

    if (event.target.files && event.target.files[0]) {
      const reader = new window.FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleOptionChange = (value) => {
    setOption(value);
  };

  const handleImagePicker = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImage(response);
      }
    });
  };

  return (
    <View>
      <Text>Select Option:</Text>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 5,
          borderColor: '#ccc',
          padding: 5
        }}
      >
        <TouchableOpacity
          onPress={() => {
            handleOptionChange('Choose from Library');
          }}
        >
          <Text>Kütüphaneden Seç</Text>
        </TouchableOpacity>
      </View>
      {Platform.OS === 'web'
        ? (
          <>
            <input type='file' onChange={webFileSelectedHandler} />
            {selectedFile && <img
              src={image} style={{
                maxHeight: 200,
                objectFit: 'contain'
              }}
                             />}
          </>
          )
        : (
          <>
            <TouchableOpacity onPress={handleImagePicker}>
              <Text>{option || 'Select Image'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleOptionChange('Take Photo');
              }}
            >
              <Text>Fotoğraf Çek</Text>
            </TouchableOpacity>
            {image && <Image source={{ uri: image.uri }} />}
          </>
          )}
    </View>
  );
};

export default PhotoUpload;
