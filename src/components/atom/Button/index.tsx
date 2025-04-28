import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, color = '#578FCA', textColor = '#FFFFFF'}) => {
  return (
    <TouchableOpacity style={styles.button(color)} activeOpacity={0.5}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    borderRadius: 8,
    paddingVertical: 9,
    paddingHorizontal: 69,
    width: 321,
    height: 40,
  }),
  label: textColor => ({
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: textColor,
  }),
});
