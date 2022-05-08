import React from "react";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/profile/ProfilePage";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { theme } from "../../myStyle";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function MainScreen({ navigation }) {
  return (
    <NavigationContainer independent={true}>
      <StatusBar style="light" backgroundColor={theme.colors.primary} />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case "Home":
                iconName = focused ? "home" : "home-outline";
                break;
              case "Profile":
                iconName = focused ? "person" : "person-outline";
                break;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveColor: theme.colors.primary,
          tabBarActiveTintColor: theme.colors.primary,
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: theme.colors.background,
              borderTopWidth: 0,
              shadowOffset: { width: 5, height: 3 },
              shadowColor: "black",
              shadowOpacity: 0.5,
              elevation: 5,
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: theme.colors.background,
              borderTopWidth: 0,
              shadowOffset: { width: 5, height: 3 },
              shadowColor: "black",
              shadowOpacity: 0.5,
              elevation: 5,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
