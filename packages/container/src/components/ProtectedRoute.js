import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ component: Component, props }) => {
  const { isSignedIn } = useAuthContext();
  if (isSignedIn) return <Route {...props} component={Component} />;
  return <Redirect to="/" />;
};

export default ProtectedRoute;
