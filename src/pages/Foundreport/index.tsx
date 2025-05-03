import React, {useState, useEffect} from 'react';
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
import {showMessage} from 'react-native-flash-message';
import {getDatabase, ref, get, push} from 'firebase/database';
import {getAuth} from 'firebase/auth';
import {launchImageLibrary} from 'react-native-image-picker';

const ReportFoundItem = ({navigation}) => {
  const [itemName, setItemName] = useState('');
  const [foundLocation, setFoundLocation] = useState('');
  const [foundTime, setFoundTime] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [imageBase64, setImageBase64] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const db = getDatabase();
    const user = auth.currentUser;

    if (user) {
      const userRef = ref(db, 'users/' + user.uid);
      get(userRef)
        .then(snapshot => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            setUsername(userData.username);
          }
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, []);

  const pickImage = async () => {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      maxWidth: 1000,
      maxHeight: 1000,
      quality: 0.8,
      includeBase64: true,
    });

    if (result.didCancel) {
      showMessage({
        message: 'Image selection canceled',
        type: 'danger',
      });
    } else {
      const assets = result.assets[0];
      setImageBase64(assets.base64);
    }
  };

  const onSubmit = () => {
    if (!imageBase64) {
      showMessage({
        message: 'Please upload an image before submitting',
        type: 'danger',
      });
      return;
    }

    const db = getDatabase();
    const data = {
      itemName: itemName,
      foundLocation: foundLocation,
      foundTime: foundTime,
      phoneNumber: phoneNumber,
      username: username,
      imageBase64: imageBase64,
      createdAt: new Date().toISOString(),
    };

    push(ref(db, 'foundItems/'), data)
      .then(() => {
        showMessage({
          message: 'Report submitted successfully!',
          type: 'success',
        });
        navigation.navigate('Lostandfound');
      })
      .catch(error => {
        showMessage({
          message: error.message,
          type: 'danger',
        });
      });
  };

  return (
    <View style={styles.page}>
      <Header title="Report Found Item" />
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput
          label="Item Name"
          placeholder="Input Item Name"
          onChangeText={e => setItemName(e)}
        />
        <Gap height={20} />
        <TextInput
          label="Found Location"
          placeholder="Enter Found Location"
          onChangeText={e => setFoundLocation(e)}
        />
        <Gap height={20} />
        <TextInput
          label="Found Time"
          placeholder="Enter Found Time"
          onChangeText={e => setFoundTime(e)}
        />
        <Gap height={20} />
        <TextInput
          label="Your Number"
          placeholder="Enter your phone number"
          onChangeText={e => setPhoneNumber(e)}
        />
        <Gap height={20} />
        <Text style={styles.uploadLabel}>Upload Item Photo</Text>
        <Gap height={20} />
        <TouchableOpacity style={styles.uploadBox} onPress={pickImage}>
          <Text style={styles.uploadText}>
            {imageBase64 ? 'Change Image' : 'Upload Image'}
          </Text>
        </TouchableOpacity>
        {imageBase64 ? (
          <Text style={styles.imagePreview}>Image Selected</Text>
        ) : null}
        <Gap height={20} />
        <Button label="Submit" onPress={onSubmit} />
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
    fontFamily: 'Poppins-Regular',
  },
  imagePreview: {
    fontSize: 14,
    color: 'green',
    marginTop: 10,
    fontFamily: 'Poppins-Light',
  },
});
