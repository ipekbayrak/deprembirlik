import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../style';

const Profile = ({ setUser }) => {
  const [userData, setUserData] = useState({});

  const useUser = async () => {
    const user = await AsyncStorage.getItem('user') || null;
    if (user !== null) {
      setUserData(JSON.parse(user));
    }
  };

  useEffect(() => {
    useUser();
  }, [userData]);

  const logoutUser = async () => {
    // Remove user data from local storage or AsyncStorage
    // ...
    await AsyncStorage.removeItem('user');
    setUser(null);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: userData.avatar }}
      />
      <Text style={styles.username}>{userData.username}</Text>
      <Text style={styles.email}>{userData.email}</Text>
      <TouchableOpacity onPress={() => logoutUser()} style={styles.button}>
        <Text style={styles.buttonText}>Kullanıcı Çıkış</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
