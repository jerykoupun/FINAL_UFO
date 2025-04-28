import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native';
import React from 'react';

import {
  Logo,
  Organizationicon,
  Announcementicon,
  Profileicon,
  Lostandfounicon,
  Fullscreenicon,
} from '../../assets';

const Dashboard = () => {
  return (
    <ScrollView style={styles.page}>
      <View style={styles.topBar}>
        <Logo width={40} height={40} />
        <Profileicon width={30} height={30} />
      </View>
      <Text style={styles.welcomeText}>Hi, Jery Koupun</Text>
      <View style={styles.menuContainer}>
        <View style={styles.menuItem}>
          <Organizationicon width={40} height={40} />
          <Text style={styles.menuLabel}>Organization</Text>
        </View>
        <View style={styles.menuItem}>
          <Announcementicon width={40} height={40} />
          <Text style={styles.menuLabel}>Announcement</Text>
        </View>
        <View style={styles.menuItem}>
          <Lostandfounicon width={40} height={40} />
          <Text style={styles.menuLabel}>Lost and Found</Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Latest Announcement</Text>
      <View style={styles.card}>
        <Text style={styles.eventTitle}>Filkom Day</Text>
        <Text style={styles.eventDate}>Today</Text>
        <View style={styles.cardFooter}>
          <View style={styles.footerLeft}>
            <Profileicon width={18} height={18} />
            <Text style={styles.footerText}>FILKOM</Text>
          </View>
          <Fullscreenicon width={18} height={18} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuLabel: {
    marginTop: 8,
    fontSize: 12,
    color: '#000',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 3,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 30,
  },
  eventImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 12,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000',
  },
  eventDate: {
    fontSize: 12,
    color: '#666',
    marginBottom: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    marginLeft: 8,
    fontSize: 12,
    color: '#000',
    fontWeight: '500',
  },
});
