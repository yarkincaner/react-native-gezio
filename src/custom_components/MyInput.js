import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { theme } from "../myStyle";

export default function MyInput({
  placeHolder,
  keyboardType,
  secureTextEntry,
}) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeHolder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: theme.colors.foreground,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
  },
});
