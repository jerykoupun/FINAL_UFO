import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../../assets';
import TextInput from '../../components/molocules/Textinput';
import Button from '../../components/atom/Button';
import Gap from '../../components/atom/Gap';

const SignIn = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Logo width={132} height={118} />
        <Gap height={28} />
        <Text style={styles.title}>Welcome Back!</Text>
        <Gap height={28} />
        <TextInput placeholder="Enter your Email Address" />
        <Gap height={28} />
        <TextInput placeholder="Enter your Password" />
        <Gap height={11} />
        <Text style={styles.titlebutton}>Forget Your Password?</Text>
        <Gap height={11} />
        <Button label="Sign In" />
        <Gap height={11} />
        <Text style={styles.titlebutton}>Don't have an account?</Text>
        <Gap height={11} />
        <Button label="Create New Account" color="#B9B6B6" />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 150,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
  },
  titlebutton: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    paddingLeft: 150,
  },
});
