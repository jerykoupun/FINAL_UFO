import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molocules/Header';
import {Logo} from '../../assets';
import TextInput from '../../components/molocules/Textinput';
import Button from '../../components/atom/Button';
import Gap from '../../components/atom/Gap';

const SignUp = () => {
  return (
    <View style={styles.page}>
      <Header title="Sign Up" />
      <View style={styles.container}>
        <Logo width={132} height={118} />
        <Gap height={28} />
        <Text style={styles.title}>Let's Get Started!</Text>
        <Gap height={28} />
        <TextInput placeholder="Enter your Username" />
        <Gap height={28} />
        <TextInput placeholder="Enter your Email" />
        <Gap height={28} />
        <TextInput placeholder="Enter your Password" />
        <Gap height={28} />
        <Button label="Sign Up" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 91,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
  },
});
