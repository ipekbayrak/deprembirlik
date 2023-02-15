import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Announcement } from './Announcement/Announcement';
import Harita from './Harita';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation, user, setAnaSayfa }) => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAnnouncements = async () => {
    try {
      setLoading(false);
      const response = await fetch('https://data.mongodb-api.com/app/data-zaqgh/endpoint/get');
      const data = await response.json();
      setAnnouncements(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const HaritaComponent = props => {
    return (<Harita {...props} user={user} announcements={announcements} loading={loading} fetchAnnouncements={fetchAnnouncements} />);
  };

  const AnnouncementComponent = props => {
    return (<Announcement {...props} user={user} announcements={announcements} loading={loading} fetchAnnouncements={fetchAnnouncements} />);
  };

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
        component={HaritaComponent}
        options={{
          headerShown: false
        }}
        onClick={() => { setAnaSayfa('Harita'); }}
      />
      <Tab.Screen
        name='Liste'
        component={AnnouncementComponent}
        options={{
          headerShown: false
        }}
        onClick={() => { setAnaSayfa('Liste'); }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
