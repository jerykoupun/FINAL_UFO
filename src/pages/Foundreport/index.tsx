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

const ReportFoundItem = () => {
  return (
    <View style={styles.page}>
      <Header title="Report Found Item" />
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput label="Item Name" placeholder="Input Item Name" />
        <Gap height={20} />
        <TextInput label="Found Location" placeholder="Enter Found Location" />
        <Gap height={20} />
        <TextInput label="Found Time" placeholder="Enter Found Time" />
        <Gap height={20} />
        <TextInput label="Your Number" placeholder="Enter your phone number" />
        <Gap height={20} />
        <Text style={styles.LabelUpload}>Upload Item Photo</Text>
        <Gap height={20} />
        <TouchableOpacity style={styles.BoxUpload}>
          <Text style={styles.TextUpload}>Upload Image</Text>
        </TouchableOpacity>
        <Gap height={20} />
        <Button label="Submit" />
      </ScrollView>
    </View>
  );
};

export default ReportFoundItem;

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
  LabelUpload: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    paddingRight: 170,
  },
  BoxUpload: {
    borderWidth: 1,
    borderColor: '#578FCA',
    borderRadius: 8,
    paddingVertical: 7,
    alignItems: 'center',
    width: 321,
    height: 40,
  },
  TextUpload: {
    color: '#578FCA',
    fontSize: 16,
    fontFamily: 'Poppins-Reguler',
  },
});
