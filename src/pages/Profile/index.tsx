import React from 'react';
import {StyleSheet, View} from 'react-native';
import Gap from '../../components/atom/Gap';
import {Profileicon} from '../../assets';
import Header from '../../components/molocules/Header';
import TextInput from '../../components/molocules/Textinput2';

const Profile = () => {
  return (
    <View style={styles.page}>
      <Header title="Profile" />

      <View style={styles.container}>
        <View style={styles.avatarWrapper}>
          <Profileicon width={110} height={110} />
        </View>
        <TextInput label="Username" placeholder="Enter your username" />
        <Gap height={20} />
        <TextInput label="Phone Number" placeholder="Enter your phone number" />
        <Gap height={20} />
        <TextInput label="Email" placeholder="Enter your Email" />
        <Gap height={20} />
        <TextInput label="Address" placeholder="Enter your address" />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    paddingTop: 57,
    alignItems: 'center',
    paddingHorizontal: 39,
    backgroundColor: '#FFF',
  },
  avatarWrapper: {
    alignItems: 'center',
    marginBottom: 30,
  },
});
