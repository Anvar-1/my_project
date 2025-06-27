import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Input from '../../shared/input/input';
import PasswordInput from '../../shared/input/PasswordInput';
import Button from '../../shared/button/button';
import { Checkbox } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Error from '../../shared/error/error';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const isFormValid = email && password;

  const handleLogin = () => {
    const isEmailCorrect = email === 'admin@example.com';
    const isPasswordCorrect = password === '123456';

    if (!isEmailCorrect || !isPasswordCorrect) {
      setError('Login failed. Please check your credentials.');
      setErrorEmail(!isEmailCorrect);
      setErrorPassword(!isPasswordCorrect);
    } else {
      setError('');
      setErrorEmail(false);
      setErrorPassword(false);
      console.log('Logged in!');
    }
  };

  useEffect(() => {
    // Avtomatik ravishda xatolikni tozalash
    if (email === 'admin@example.com') {
      setErrorEmail(false);
    }
    if (password === '123456') {
      setErrorPassword(false);
    }
    if (email === 'admin@example.com' && password === '123456') {
      setError('');
    }
  }, [email, password]);

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.scroll}>
        {error ? (
          <View style={styles.errorTopContainer}>
            <Error message={error} />
          </View>
        ) : null}

        <Input
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          error={errorEmail}
        />

        <PasswordInput
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          error={errorPassword}
        />

        <View style={styles.row}>
          <View style={styles.rememberMe}>
            <Checkbox
              status={rememberMe ? 'checked' : 'unchecked'}
              onPress={() => setRememberMe(!rememberMe)}
              color="#4D81E7"
              uncheckedColor="#ccc"
            />
            <Text style={styles.rememberText}>Remember me</Text>
          </View>

          <TouchableOpacity onPress={() => console.log('Forgot Password')}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <Button
          title="Log In"
          onPress={handleLogin}
          disabled={!isFormValid}
        />

        <Text style={styles.orText}>Or login with</Text>

        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIcons name="google" size={24} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIcons name="facebook" size={24} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIcons name="apple" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIcons name="cellphone" size={24} color="#4D81E7" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  scroll: {
    paddingBottom: 30,
    gap: 12,
  },
  
  errorTopContainer: {
    marginBottom: 8,
  },
  inputError: {
    borderColor: '#cc0000',
    borderWidth: 1,
    borderRadius: 8,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {
    fontSize: 12,
    color: '#1B1B1F',
    marginLeft: 4,
    fontWeight: '500',
  },
  forgotText: {
    fontFamily: 'Exo',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16,
    color: '#4D81E7',
    textAlign: 'right',
  },
  orText: {
    textAlign: 'center',
    marginTop: 24,
    color: '#999',
    fontSize: 12,
  },
  socialRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center',
    gap: 10, 
    paddingHorizontal: 1,
  },

  iconButton: {
    height: 48,
    width: 60,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    borderColor: '#E4E4E4',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
