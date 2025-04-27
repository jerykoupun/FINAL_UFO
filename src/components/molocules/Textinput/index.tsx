import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({placeholder, color = '#8D92A3'}) => {
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
    borderColor: '#020202',
    borderRadius: 8,
    padding: 10,
    color: color,
    width: 321,
    height: 40,
  }),
});
