import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../../assets';
import Header from '../../components/molocules/Header';

const Splashscreen1 = () => {
  return (
    <View style={styles.container}>
      <Logo width={132} height={118} />
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
    paddingVertical: 239,
  },
});
