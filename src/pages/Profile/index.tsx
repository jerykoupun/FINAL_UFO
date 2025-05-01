import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
import Gap from '../../components/atom/Gap';
import {Null_Photo} from '../../assets';
import Header from '../../components/molocules/Header';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {useState} from 'react';
import Button from '../../components/atom/Button';

const Profile = ({navigation}) => {
  const [photo, setPhoto] = useState(Null_Photo);

  const getImage = async () => {
    const result = await launchImageLibrary({
      maxHeight: 100,
      maxWidth: 100,
      quality: 0.5,
      includeBase64: true,
      mediaType: 'photo',
    });

    if (result.didCancel) {
      showMessage({
        message: 'Pilih foto dibatalkan',
        type: 'danger',
      });
    } else {
      const assets = result.assets[0];
      const base64 = `data:${assets.type};base64, ${assets.base64}`;
      const source = {uri: base64};
      setPhoto(source);
    }
  };
  return (
    <View style={styles.page}>
      <Header title="Profile" />
      <View style={styles.container}>
        <View style={styles.avatarWrapper}>
          <TouchableOpacity onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Username</Text>
          <Gap height={20} />
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Jery Koupun</Text>
          </View>
          <Gap height={20} />
          <Text style={styles.label}>Email</Text>
          <Gap height={20} />
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>YoungBoy@gmail.com</Text>
          </View>
        </View>
        <Gap height={40} />
        <Button
          label="Log Out"
          color="#578FCA"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    paddingTop: 57,
    alignItems: 'center',
    paddingHorizontal: 39,
    backgroundColor: '#FFF',
  },
  avatarWrapper: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderColor: '#3674B5',
    borderWidth: 3,
  },
  label: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Poppins-Medium',
  },
  inputBox: {
    backgroundColor: '#D8E0E7',
    borderRadius: 8,
    padding: 12,
    width: 321,
    height: 48,
    borderColor: '#3674B5',
    borderWidth: 1,
  },
  inputText: {
    fontSize: 15,
    color: '#000000',
    fontFamily: 'Poppins-Regular',
  },
});
