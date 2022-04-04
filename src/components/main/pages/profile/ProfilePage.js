import { React, useContext } from "react";
import { View, Text } from "react-native";
import { Context as AuthContext } from "../../../auth/AuthContext";
import ButtonFilled from "../../../../custom_components/buttons/ButtonFilled";

export default function ProfilePage() {
  const { state, logout } = useContext(AuthContext);

  return (
    <View>
      <Text>Profile Page</Text>
      <ButtonFilled title="logout" onPress={logout} />
    </View>
  );
}
