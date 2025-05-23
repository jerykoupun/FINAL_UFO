import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Gap from '../../components/atom/Gap';
import {getDatabase, ref, onValue} from 'firebase/database';
import {Null_Photo} from '../../assets';

import {
  Logo,
  Organizationicon,
  Announcementicon,
  Profileicon,
  Lostandfounicon,
  Fullscreenicon,
  Image1,
  Image2,
} from '../../assets';

const Dashboard = ({navigation, route}) => {
  const {uid, username: initialUsername, email: initialEmail} = route.params;
  const [username, setUsername] = useState(initialUsername);
  const [email, setEmail] = useState(initialEmail);
  const [photo, setPhoto] = useState(Null_Photo);

  useEffect(() => {
    const db = getDatabase();
    const userRef = ref(db, 'users/' + uid);
    onValue(userRef, snapshot => {
      const data = snapshot.val();
      setUsername(data.username);
      setEmail(data.email);
      if (data.photo) {
        setPhoto({uri: data.photo});
      }
    });
  }, [uid]);

  return (
    <View style={styles.page}>
      <View style={styles.topBar}>
        <Logo width={34} height={32} />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Profile', {
              uid: uid,
              username: username,
              email: email,
            })
          }>
          <Image source={photo} style={styles.profil} />
        </TouchableOpacity>
      </View>
      <Text style={styles.welcomeText}>{`Hi, ${username}`}</Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Organization')}>
          <Organizationicon width={38} height={38} />
          <Gap height={3} />
          <Text style={styles.menuLabel}>Organization</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Announcement')}>
          <Announcementicon width={32} height={38} />
          <Gap height={3} />
          <Text style={styles.menuLabel}>Announcement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Lostandfound')}>
          <Lostandfounicon width={38} height={38} />
          <Gap height={3} />
          <Text style={styles.menuLabel}>Lost and Found</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Latest Announcement</Text>
      <ScrollView>
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
        <Gap height={17} />
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
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    marginTop: 45,
    paddingLeft: 10,
    color: '#000000',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 57,
    marginBottom: 37,
  },
  menuItem: {
    alignItems: 'center',
    paddingHorizontal: 66,
  },
  menuLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
    color: '#000000',
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginBottom: 16,
    color: '#000000',
    paddingLeft: 10,
    marginBottom: 26,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    elevation: 12,
    padding: 16,
    shadowColor: '#3674B5',
    marginBottom: 30,
    marginHorizontal: 10,
    alignItems: 'center',
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
  profil: {
    width: 31,
    height: 31,
    borderRadius: 15.5,
  },
});
