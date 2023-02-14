import React from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Announcement } from './Announcement/Announcement';
import Harita from './Harita';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation, user, setAnaSayfa }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Harita') {
            iconName = focused ? 'ios-map' : 'ios-map-outline';
          } else if (route.name === 'Liste') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      }}
    >
      <Tab.Screen
        name='Harita'
        component={Harita}
        options={{
          headerShown: false
        }}
        onClick={() => { setAnaSayfa('Harita'); }}
      />
      <Tab.Screen
        name='Liste'
        component={props => <Announcement {...props} user={user} />}
        options={{
          headerShown: false
        }}
        onClick={() => { setAnaSayfa('Liste'); }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
