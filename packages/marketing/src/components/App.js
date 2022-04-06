import React from "react";
import AppProviders from "./AppProviders";
import Routes from "./Routes";

const App = () => {
  return (
    <AppProviders>
      <Routes />
    </AppProviders>
  );
};

export default App;
