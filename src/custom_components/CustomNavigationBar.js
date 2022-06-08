import { React, useState, useContext } from "react";
import { View } from "react-native";
import { Appbar, Menu, Provider } from "react-native-paper";
import { Context as AuthContext } from "../components/auth/AuthContext";

export default function CustomNavigationBar({ navigation }) {
  const { state, logout } = useContext(AuthContext);

  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const onPressLogout = () => console.log("Logout");

  const _handleMore = () => console.log("Shown more");
  return (
    <Appbar.Header>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}
      >
        <Menu.Item onPress={logout} title="Logout" />
      </Menu>
    </Appbar.Header>
  );
}
