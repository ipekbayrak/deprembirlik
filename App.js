import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from './HomeScreen';
import Login from './Profile/Login';
import Register from './Profile/Register';
import Profil from './Profile/Profile';
import { Toaster } from 'react-hot-toast';

import Hakkinda from './Hakkinda';
const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);
  const [anaSayfa, setAnaSayfa] = useState('Ana Sayfa');

  useEffect(() => {
    const fetchIsLoggedIn = async () => {
      try {
        const value = await AsyncStorage.getItem('user') || null;
        if (value !== null) {
          setUser(JSON.parse(value));
        }
      } catch (error) {
        console.error('Error fetching isLoggedIn from AsyncStorage: ', error);
      }
    };
    fetchIsLoggedIn();
  }, []);

  return (
    <>
      <StatusBar style='auto' />
      <Toaster
        position='bottom-center'
      />
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Genel'>
          <Drawer.Screen
            name={anaSayfa}
            component={props => <HomeScreen {...props} user={user} setAnaSayfa={setAnaSayfa} />}
            options={{
              drawerIcon: ({ focused, color, size }) => (
                <AntDesign name='home' size={size} color={color} />
              )
            }}
          />
          {user
            ? (
              <Drawer.Screen
                name='Profil'
                component={props => <Profil {...props} setUser={setUser} />}
                options={{
                  drawerIcon: ({ focused, color, size }) => (
                    <MaterialCommunityIcons name='account' size={size} color={color} />
                  )
                }}
              />
              )
            : (
              <>
                <Drawer.Screen
                  name='Giriş'
                  component={props => <Login {...props} setUser={setUser} />}
                  options={{
                    drawerIcon: ({ focused, color, size }) => (
                      <MaterialIcons name='person' size={size} color={color} />
                    )
                  }}
                />
                <Drawer.Screen
                  name='Kayıt'
                  component={props => <Register {...props} setUser={setUser} />}
                  options={{
                    drawerIcon: ({ focused, color, size }) => (
                      <MaterialIcons name='person-add' size={size} color={color} />
                    )
                  }}
                />
              </>
              )}
          <Drawer.Screen
            name='Hakkında'
            component={Hakkinda}
            options={{
              drawerIcon: ({ focused, color, size }) => (
                <MaterialIcons name='info' size={size} color={color} />
              )
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
