import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    case "logout":
      return { token: null, email: "" };
    case "login":
      return {
        token: action.payload.token,
        email: action.payload.email,
      };
    case "signup":
      return {
        token: action.payload.token,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    console.log("Signup");
  };
};

const login = (dispatch) => {
  return ({ email, password }) => {
    // Do some API Request here
    console.log("Login");
    dispatch({
      type: "login",
      payload: {
        token: "some access token here",
        email: email,
      },
    });
  };
};

const logout = (dispatch) => {
  return () => {
    dispatch({ type: "logout" });
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { login, logout, signup },
  { token: null, email: "" }
);
