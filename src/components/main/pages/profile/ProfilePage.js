import { React, useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Context as AuthContext } from "../../../auth/AuthContext";
import Ionicons from "react-native-vector-icons/Ionicons";
import ButtonFilled from "../../../../custom_components/buttons/ButtonFilled";
import { theme } from "../../../../myStyle";

export default function ProfilePage() {
  const { state, logout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: "https://picsum.photos/id/1/200" }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>John Doe</Text>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Ionicons
            name="location-outline"
            style={[styles.location, { paddingEnd: 2, paddingBottom: 0 }]}
          />
          <Text style={styles.location}>Antalya, Turkey</Text>
        </View>
      </View>
      <View style={styles.content}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  profileHeader: {
    flex: 3,
    backgroundColor: theme.colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 88,
  },
  name: {
    color: theme.colors.background,
    fontWeight: "bold",
    padding: 4,
  },
  location: {
    color: theme.colors.background,
    paddingBottom: 4,
  },
  content: {
    flex: 7,
    backgroundColor: theme.colors.background,
  },
});
