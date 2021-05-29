import React,{useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const Stack = createStackNavigator();

const AppStack = () => {




  const AuthStack = () => {
  useEffect(() => {
    // initialize the Google SDK
     GoogleSignin.configure({
      webClientId:
        '1039722450746-5jdfhhi742jn26ifnio7ce4qnupjroia.apps.googleusercontent.com',
    });
  }, []);
 
};
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
