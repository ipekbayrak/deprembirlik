import React from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Announcement } from './Announcement/Announcement';

const Tab = createBottomTabNavigator();

const Kayip = 'Kayıp';
const Erzak = 'Erzak';
const Gocuk = 'Göçük';
const Barinma = 'Barınma';
const Ulasim = 'Ulaşım';

const Group1 = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{Kayip}</Text>
    </View>
  );
};

const Group2 = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{Erzak}</Text>
    </View>
  );
};

const Group3 = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{Gocuk}</Text>
    </View>
  );
};

const Group4 = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{Barinma}</Text>
    </View>
  );
};

const Group5 = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{Ulasim}</Text>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Harita' component={Group1} />
      <Tab.Screen name='Liste' component={Announcement} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
