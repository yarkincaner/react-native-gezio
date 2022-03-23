import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { theme } from "../myStyle";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gezio</Text>
      <ActivityIndicator size="large" color={theme.colors.background} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: theme.colors.background,
    fontSize: 48,
    padding: 28,
  },
});
