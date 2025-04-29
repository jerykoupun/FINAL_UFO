import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import Gap from '../../components/atom/Gap';
import Header from '../../components/molocules/Header';
import {Profileicon, Fullscreenicon, Image1, Image2} from '../../assets';

const Announcement = () => {
  return (
    <View style={styles.page}>
      <Header title="Announcement" />
      <View style={styles.Latest}>
        <Text style={styles.sectionTitle}>Latest Announcement</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Image1 width={190} height={182} />
          <Gap height={12} />
          <Text style={styles.eventTitle}>Kspm Day</Text>
          <Gap height={3} />
          <Text style={styles.eventDate}>Today</Text>
          <Gap height={11} />
          <View style={styles.cardFooter}>
            <View style={styles.footerLeft}>
              <Profileicon width={31} height={31} />
              <Text style={styles.footerText}>KSPM</Text>
            </View>
            <Fullscreenicon width={16} height={20} />
          </View>
        </View>
        <Gap height={24} />
        <View style={styles.card}>
          <Image2 width={190} height={182} />
          <Gap height={12} />
          <Text style={styles.eventTitle}>Proxo Coris</Text>
          <Gap height={3} />
          <Text style={styles.eventDate}>Today</Text>
          <Gap height={11} />
          <View style={styles.cardFooter}>
            <View style={styles.footerLeft}>
              <Profileicon width={31} height={31} />
              <Text style={styles.footerText}>UVICS</Text>
            </View>
            <Fullscreenicon width={16} height={20} />
          </View>
        </View>
        <Gap height={24} />
        <View style={styles.card}>
          <Image2 width={190} height={182} />
          <Gap height={12} />
          <Text style={styles.eventTitle}>Exhibition</Text>
          <Gap height={3} />
          <Text style={styles.eventDate}>Today</Text>
          <Gap height={11} />
          <View style={styles.cardFooter}>
            <View style={styles.footerLeft}>
              <Profileicon width={31} height={31} />
              <Text style={styles.footerText}>UVICS</Text>
            </View>
            <Fullscreenicon width={16} height={20} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Announcement;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    paddingHorizontal: 38,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginBottom: 16,
    color: '#000000',
  },
  Latest: {
    paddingLeft: 38,
    marginTop: 57,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 5,
    padding: 16,
    shadowColor: '#3674B5',
    marginHorizontal: 10,
    alignItems: 'center',
    width: 318,
    height: 326,
  },
  eventTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
  },
  eventDate: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#000000',
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    paddingRight: 180,
  },
});
