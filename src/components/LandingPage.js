import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ButtonTransparent from "../custom_components/buttons/ButtonTransparent";
import ButtonFilled from "../custom_components/buttons/ButtonFilled";
import { theme, darkTheme } from "../myStyle";
import MyInput from "../custom_components/MyInput";

import { AuthContext } from "./auth/context";
import SplashScreen from "./SplashScreen";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

const Stack = createNativeStackNavigator();

const LandingPage = ({ navigation }) => (
  <Stack.Navigator headerMode="none">
    {/* <Stack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={{ headerShown: false }}
    /> */}
    <Stack.Screen
      name="LoginPage"
      component={LoginPage}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="RegisterPage" component={RegisterPage} />
  </Stack.Navigator>
);

export default LandingPage;
