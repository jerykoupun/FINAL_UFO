import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molocules/Header';
import TextInput from '../../components/molocules/Textinput2';
import Button from '../../components/atom/Button';
import Gap from '../../components/atom/Gap';

const FoundReport = () => {
  return (
    <View style={styles.page}>
      <Header title="Report Lost Item" />
      <View style={styles.container}>
        <TextInput placeholder={'Input Item Name'} label={'Item Name'} />
        <Gap height={20} />
        <TextInput
          placeholder={'Enter Found Location'}
          label={'Found Location'}
        />
        <Gap height={20} />
        <TextInput placeholder={'Enter Found Time'} label={'Found Time'} />
        <Gap height={20} />
        <TextInput
          placeholder={'Enter Your Phone Number'}
          label={'Your Number'}
        />
        <Gap height={20} />
        <TextInput placeholder={'Upload Image'} label={'Upload Item Photo'} />
        <Gap height={20} />
        <Button label="Submit" />
      </View>
    </View>
  );
};

export default FoundReport;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 40,
  },
});
