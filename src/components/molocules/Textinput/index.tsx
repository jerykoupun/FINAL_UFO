import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({placeholder, color = '#B9B6B6'}) => {
  return (
    <View>
      <Input placeholder={placeholder} style={styles.input(color)} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: color => ({
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    paddingLeft: 20,
    paddingVertical: 5,
    fontFamily: 'Poppins-Reguler',
    fontSize: 16,
    color: color,
    width: 321,
    height: 40,
  }),
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
  },
});
