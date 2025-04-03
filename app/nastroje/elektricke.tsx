// app/nastroje/elektricke.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from "expo-router";

export default function ElektrickeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Elektrické Nástroje</Text>
      </View>
      
      {/* Button to “Přímočará pila” */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => router.push("/nastroje/primocara-pila")}
      >
        <Text style={styles.buttonText}>Přímočará pila</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F4EF',
    padding: 16,
  },
  topBar: {
    backgroundColor: '#405B73',
    padding: 10,
    borderRadius: 4,
  },
  topBarText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'rgba(242,156,75,0.3)',
    padding: 12,
    borderRadius: 8,
    alignItems: "center"
  },
  buttonText: {
    color: '#405B73',
    fontSize: 16,
  },
});
