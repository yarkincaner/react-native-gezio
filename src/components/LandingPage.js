import { React, useState, Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput } from "react-native";
import ButtonTransparent from "../custom_components/buttons/ButtonTransparent";
import ButtonFilled from "../custom_components/buttons/ButtonFilled";
import { theme, darkTheme } from "../myStyle";
import MyInput from "../custom_components/MyInput";

export default function LandingPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {};

  const signUp = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Gezio</Text>

      <View style={styles.inputContainer}>
        <View style={{ marginBottom: 8 }}>
          <MyInput placeHolder="Email" keyboardType="email-address" />
        </View>
        <MyInput placeHolder="Password" secureTextEntry={true} />
      </View>

      <View style={styles.buttonContainer}>
        <ButtonTransparent onPress={login} title="login" />
        <Text style={styles.text}>Or</Text>
        <ButtonFilled onPress={signUp} title="sign up" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: theme.colors.primary,
    fontSize: 48,
    padding: 24,
  },
  inputContainer: {
    paddingTop: 4,
    paddingBottom: 16,
    width: "75%",
  },
  input: {
    borderColor: theme.colors.foreground,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
  },
  buttonContainer: {
    paddingVertical: 8,
    width: "75%",
    textAlign: "center",
  },
  text: {
    color: theme.colors.foreground,
    fontSize: 15,
    padding: 8,
    textAlign: "center",
  },
});
