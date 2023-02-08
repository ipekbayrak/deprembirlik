import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';

const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const Group1 = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>null</Text>
    </View>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Genel'>
        <Drawer.Screen name='Ana Sayfa' component={HomeScreen} />
        {isLoggedIn
          ? (
            <Drawer.Screen name='Profil' component={Group1} />
            )
          : (
            <Drawer.Screen name='Giriş' component={Group1} />
            )}
        <Drawer.Screen name='Hakkında' component={Group1} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
