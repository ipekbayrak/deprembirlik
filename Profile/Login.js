import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Platform, StyleSheet } from 'react-native';
import toast from 'react-hot-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../style';

const Login = ({ navigation, setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const redirectRegister = () => {
    navigation.navigate('Kayıt');
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('https://data.mongodb-api.com/app/data-zaqgh/endpoint/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      const data = await response.json();

      if (data.status === true) {
        if (Platform.OS === 'web') {
          toast('Giriş Başarılı!');
        } else {
          Alert.alert('Giriş Başarılı!');
        }
        // Store the login state in AsyncStorage
        await AsyncStorage.setItem('user', JSON.stringify(data));
        setUser(data);
        // Navigate to the Home screen
        navigation.navigate('Ana Sayfa');
      } else {
        if (Platform.OS === 'web') {
          toast.error('Hatalı Giriş!');
        } else {
          Alert.alert('Hatalı Giriş');
        }
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kullanıcı Giriş</Text>
      <TextInput
        style={styles.input}
        placeholder='Email'
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder='Parola'
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text
          style={styles.buttonText}
        >Giriş
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={redirectRegister}>
        <Text style={styles.buttonText}>Kayıtlı değilsen: Kayıt Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
