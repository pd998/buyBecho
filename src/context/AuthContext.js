import React, { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";
import { LOGIN, LOGOUT } from "./Types";

const initialState = {
  isAuthenticated: false,
};

export const AuthContext = createContext(initialState);

export const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const login = (userCred) => {
    return new Promise((resolve, reject) => {
      if (
        userCred.email === "test@buybecho.com" &&
        userCred.password === "test"
      ) {
        setTimeout(() => {
          dispatch({
            type: LOGIN,
          });
          resolve();
        }, 800);
      } else {
        reject();
      }
    });
  };

  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user: state,
        login,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
