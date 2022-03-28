import React from "react";
import { View, Text, Button } from "react-native";
import ButtonFilled from "../custom_components/buttons/ButtonFilled";
import { Context as AuthContext } from "./auth/AuthContext";

export default function HomePage({ navigation }) {
  //  const signOut = () => {
  //    React.useContext(AuthContext);
  //  };

  const { state, logout } = React.useContext(AuthContext);

  return (
    <View>
      <Text>Welcome, {state.email}</Text>
      <ButtonFilled title="logout" onPress={logout} />
    </View>
  );
}
