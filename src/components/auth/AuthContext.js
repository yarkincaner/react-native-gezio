import createDataContext from "./createDataContext";
import AsyncStorageLib from "@react-native-async-storage/async-storage";

const authReducer = (state, action) => {
  switch (action.type) {
    case "retreive_token":
      return {
        ...state,
        token: action.payload.token,
        isLoading: false,
      };
    case "logout":
      return {
        ...state,
        token: null,
        email: "",
      };
    case "login":
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email,
      };
    case "signup":
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email,
      };
  }
};

const retreive_token = (dispatch) => {
  return async () => {
    console.log("RETREIVE_TOKEN");

    let token;
    token = null;
    try {
      token = await AsyncStorageLib.getItem("userToken");
    } catch (error) {
      console.log(error);
    }
    dispatch({
      type: "retreive_token",
      payload: {
        token: token,
        email: "",
        isLoading: false,
      },
    });
  };
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    console.log("Signup");
    dispatch({
      type: "signup",
      payload: {
        token: "abcd",
        email: email,
        isLoading: false,
      },
    });
  };
};

const login = (dispatch) => {
  return async ({ email, password }) => {
    // Do some API Request here
    console.log("Login");

    let token;
    token = null;
    if (email == "email" && password == "pass") {
      token = "abcd";
      await AsyncStorageLib.setItem("userToken", token);
      dispatch({
        type: "login",
        payload: {
          token: token,
          email: email,
          isLoading: false,
        },
      });
    } else {
      console.log(
        `Authentication failed! Email: ${email} Password: ${password}`
      );
    }
  };
};

const logout = (dispatch) => {
  return async () => {
    try {
      await AsyncStorageLib.removeItem("userToken");
    } catch (error) {
      console.log(error);
    }

    dispatch({ type: "logout" });
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { retreive_token, login, logout, signup },
  { token: null, email: "", isLoading: true }
);
