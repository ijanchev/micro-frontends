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
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <AuthProvider>{children}</AuthProvider>
      </BrowserRouter>
    </StylesProvider>
  );
};

export default AppProviders;
