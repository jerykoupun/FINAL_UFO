import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ArrowBack} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const Header = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <ArrowBack width={24} height={15} />
      </TouchableOpacity>
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
