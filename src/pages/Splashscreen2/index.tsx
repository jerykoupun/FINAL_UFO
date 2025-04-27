import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../../assets';
import Gap from '../../components/atom/Gap';

const Splashscreen2 = () => {
  return (
    <View style={styles.container}>
      <Logo width={132} height={118} />
      <View style={styles.name}>
        <Text style={styles.title}>UFO</Text>
        <Gap height={6} />
        <Text style={styles.subtitle}>Unklab Forum Organization</Text>
      </View>
    </View>
  );
};

export default Splashscreen2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 239,
  },
  title: {
    fontSize: 16,
    fontFamily: 'poppins',
    fontWeight: 'bold',
    color: '#020202',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 209,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-regular',
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
  },
});
