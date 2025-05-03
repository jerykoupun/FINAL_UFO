import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Gap from '../../components/atom/Gap';
import {Organisasifoto, Galery1, Galery2, Vocs} from '../../assets';
import Header from '../../components/molocules/Header';

const Organization = () => {
  const [selectedOrganization, setSelectedOrganization] = useState('UVICS');

  const organizations = {
    UVICS: {
      title: 'UVICS',
      description:
        'This organization serves as a platform for students to grow and contribute through educational, collaborative, and technology-driven activities.',
      visionMission:
        'Fostering student growth through tech-driven, collaborative initiatives for campus and community impact.',
      image: <Organisasifoto width={312} height={180} />,
      gallery: [
        {image: <Galery1 width={264} height={168} />, date: 'April 2025'},
        {image: <Galery2 width={264} height={168} />, date: 'April 2025'},
      ],
    },
    VOCS: {
      title: 'VOCS',
      description:
        'VOCS is a choir under the Faculty of Computer Science at Universitas Klabat. It aims to develop students musical talents, especially in choir, and strengthen relationships through art and collaboration.',
      visionMission:
        'To sing for the glory of God, fostering unity and spiritual growth through music and collaboration.',
      image: <Vocs width={312} height={180} />,
      gallery: [
        {image: <Galery1 width={264} height={168} />, date: 'March 2025'},
        {image: <Galery2 width={264} height={168} />, date: 'March 2025'},
      ],
    },
  };

  const selectedData = organizations[selectedOrganization];

  return (
    <View style={styles.page}>
      <Header title="Organization" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.menu}>
          {Object.keys(organizations).map(org => {
            const isActive = selectedOrganization === org;
            return (
              <TouchableOpacity
                key={org}
                style={[styles.menuButton, isActive && styles.menuButtonActive]}
                onPress={() => setSelectedOrganization(org)}>
                <Text
                  style={[
                    styles.menuButtonText,
                    isActive && styles.menuButtonTextActive,
                  ]}>
                  {org}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Gap height={27} />
        {selectedData.image}
        <Gap height={25} />
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{selectedData.title}</Text>
          <Text style={styles.cardDescription}>{selectedData.description}</Text>
        </View>
        <Gap height={22} />
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Vision and Mission</Text>
          <Text style={styles.cardDescription}>
            {selectedData.visionMission}
          </Text>
        </View>
        <Gap height={22} />
        <View style={styles.galleryCard}>
          <Text style={styles.cardTitle2}>Gallery</Text>
          {selectedData.gallery.map((item, index) => (
            <View key={index}>
              {item.image}
              <Text style={styles.galleryDate}>{item.date}</Text>
            </View>
          ))}
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
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 14,
    marginBottom: 27,
    height: 42,
  },
  menuButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
  },
  menuButtonActive: {
    backgroundColor: '#578FCA',
  },
  menuButtonText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },
  menuButtonTextActive: {
    color: '#FFF',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 8,
    elevation: 10,
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
