import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login'
import Routes from './src/routes';
import Home from './src/screens/Home';
import PaginaInicial from './src/screens/PaginaInicial';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Oi</Text> */}
      {/* <Login /> */}
      <StatusBar style="auto" />
      <Routes />
      {/* <PaginaInicial /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
