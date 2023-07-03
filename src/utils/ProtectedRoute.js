import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useToast } from "@chakra-ui/react";

function ProtectedRoute({ children, ...rest }) {
  const { user } = useContext(AuthContext);
  const toast = useToast();
  return (
    <Route
      {...rest}
      render={() =>
        user.isAuthenticated ? (
          children
        ) : (
          <>
            <Redirect to={{ pathname: "/" }} />
            {toast({
              title: "Login First!!",
              description: "User need to Login!!",
              status: "warning",
              duration: 1500,
              isClosable: true,
            })}
          </>
        )
      }
    />
  );
}

export default ProtectedRoute;
