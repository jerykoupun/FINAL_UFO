import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/molocules/Header';
import {Logo} from '../../assets';
import TextInput from '../../components/molocules/Textinput';
import Button from '../../components/atom/Button';
import Gap from '../../components/atom/Gap';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {useState} from 'react';
import {getDatabase, ref, set} from 'firebase/database';
import {showMessage} from 'react-native-flash-message';

const SignUp = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const auth = getAuth();
    const db = getDatabase();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        set(ref(db, 'users/' + user.uid), {
          username: username,
          email: email,
        });
        showMessage({
          message: 'Sign Up Successful',
          type: 'success',
        });
        navigation.navigate('SignIn');
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
      <Header title="Sign Up" />
      <View style={styles.container}>
        <Logo width={132} height={118} />
        <Gap height={28} />
        <Text style={styles.title}>Let's Get Started!</Text>
        <Gap height={28} />
        <TextInput
          placeholder="Enter your Username"
          onChangeText={e => setUsername(e)}
        />
        <Gap height={28} />
        <TextInput
          placeholder="Enter your Email"
          onChangeText={e => setEmail(e)}
        />
        <Gap height={28} />
        <TextInput
          placeholder="Enter your Password"
          onChangeText={e => setPassword(e)}
          secureTextEntry={true}
        />
        <Gap height={28} />
        <Button label="Sign Up" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 91,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
  },
});
