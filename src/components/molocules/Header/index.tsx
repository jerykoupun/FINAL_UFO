import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder, color = '#8D92A3'}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input placeholder={placeholder} style={styles.input(color)} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 6,
    color: '#020202',
  },
  input: color => ({
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 10,
    color: color,
  }),
});
