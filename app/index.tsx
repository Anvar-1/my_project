import React from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native';
import AuthScreen from '../shared/auth/AuthScreen';

export default function App() {
  const logo = require("../assets/logo1.png");

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />

        <Text style={styles.title}>Get Started now</Text>
        <Text style={styles.subtitle}>
          Create an account or log in to explore about our app
        </Text>

        <AuthScreen />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:30
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  logo: {
    width: 36,
    height: 36,
    alignSelf: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1B1B1F',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginBottom: 24,
    width:200,
    marginLeft:70
  },
  footer: {
    marginTop: 35,
    textAlign: 'center',
    color: '#ccc',
    fontSize: 12,
  },
});






