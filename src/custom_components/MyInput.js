import React from "react";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { theme } from "../myStyle";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";

export default function MyInput(props) {
  return (
    <View style={styles.container}>
      <Feather
        style={{ width: "8%", textAlign: "center" }}
        name={props.iconName}
        color={theme.colors.primary}
        size={24}
      />
      <TextInput
        style={{ width: "84%", paddingStart: 8 }}
        placeholder={props.placeHolder}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
      />
      {props.textInputChange ? (
        <Animatable.View
          style={{ width: "8%" }}
          animation="fadeIn"
          duration={300}
        >
          <Feather name="check-circle" color={theme.colors.primary} size={24} />
        </Animatable.View>
      ) : null}
      {props.visibility ? (
        <TouchableOpacity onPress={props.visibility}>
          {props.secureTextEntry ? (
            <Feather name="eye-off" color={theme.colors.primary} size={24} />
          ) : (
            <Feather name="eye" color={theme.colors.primary} size={24} />
          )}
        </TouchableOpacity>
      ) : null}
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
