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

  const TipOlustur = (tip) => {
    if (tip === 'gocuk') {
      return 'Göçük';
    } else if (tip === 'kayip') {
      return 'Kayıp';
    } else if (tip === 'erzak') {
      return 'Erzak';
    } else if (tip === 'barinma') {
      return 'Barınma';
    } else if (tip === 'ulasim') {
      return 'Ulaşım';
    }
  };

  return (
    <View style={styles.textContainer}>
      {announcements.map((announcement, index) => (
        <View key={index} style={styles.itemContainer}>
          {announcement.thumbnail && (
            <Image source={{ uri: announcement.thumbnail }} style={styles.thumbnail} />
          )}
          <View style={styles.textContainer}>
            <View style={styles.detailsContainer}>
              <Text style={styles.type}>{TipOlustur(announcement.type)}</Text>
            </View>
            <Text style={styles.title}>{announcement.title}</Text>
            <Text style={styles.description}>Açıklama: {announcement.description}</Text>
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
              <Text>Durum: {announcement.category}</Text>
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
    marginVertical: 10,
    justifyContent: 'flex-start',
    backgroundColor: 'aliceblue',
    borderRadius: 10,
    width: '100%',
    height: 'auto'
  },
  thumbnail: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
    justifyContent: 'flex-start'

  },
  textContainer: {
    justifyContent: 'flex-start',
    flex: 1,
    width: '100%',
    height: 'auto',
    padding: '15px'
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
    justifyContent: 'flex-start'
  },
  type: {
    fontStyle: 'italic',
    fontSize: '0.8em'
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
