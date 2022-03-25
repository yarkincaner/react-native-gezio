import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LandingPage from "./src/components/LandingPage";
import RegisterPage from "./src/components/RegisterPage";
import SplashScreen from "./src/components/SplashScreen";

import { AuthContext } from "./src/components/auth/context";
import HomePage from "./src/components/HomePage";
import LoginPage from "./src/components/LoginPage";

const Stack = createNativeStackNavigator();

export default function App() {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
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
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
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
      login: (userName, password) => {
        // setUserToken("abcd");
        // setIsLoading(false);
        let userToken;
        userName = null;
        /**Later user, pass and abcd will be fetched from the database */
        if (userName == "user" && password == "pass") {
          userToken = "abcd";
        }
        dispatch({ type: "LOGIN", id: userName, token: userToken });
      },
      signOut: () => {
        // setUserToken(null);
        // setIsLoading(false);
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
    setTimeout(() => {
      //setIsLoading(false);
      dispatch({ type: "RETREIVE_TOKEN", token: "abcd" });
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
