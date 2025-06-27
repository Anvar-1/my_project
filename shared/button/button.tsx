import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export default function Button({ title, onPress, disabled }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: disabled ? '#F0F2F5' : '#0066FF' }]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[styles.text, { color: disabled ? '#999' : '#fff' }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 55,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});




