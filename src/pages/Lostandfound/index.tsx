import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native';
import Gap from '../../components/atom/Gap';
import Header from '../../components/molocules/Header';
import {Fullscreenicon, Tasbulat, Tas, Kacamata} from '../../assets';
import Button from '../../components/atom/Button';

const Lostandfound = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Lost and Found" />
      <View style={styles.Latest}>
        <Text style={styles.sectionTitle}>Lost and Found</Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.Latest2}>
          <Text style={styles.sectionTitle2}>Lost</Text>
        </View>
        <View style={styles.card}>
          <Tasbulat width={190} height={182} />
          <Gap height={12} />
          <Text style={styles.eventTitle}>Tas Bulat</Text>
          <Gap height={3} />
          <Text style={styles.eventDate}>Today</Text>
          <Gap height={11} />
          <View style={styles.cardFooter}>
            <Fullscreenicon width={16} height={20} />
          </View>
        </View>
        <Gap height={24} />
        <View style={styles.card}>
          <Tas width={190} height={182} />
          <Gap height={12} />
          <Text style={styles.eventTitle}>Tas</Text>
          <Gap height={3} />
          <Text style={styles.eventDate}>Today</Text>
          <Gap height={11} />
          <View style={styles.cardFooter}>
            <Fullscreenicon width={16} height={20} />
          </View>
        </View>
        <Gap height={24} />
        <View style={styles.Latest2}>
          <Text style={styles.sectionTitle2}>Found</Text>
        </View>
        <View style={styles.card}>
          <Kacamata width={190} height={182} />
          <Gap height={12} />
          <Text style={styles.eventTitle}>Kacamata</Text>
          <Gap height={3} />
          <Text style={styles.eventDate}>Today</Text>
          <Gap height={11} />
          <View style={styles.cardFooter}>
            <View style={styles.footerLeft}>
              <Text style={styles.footerText}>Unclaimed</Text>
            </View>
            <Fullscreenicon width={16} height={20} />
          </View>
        </View>
        <Gap height={50} />
        <Button
          label="Report Lost Item"
          color="#578FCA"
          onPress={() => navigation.navigate('Lostreport')}
        />
        <Gap height={13} />
        <Button
          label="Report Found Item"
          color="#4AC8F9"
          onPress={() => navigation.navigate('Foundreport')}
        />
      </ScrollView>
    </View>
  );
};

export default Lostandfound;

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
  sectionTitle2: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginBottom: 16,
    color: '#000000',
  },
  Latest: {
    paddingLeft: 38,
    marginTop: 57,
  },
  Latest2: {
    paddingRight: 250,
    paddingTop: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 10,
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
    paddingHorizontal: 8,
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Poppins-Medium',
    paddingRight: 180,
  },
});
