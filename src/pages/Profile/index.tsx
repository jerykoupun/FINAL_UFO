import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
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
        <Gap height={20} />
        <TextInput label="Name" placeholder="Enter your name" />
        <TextInput label="Email" placeholder="Enter your email" />
        <TextInput label="Phone Number" placeholder="Enter your phone number" />
        <TextInput label="Address" placeholder="Enter your address" />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          secureTextEntry={true}
        />
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
    paddingTop: 20,
    paddingHorizontal: 24,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
});
