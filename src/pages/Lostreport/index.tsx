import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Gap from '../../components/atom/Gap';
import Button from '../../components/atom/Button';
import Header from '../../components/molocules/Header';
import TextInput from '../../components/molocules/Textinput2';

const ReportLostItem = () => {
  return (
    <View style={styles.page}>
      <Header title="Report Lost Item" />
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput label="Item Name" placeholder="Input Item Name" />
        <Gap height={20} />
        <TextInput label="Lost Location" placeholder="Enter Lost Location" />
        <Gap height={20} />
        <TextInput label="Lost Time" placeholder="Enter Lost Time" />
        <Gap height={20} />
        <TextInput label="Your Number" placeholder="Enter your phone number" />
        <Gap height={20} />
        <Text style={styles.uploadLabel}>Upload Item Photo</Text>
        <Gap height={20} />
        <TouchableOpacity style={styles.uploadBox}>
          <Text style={styles.uploadText}>Upload Image</Text>
        </TouchableOpacity>
        <Gap height={20} />
        <Button label="Submit" />
      </ScrollView>
    </View>
  );
};

export default ReportLostItem;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    paddingTop: 57,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadLabel: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    paddingRight: 170,
  },
  uploadBox: {
    borderWidth: 1,
    borderColor: '#578FCA',
    borderRadius: 8,
    paddingVertical: 7,
    alignItems: 'center',
    width: 321,
    height: 40,
  },
  uploadText: {
    color: '#578FCA',
    fontSize: 16,
    fontFamily: 'Poppins-Reguler',
  },
});
