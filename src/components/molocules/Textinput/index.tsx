import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({placeholder, color = '#000000', ...rest}) => {
  return (
    <View>
      <Input placeholder={placeholder} style={styles.input(color)} {...rest} />
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
});
