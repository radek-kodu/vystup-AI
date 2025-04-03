// app/nastroje.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NastrojeScreen() {
  const categories = ['Ruční', 'Elektrické', 'Bezpečnost'];
  const instructions = [
    { id: '1', title: 'Návod 1', description: 'Krátký popis... Krok za krokem' },
    { id: '2', title: 'Návod 2', description: 'Krátký popis... Krok za krokem' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Nástroje</Text>
      </View>

      {/* Horizontal Categories Bar */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {categories.map((cat, index) => (
          <View key={index} style={styles.category}>
            <Text style={styles.categoryText}>{cat}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Instructions List */}
      <FlatList
        data={instructions}
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
  categoriesContainer: {
    marginTop: 10,
  },
  category: {
    backgroundColor: 'rgba(242,156,75,0.3)',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  categoryText: {
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
