import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import * as Animatable from "react-native-animatable";
import { theme } from "../myStyle";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={theme.colors.primary} />
      <Animatable.Text
        style={styles.title}
        animation="pulse"
        duration={1500}
        iterationCount="infinite"
      >
        Gezio
      </Animatable.Text>
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
