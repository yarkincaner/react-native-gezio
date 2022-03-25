import { React } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { theme } from "../../myStyle";

const ButtonTransparent = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    width: "100%",
    backgroundColor: "transparent",
    borderRadius: 10,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    paddingVertical: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: theme.colors.primary,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default ButtonTransparent;
