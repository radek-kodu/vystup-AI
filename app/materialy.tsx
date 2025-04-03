// app/materialy.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MaterialyScreen() {
  const materials = [
    { id: '1', title: 'Materiál 1', description: 'Krátký popis...' },
    { id: '2', title: 'Materiál 2', description: 'Krátký popis...' },
    { id: '3', title: 'Materiál 3', description: 'Krátký popis...' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Materiály</Text>
      </View>

      {/* Filter Bar */}
      <View style={styles.filterBar}>
        <Text style={styles.filterText}>Filtrace: Dřevo, Kov, Plast...</Text>
      </View>

      {/* Materials List */}
      <FlatList
        data={materials}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 10 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </View>
        )}
      />
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
  filterBar: {
    marginTop: 10,
    backgroundColor: 'rgba(242,156,75,0.3)',
    padding: 10,
    borderRadius: 4,
  },
  filterText: {
    color: '#405B73',
    fontSize: 14,
  },
  card: {
    marginTop: 10,
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
  cardDescription: {
    color: '#405B73',
    fontSize: 14,
    marginTop: 4,
  },
});
