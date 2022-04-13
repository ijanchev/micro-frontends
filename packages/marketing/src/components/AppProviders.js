import React from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { Router } from "react-router-dom";

const generateClassName = createGenerateClassName({
  productionPrefix: "mar",
});

const AppProviders = ({ children, history }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>{children}</Router>
    </StylesProvider>
  );
};

export default AppProviders;
