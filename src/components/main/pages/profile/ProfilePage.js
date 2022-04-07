import { React, useContext } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as AuthContext } from "../../../auth/AuthContext";
import ButtonFilled from "../../../../custom_components/buttons/ButtonFilled";

export default function ProfilePage() {
  const { state, logout } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Text>Profile Page</Text>
      <ButtonFilled title="logout" onPress={logout} />
    </SafeAreaView>
  );
}
