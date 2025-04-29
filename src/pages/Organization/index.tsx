import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import Gap from '../../components/atom/Gap';
import {Organisasifoto, Galery1, Galery2} from '../../assets';
import Header from '../../components/molocules/Header';

const Organization = () => {
  return (
    <View style={styles.page}>
      <Header title="Organization" />
      <ScrollView contentContainerStyle={styles.container}>
        <Organisasifoto width={318} height={180} />
        <Gap height={25} />
        <View style={styles.card}>
          <Text style={styles.cardTitle}>UVICS</Text>
          <Text style={styles.cardDescription}>
            This organization serves as a platform for students to grow and
            contribute through educational, collaborative, and technology-driven
            activities.
          </Text>
        </View>
        <Gap height={22} />
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Vision and Mission</Text>
          <Text style={styles.cardDescription}>
            Fostering student growth through tech-driven, collaborative
            initiatives for campus and community impact.
          </Text>
        </View>
        <Gap height={22} />
        <View style={styles.galleryCard}>
          <Text style={styles.cardTitle2}>Gallery</Text>
          <Galery1 width={264} height={168} />
          <Text style={styles.galleryDate}>April 2025</Text>
          <Galery2 width={264} height={168} />
          <Text style={styles.galleryDate}>April 2025</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Organization;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    paddingHorizontal: 38,
    paddingTop: 57,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#3674B5',
    width: 316,
    height: 200,
  },
  cardTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginBottom: 12,
    color: '#000000',
  },
  cardTitle2: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginBottom: 25,
    color: '#000000',
    paddingRight: 222,
  },
  cardDescription: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Poppins-Light',
  },
  galleryCard: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    elevation: 5,
    marginBottom: 20,
    shadowColor: '#3674B5',
    width: 316,
    height: 505,
    alignItems: 'center',
  },
  galleryDate: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 25,
    color: '#000000',
    fontFamily: 'Poppins-Light',
  },
});
