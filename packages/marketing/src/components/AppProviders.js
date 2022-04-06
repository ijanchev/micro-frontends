import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";

const AppProviders = ({ children }) => {
  return (
    <StylesProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </StylesProvider>
  );
};

export default AppProviders;
