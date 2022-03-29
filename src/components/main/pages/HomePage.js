import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ButtonFilled from "../../../custom_components/buttons/ButtonFilled";
import { Context as AuthContext } from "../../auth/AuthContext";
import { theme } from "../../../myStyle";

export default function HomePage() {
  const { state, logout } = React.useContext(AuthContext);

  return (
    <View>
      <Text>Welcome, {state.token}</Text>
      <ButtonFilled title="logout" onPress={logout} />
    </View>
  );
}
