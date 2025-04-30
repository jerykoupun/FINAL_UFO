import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import Gap from '../../components/atom/Gap';
import {Null_Photo} from '../../assets';
import Header from '../../components/molocules/Header';
import TextInput from '../../components/molocules/Textinput2';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {useState} from 'react';

const Profile = () => {
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
        <TextInput label="Username" placeholder="Enter your username" />
        <Gap height={20} />
        <TextInput label="Phone Number" placeholder="Enter your phone number" />
        <Gap height={20} />
        <TextInput label="Email" placeholder="Enter your Email" />
        <Gap height={20} />
        <TextInput label="Address" placeholder="Enter your address" />
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
  },
});
