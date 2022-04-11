import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import MarketingApp from "./MarketingApp";

const generateClassName = createGenerateClassName({
  productionPrefix: "con",
});

const App = () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header signedIn={false} onSignOut={() => console.log("sign out")} />
        <MarketingApp />
      </BrowserRouter>
    </StylesProvider>
  );
};

export default App;
