import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molocules/Header';
import {Profileicon} from '../../assets';
import TextInput from '../../components/molocules/Textinput2';
import Gap from '../../components/atom/Gap';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.headerContainer}>
        <Header title="Profile" />
      </View>
      <View style={styles.container}>
        <Profileicon width={110} height={110} />
        <Gap height={30} />
      </View>
      <TextInput placeholder={'Enter your Username'} label={'Username'} />
      <Gap height={20} />
      <TextInput placeholder={'Enter your Username'} label={'Name'} />
      <Gap height={20} />
      <TextInput placeholder={'Enter your Username'} label={'Phone Number'} />
      <Gap height={20} />
      <TextInput placeholder={'Enter your Username'} label={'Address'} />
      <Gap height={20} />
      <TextInput placeholder={'Enter your Username'} label={'Email'} />
      <View></View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerContainer: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
  },
  container: {
    paddingHorizontal: 38,
    paddingTop: 57,
    alignItems: 'center',
  },
});
