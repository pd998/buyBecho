import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import ProductForm from "./components/Form";
import { useLocation, useHistory } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";

const RoutePage = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (pathname.split("/")[1] === "profile" && !pathname.split("/")[2]) {
      history.push("/profile/accountdetails");
    }
  }, [pathname]);

  return (
    <Switch>
      <ProtectedRoute path="/addproduct">
        <Navbar />
        <ProductForm />
      </ProtectedRoute>
      <ProtectedRoute path="/profile">
        <Navbar />
        <Profile search={search} />
      </ProtectedRoute>
      <ProtectedRoute path="/product">
        <Navbar search={search} setSearch={setSearch} />
        <Main search={search} />
      </ProtectedRoute>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </Switch>
  );
};

export default RoutePage;
