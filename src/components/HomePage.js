import React from "react";
import { View, Text, Button } from "react-native";
import ButtonFilled from "../custom_components/buttons/ButtonFilled";
import { AuthContext } from "./auth/context";

export default function HomePage({ navigation }) {
  //  const signOut = () => {
  //    React.useContext(AuthContext);
  //  };

  const { signOut } = React.useContext(AuthContext);

  return (
    <View>
      <Text>Home Page</Text>
      <ButtonFilled
        title="sign out"
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
}
