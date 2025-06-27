import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';

export default function SmsVerification({ navigation }: any) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(59);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>You have received{'\n'}an SMS code</Text>
      <Text style={styles.subtitle}>
        My SMS-confirmation will be sent to{'\n'}your phone number
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            onChangeText={(val) => handleOtpChange(index, val)}
            keyboardType="number-pad"
            maxLength={1}
            style={styles.otpInput}
          />
        ))}
      </View>

      <View style={styles.resendContainer}>
        <Text style={styles.resendText}>Отправить еще раз:</Text>
        <View style={styles.timerBox}>
          <Text style={styles.timerText}>
            {timer < 10 ? `00:0${timer}` : `00:${timer}`}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => console.log('Register')}
        disabled={otp.some((d) => !d)}
      >
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginLink}>
          У вас есть профиль?{' '}
          <Text style={styles.loginLinkBold}>Войти</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1B1B1F',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#99A1B3',
    textAlign: 'center',
    marginBottom: 30,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5F6F9',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  otpInput: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    textAlign: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 18,
    fontWeight: '600',
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F5F6F9',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    gap: 8,
    marginBottom: 24,
  },
  resendText: {
    fontSize: 14,
    color: '#333',
  },
  timerBox: {
    backgroundColor: '#E4E5E9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  timerText: {
    fontWeight: '600',
    fontSize: 14,
    color: '#1B1B1F',
  },
  registerButton: {
    height: 50,
    borderRadius: 16,
    backgroundColor: '#F5F6F9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  registerText: {
    fontSize: 16,
    color: '#99A1B3',
  },
  loginLink: {
    textAlign: 'center',
    fontSize: 13,
    color: '#A0A0A0',
  },
  loginLinkBold: {
    color: '#007AFF',
    fontWeight: '600',
  },
});
