import React from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { Router } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

const generateClassName = createGenerateClassName({
  productionPrefix: "aut",
});

const AppProviders = ({ children, history, auth }) => {
  return (
    <AuthProvider auth={auth}>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>{children}</Router>
      </StylesProvider>
    </AuthProvider>
  );
};

export default AppProviders;
