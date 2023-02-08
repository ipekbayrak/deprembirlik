import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AnnouncementList = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch('https://data.mongodb-api.com/app/data-zaqgh/endpoint/get');
        const data = await response.json();
        setAnnouncements(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAnnouncements();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <View>
      {announcements.map((announcement, index) => (
        <View key={index} style={styles.itemContainer}>
          {announcement.thumbnail && (
            <Image source={{ uri: announcement.thumbnail }} style={styles.thumbnail} />
          )}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{announcement.title}</Text>
            <Text style={styles.description}>{announcement.description}</Text>
            <View style={styles.detailsContainer}>
              <Text style={styles.time}>{announcement.time}</Text>
              {announcement.status === 'passed' && (
                <Text style={styles.passed}>Passed</Text>
              )}
              {announcement.status === 'cancelled' && (
                <Text style={styles.cancelled}>Cancelled</Text>
              )}
              {announcement.status === 'waiting' && (
                <Text style={styles.waiting}>Waiting</Text>
              )}
            </View>
            <View style={styles.detailsContainer}>
              <Text>Category: {announcement.category}</Text>
              <Text>Location: {announcement.location}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    marginVertical: 10
  },
  thumbnail: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10
  },
  textContainer: {
    flex: 1,
    marginLeft: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  description: {
    fontSize: 16,
    marginVertical: 5
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  time: {
    fontSize: 16
  },
  passed: {
    fontSize: 16,
    color: 'green'
  },
  cancelled: {
    fontSize: 16,
    color: 'red'
  },
  waiting: {
    fontSize: 16,
    color: 'orange'
  }
});

export default AnnouncementList;
