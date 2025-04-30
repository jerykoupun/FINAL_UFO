import React from 'react';
import Splashscreen1 from './src/pages/Splashscreen1';
import Splashscreen2 from './src/pages/Splashscreen2';
import SignUp from './src/pages/Signup';
import SignIn from './src/pages/Signin';
import Dashboard from './src/pages/Dashboard';
import Organization from './src/pages/Organization';
import Lostandfound from './src/pages/Lostandfound';
import Lostreport from './src/pages/Lostreport';
import Foundreport from './src/pages/Foundreport';
import Announcement from './src/pages/Announcement';
import Profile from './src/pages/Profile';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splashscreen1"
          component={Splashscreen1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Splashscreen2"
          component={Splashscreen2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Organization"
          component={Organization}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Lostandfound"
          component={Lostandfound}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Lostreport"
          component={Lostreport}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Foundreport"
          component={Foundreport}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Announcement"
          component={Announcement}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <FlashMessage position="top" duration={600} />
    </NavigationContainer>
  );
};
export default App;
