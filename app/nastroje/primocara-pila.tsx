// app/nastroje/pricomocara-pila.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PrimocaraPilaScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Přímočará pila</Text>
      </View>
      
      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.contentText}>
          Detailní informace o Přímočaré pile... Můžete zde uvést technické specifikace, postupy použití, bezpečnostní pokyny a další důležité detaily.
        </Text>
      </View>
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
  content: {
    marginTop: 20,
    padding: 12,
    backgroundColor: 'white',
    borderColor: '#4A6F42',
    borderWidth: 2,
    borderRadius: 8,
  },
  contentText: {
    color: '#405B73',
    fontSize: 16,
  },
});
