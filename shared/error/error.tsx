import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ErrorProps {
  message: string;
}

export default function Error({ message }: ErrorProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffe5e5',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  text: {
    color: '#cc0000',
    fontSize: 13,
    textAlign: 'center',
    fontWeight: '500',
  },
  inputError: {
    borderColor: '#D32F2F',
  },

});
