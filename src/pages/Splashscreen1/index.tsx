import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../../assets';
import Button from '../../components/atom/Button';

const Splashscreen1 = () => {
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

export default Splashscreen1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
