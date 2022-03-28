import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LandingPage from "./src/components/LandingPage";
import SplashScreen from "./src/components/SplashScreen";
import HomePage from "./src/components/HomePage";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Provider as AuthProvider } from "./src/components/auth/AuthContext.js";
import { Context as AuthContext } from "./src/components/auth/AuthContext";

const Stack = createNativeStackNavigator();

function App() {
  const { state } = React.useContext(AuthContext);
  console.log(state);

  // if (loginState.isLoading) {
  //   return <SplashScreen />;
  // }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {state.token != null ? <HomePage /> : <LandingPage />}
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
