// app/nastroje/index.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from "expo-router";

export default function NastrojeScreen() {
  const router = useRouter();
  const categories = ['Ruční', 'Elektrické', 'Bezpečnost'];
  const instructions = [
    { id: '1', title: 'Návod 1', description: 'Krátký popis... Krok za krokem' },
    { id: '2', title: 'Návod 2', description: 'Krátký popis... Krok za krokem' },
  ];

  const handleCategoryPress = (category: string) => {
    if (category === "Elektrické") {
      router.push("/nastroje/elektricke");
    }
    // Add navigation for other categories if needed
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Nástroje</Text>
      </View>

      {/* Categories Row */}
      <View style={styles.categoriesRow}>
        {categories.map((cat, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryButton}
            onPress={() => handleCategoryPress(cat)}
          >
            <Text style={styles.categoryText}>{cat}</Text>
          </TouchableOpacity>
        ))}
      </View>

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

  // Categories in a horizontal row
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  categoryButton: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: 'rgba(242,156,75,0.3)',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  categoryText: {
    color: '#405B73',
    fontSize: 14,
    fontWeight: 'bold',
  },

  // Cards for instructions
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
