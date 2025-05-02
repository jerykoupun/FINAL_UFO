import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../../assets';
import TextInput from '../../components/molocules/Textinput';
import Button from '../../components/atom/Button';
import Gap from '../../components/atom/Gap';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';
import {useState} from 'react';
import {getDatabase, ref, get} from 'firebase/database';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const auth = getAuth();
    const db = getDatabase();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        get(ref(db, 'users/' + user.uid)).then(snapshot => {
          if (snapshot.exists()) {
            const data = snapshot.val();
            showMessage({
              message: 'Sign In Successful',
              type: 'success',
            });
            navigation.navigate('Dashboard', {
              uid: user.uid,
              username: data.username,
              email: data.email,
            });
          } else {
            showMessage({
              message: 'User not found',
              type: 'danger',
            });
          }
        });
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
      <View style={styles.container}>
        <Logo width={132} height={118} />
        <Gap height={28} />
        <Text style={styles.title}>Welcome Back!</Text>
        <Gap height={28} />
        <TextInput
          placeholder="Enter your Email"
          onChangeText={e => setEmail(e)}
        />
        <Gap height={28} />
        <TextInput
          placeholder="Enter your Password"
          secureTextEntry={true}
          onChangeText={e => setPassword(e)}
        />
        <Gap height={11} />
        <Text style={styles.titlebutton}>Forget Your Password?</Text>
        <Gap height={11} />
        <Button label="Sign In" onPress={onSubmit} />
        <Gap height={11} />
        <Text style={styles.titlebutton}>Don't have an account?</Text>
        <Gap height={11} />
        <Button
          label="Create New Account"
          color="#B9B6B6"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 150,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
  },
  titlebutton: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#000000',
    paddingLeft: 150,
  },
});
