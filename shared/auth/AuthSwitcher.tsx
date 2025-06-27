import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  active: 'login' | 'signup';
  onSwitch: (to: 'login' | 'signup') => void;
}

export default function AuthSwitcher({ active, onSwitch }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, active === 'login' && styles.activeTab]}
        onPress={() => onSwitch('login')}
      >
        <Text style={[styles.text, active === 'login' && styles.activeText]}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tab, active === 'signup' && styles.activeTab]}
        onPress={() => onSwitch('signup')}
      >
        <Text style={[styles.text, active === 'signup' && styles.activeText]}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F5F6F9',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
    gap:5
  },
  tab: {
    flex: 1,
    padding: 12,
    backgroundColor: '#F5F6F9',
    alignItems: 'center',
    marginVertical:5,
    borderRadius:5
  },
  activeTab: {
    backgroundColor: '#fff',
  },
  text: {
    color: '#7A7A7A',
    fontWeight: '500',
    fontSize: 14,
  },
  activeText: {
    color: '#1B1B1F',
    fontWeight: '600',
  },
});
