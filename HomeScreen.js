import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BreathingCircle from '../components/BreathingCircle';

export default function HomeScreen() {
  const [started, setStarted] = useState(false);

  return (
    <View style={styles.container}>
      {!started ? (
        <>
          <Text style={styles.title}>Respira y Enfócate</Text>
          <TouchableOpacity style={styles.button} onPress={() => setStarted(true)}>
            <Text style={styles.buttonText}>Respirar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <BreathingCircle />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fdfdfd' },
  title: { fontSize: 24, marginBottom: 20 },
  button: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 10 },
  buttonText: { color: '#fff', fontSize: 18 }
});
