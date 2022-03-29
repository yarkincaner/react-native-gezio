import React from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ButtonFilled from "../custom_components/buttons/ButtonFilled";
import { Context as AuthContext } from "./auth/AuthContext";
import { StatusBar } from "expo-status-bar";
import { theme } from "../myStyle";

export default function HomePage({ navigation }) {
  const { state, logout } = React.useContext(AuthContext);

  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.background }}>
      <StatusBar style="auto" backgroundColor={theme.colors.background} />
      <Text>Welcome, {state.token}</Text>
      <ButtonFilled title="logout" onPress={logout} />
    </SafeAreaView>
  );
}
