import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const countries = [
  { code: '+998', name: 'Uzbekistan', flag: '🇺🇿' },
  // boshqa mamlakatlar qo'shishingiz mumkin
];

export default function SignUpScreen() {
  const [activeTab, setActiveTab] = useState('SignUp'); // LogIn yoki SignUp
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneCode, setPhoneCode] = useState(countries[0].code);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const isFormValid = () => {
    return (
      name.trim() !== '' &&
      lastName.trim() !== '' &&
      email.trim() !== '' &&
      phoneNumber.trim() !== '' &&
      password.trim() !== ''
    );
  };

  const handleRegister = () => {
    if (!isFormValid()) {
      alert('Iltimos, barcha maydonlarni to\'ldiring');
      return;
    }
    // ro'yxatdan o'tish jarayoni
    alert(`Ro'yxatdan o'tildi:\n${name} ${lastName}\n${email}\n${phoneCode} ${phoneNumber}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Get Started now</Text>
      <Text style={styles.subtitle}>Create an account or log in to explore about our app</Text>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'LogIn' && styles.activeTab]}
          onPress={() => setActiveTab('LogIn')}
        >
          <Text style={[styles.tabText, activeTab === 'LogIn' && styles.activeTabText]}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'SignUp' && styles.activeTab]}
          onPress={() => setActiveTab('SignUp')}
        >
          <Text style={[styles.tabText, activeTab === 'SignUp' && styles.activeTabText]}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'SignUp' && (
        <>
          <View style={styles.row}>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                placeholder="Enter name"
                style={styles.input}
                value={name}
                onChangeText={setName}
              />
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Last Name</Text>
              <TextInput
                placeholder="Enter last name"
                style={styles.input}
                value={lastName}
                onChangeText={setLastName}
              />
            </View>
          </View>

          <View style={styles.inputWrapperFull}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              placeholder="Enter your email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputWrapperFull}>
            <Text style={styles.label}>Phone Number</Text>
            <View style={styles.phoneRow}>
              <TouchableOpacity style={styles.phoneCode}>
                <Text style={{fontSize:18}}>{countries.find(c => c.code === phoneCode)?.flag}</Text>
                <Text style={{marginLeft: 5}}>{phoneCode}</Text>
              </TouchableOpacity>
              <TextInput
                placeholder="Enter phone number"
                style={[styles.input, {flex: 1}]}
                value={phoneNumber}

                onChangeText={setPhoneNumber}
                keyboardType="phone-pad"
              />
            </View>
          </View>

          <View style={styles.inputWrapperFull}>
            <Text style={styles.label}>Set Password</Text>
            <View style={styles.passwordRow}>
              <TextInput
                placeholder="*******"
                style={[styles.input, {flex: 1}]}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!passwordVisible}
              />
              <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eyeButton}>
                <Text>{passwordVisible ? '🙈' : '👁️'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.registerButton, !isFormValid() && {backgroundColor: '#ccc'}]}
            disabled={!isFormValid()}
            onPress={handleRegister}
          >
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </>
      )}

      {activeTab === 'LogIn' && (
        <Text style={{marginTop: 20}}>Log In form here...</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 25,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#007AFF',
  },
  tabText: {
    fontSize: 16,
    color: '#555',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputWrapper: {
    flex: 1,
    marginBottom: 15,
    marginRight: 10,
  },
  inputWrapperFull: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 6,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phoneCode: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginRight: 10,
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeButton: {
    paddingHorizontal: 10,
  },
  registerButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    textAlign: 'center',
  },
});
