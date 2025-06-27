import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AuthSwitcher from './AuthSwitcher'; 
import SignUpForm from '../../components/forms/SignUpForm';
import LoginForm from '../../components/forms/LoginForm';

export default function AuthScreen() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('signup');

  return (
    <View style={styles.container}>
      <AuthSwitcher active={activeTab} onSwitch={setActiveTab} />
      {activeTab === 'signup' ? <SignUpForm /> : <LoginForm />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
