import React from "react";
import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RegisterPage() {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Register Page</Text>
      </View>
    </SafeAreaProvider>
  );
}
