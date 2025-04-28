import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ArrowBack} from '../../../assets';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <ArrowBack width={24} height={15} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 10,
    paddingHorizontal: 16,
    height: 60,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    paddingLeft: 93,
  },
});
