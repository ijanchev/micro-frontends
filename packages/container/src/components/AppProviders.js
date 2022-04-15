import React from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

const generateClassName = createGenerateClassName({
  productionPrefix: "con",
});

const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>{children}</BrowserRouter>
      </StylesProvider>
    </AuthProvider>
  );
};

export default AppProviders;
