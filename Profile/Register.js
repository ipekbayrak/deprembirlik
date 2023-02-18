import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Platform } from 'react-native';
import toast from 'react-hot-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../style';
const Register = ({ navigation, setUser }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const successMessage = () => {
    Alert.alert(
      'Success',
      'Your account has been successfully created!',
      [
        {
          text: 'OK',
          onPress: () => { /* Do something on press */ }
        }
      ],
      { cancelable: false }
    );
  };

  const failureMessage = (msg) => {
    Alert.alert(
      'Fail',
      msg,
      [
        {
          text: 'OK',
          onPress: () => { /* Do something on press */ }
        }
      ],
      { cancelable: true }
    );
  };

  const validate = () => {
    if (!username || !email || !password || !confirmPassword) {
      setErrorMessage('Please fill out all the fields.');
      return false;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return false;
    }
    setErrorMessage(null);
    return true;
  };

  const redirectLogin = () => {
    navigation.navigate('Giriş');
  };

  const handleRegister = async () => {
    if (!validate()) {
      return;
    }
    try {
      const response = await fetch('https://data.mongodb-api.com/app/data-zaqgh/endpoint/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          email,
          password
        })
      });
      const data = await response.json();
      const error = data && data.message;
      if (data.status === true) {
        if (Platform.OS === 'web') {
          toast('Kullanıcı kaydı başarılı');
        } else {
          Alert.alert('Kullanıcı kaydı başarılı');
        }
        // Store the login state in AsyncStorage
        const user = { username, email, password };
        await AsyncStorage.setItem('user', JSON.stringify({ ...user, ...data }));
        setUser({ ...user, ...data });
        // Navigate to the Home screen
        navigation.navigate('Ana Sayfa');
      } else {
        if (Platform.OS === 'web') {
          toast.error('Hata! ' + error);
        } else {
          Alert.alert('Hata! ' + error);
        }
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.');
      console.error(error);
      if (Platform.OS === 'web') {
        toast.error('Hata! ' + error.message);
      } else {
        Alert.alert('Hata! ' + error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kullanıcı Kayıt</Text>
      <TextInput
        style={styles.input}
        placeholder='Kullanıcı Adı'
        onChangeText={text => setUsername(text)}
        value={username}
      />
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
      <TextInput
        style={styles.input}
        placeholder='Parola Tekrar'
        secureTextEntry
        onChangeText={text => setConfirmPassword(text)}
        value={confirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Kayıt</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={redirectLogin}>
        <Text style={styles.buttonText}>Zaten Kayıtlıysan: Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;
