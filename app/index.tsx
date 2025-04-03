// app/index.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Top Navigation Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>KUTILNA</Text>
        <Text style={styles.notificationIcon}>🔔</Text>
      </View>

      {/* Main Content Card */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Doporučený obsah</Text>
      </View>

      {/* Subcategory Card */}
      <TouchableOpacity style={styles.subcategory}>
        <Text style={styles.subcategoryText}>Novinky</Text>
      </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#405B73',
    padding: 10,
    borderRadius: 4,
  },
  topBarText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationIcon: {
    color: '#F29C4B',
    fontSize: 18,
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
  subcategory: {
    marginTop: 10,
    backgroundColor: 'rgba(242,156,75,0.3)',
    borderRadius: 8,
    padding: 12,
  },
  subcategoryText: {
    color: '#405B73',
    fontSize: 14,
  },
});
