// app/nastroje.tsx
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NastrojeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F7F4EF",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "#405B73", fontSize: 24 }}>Nástroje Screen</Text>
    </SafeAreaView>
  );
}
