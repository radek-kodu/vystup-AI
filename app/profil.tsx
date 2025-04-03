// app/profil.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Profil</Text>
      </View>

      {/* User Info Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Josef Novák</Text>
        <Text style={styles.cardSubtitle}>Úroveň: Začátečník</Text>
        <Text style={styles.cardSubtitle}>Pokrok: 40%</Text>
      </View>

      {/* Community Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Komunita</Text>
        <Text style={styles.cardSubtitle}>Diskuze, komentáře a hodnocení</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F4EF',
    paddingHorizontal: 16,
    paddingTop: 16,
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
  card: {
    marginTop: 20,
    backgroundColor: 'white',
    borderColor: '#4A6F42',
    borderWidth: 2,
    borderRadius: 8,
    padding: 16,
  },
  cardTitle: {
    color: '#405B73',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: '#405B73',
    fontSize: 14,
    marginTop: 4,
  },
});
