import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import Input from '../../shared/input/input';
import PasswordInput from '../../shared/input/PasswordInput';
import PhoneInput from '../../shared/input/phoneInput';
import Button from '../../shared/button/button';
import { useRouter } from 'expo-router';

export default function SignUpForm() {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [countryCode, setCountryCode] = useState('UZ');
  const [callingCode, setCallingCode] = useState('998');

  const isFormValid = name && lastName && email && phoneNumber && password;

  const router = useRouter();

  const handleRegister = () => {
    if (!isFormValid) {
      Alert.alert('Xatolik', 'Iltimos, barcha maydonlarni to‘ldiring.');
      return;
    }

    router.push({
      pathname: '/SmsVerification',
      params: {
        phone: phoneNumber,
        name: name,
      },
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.row}>
            <Input
              label="Name"
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
            />
            <Input
              label="Last Name"
              placeholder="Enter last name"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>

          <Input
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <PhoneInput
            label="Phone Number"
            countryCode={countryCode}
            callingCode={callingCode}
            setCountryCode={setCountryCode}
            setCallingCode={setCallingCode}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />

          <PasswordInput
            label="Password"
            placeholder="Set password"
            value={password}
            onChangeText={setPassword}
          />

          <Button title="Register" onPress={handleRegister} disabled={!isFormValid} />

          <View style={{ height: 40 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
});
