// app/_layout.tsx
import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#F29C4B",
        tabBarInactiveTintColor: "#405B73",
        tabBarStyle: { backgroundColor: "#F7F4EF", borderTopColor: "#405B73" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Domů",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="materialy"
        options={{
          tabBarLabel: "Materiály",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="category" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="nastroje"
        options={{
          tabBarLabel: "Nástroje",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="build" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          tabBarLabel: "Profil",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
