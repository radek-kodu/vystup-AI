// app/nastroje/_layout.tsx
import { Stack } from "expo-router";

export default function NastrojeLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // we rely on our custom top bars
      }}
    >
      {/* The default screen for nastroje/ is index.tsx */}
      <Stack.Screen name="index" />

      {/* The screen for nastroje/elektricke.tsx */}
      <Stack.Screen name="elektricke" />

      {/* The screen for nastroje/pricomocara-pila.tsx */}
      <Stack.Screen name="primocara-pila" />
    </Stack>
  );
}
