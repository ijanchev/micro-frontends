import React from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";

const generateClassName = createGenerateClassName({
  productionPrefix: "con",
});

const AppProviders = ({ children }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>{children}</BrowserRouter>
    </StylesProvider>
  );
};

export default AppProviders;
