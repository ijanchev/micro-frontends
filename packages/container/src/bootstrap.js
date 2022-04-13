import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import AppProviders from "./components/AppProviders";

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);
