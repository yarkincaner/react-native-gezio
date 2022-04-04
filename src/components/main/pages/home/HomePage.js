import { React, useContext, useState, useEffect } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import ButtonFilled from "../../../../custom_components/buttons/ButtonFilled";
import { Context as AuthContext } from "../../../auth/AuthContext";
import { theme } from "../../../../myStyle";
import axios from "axios";
import Slide from "./Slide";

export default function HomePage() {
  const { state, logout } = useContext(AuthContext);
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Get from our API.
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((result) => {
        setMovies(result.data);
      })
      .then(setIsLoading(false));
  }, []);

  if (isLoading) {
    return <ActivityIndicator size="large" color={theme.colors.primary} />;
  }
  return (
    <View>
      <Text
        style={{
          padding: 12,
          fontSize: 24,
        }}
      >
        Welcome, {state.token}
      </Text>
      <FlatList
        horizontal={true}
        data={movies}
        renderItem={({ item }) => <Slide item={item} />}
        style={{ padding: 4 }}
      />
    </View>
  );
}
