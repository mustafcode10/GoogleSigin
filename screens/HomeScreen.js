import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

const HomeScreen = () => {
   const {user, logout, signOut} = useContext(AuthContext);
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome </Text>
      <Text>EMAIL {user.email}</Text>
    
      <FormButton buttonTitle='Logout' onPress={() => signOut()} />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: '#333333'
  }
});