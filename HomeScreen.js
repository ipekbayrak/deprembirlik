import React from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Announcement } from './Announcement/Announcement';
import Harita from './Harita';

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Harita' component={Harita} />
      <Tab.Screen name='Liste' component={Announcement} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
