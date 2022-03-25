import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { theme } from "../myStyle";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function MyInput({
  placeHolder,
  keyboardType,
  secureTextEntry,
  onChangeText,
  iconName,
}) {
  return (
    <View style={styles.container}>
      <FontAwesome
        style={{ width: "8%", textAlign: "center" }}
        name={iconName}
        color={theme.colors.primary}
        size={24}
      />
      <TextInput
        style={{ width: "92%", paddingStart: 8 }}
        placeholder={placeHolder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
  },
  input: {
    padding: 12,
  },
});
