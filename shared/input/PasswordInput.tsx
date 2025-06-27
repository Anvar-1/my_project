// shared/input/PasswordInput.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface PasswordInputProps extends TextInputProps {
  label: string;
  error?: boolean;
}

export default function PasswordInput({ label, error = false, ...rest }: PasswordInputProps) {
  const [secure, setSecure] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputWrapper, error && styles.inputError]}>
        <TextInput
          {...rest}
          secureTextEntry={secure}
          style={styles.input}
          placeholderTextColor="#999"
        />
        <TouchableOpacity onPress={() => setSecure(!secure)}>
          <MaterialCommunityIcons
            name={secure ? 'eye-off' : 'eye'}
            size={20}
            color="#999"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  label: { fontSize: 13, color: '#444', marginBottom: 4 },
  inputWrapper: {
    borderWidth: 1,
    borderColor: '#E4E4E4',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#1B1B1F',
  },
  inputError: {
    borderColor: '#cc0000',
  },
});
