import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LandingPage from "./src/components/LandingPage";
import SplashScreen from "./src/components/SplashScreen";
import HomePage from "./src/components/HomePage";

import { AuthContext } from "./src/components/auth/context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function App() {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    email: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETREIVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(
    () => ({
      login: async (email, password) => {
        // setUserToken("abcd");
        // setIsLoading(false);
        let userToken;
        email = null;
        /**Later user, pass and abcd will be fetched from the database */
        if (email == "email" && password == "pass") {
          userToken = "abcd";
          try {
            await AsyncStorage.setItem("userToken", userToken);
          } catch (error) {
            console.log(error);
          }
        }
        dispatch({ type: "LOGIN", id: email, token: userToken });
      },
      signOut: async () => {
        // setUserToken(null);
        // setIsLoading(false);
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (error) {
          console.log(error);
        }
        dispatch({ type: "LOGOUT" });
      },
      signUp: () => {
        setUserToken("abcd");
        setIsLoading(false);
      },
    }),
    []
  );

  React.useEffect(() => {
    setTimeout(async () => {
      //setIsLoading(false);
      let userToken;
      userToken = null;

      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (error) {
        console.log(error);
      }

      dispatch({ type: "RETREIVE_TOKEN", token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return <SplashScreen />;
  }
  return (
    <AuthContext.Provider value={authContext}>
      <SafeAreaProvider>
        <NavigationContainer>
          {loginState.userToken != null ? <HomePage /> : <LandingPage />}
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContext.Provider>
  );
}
