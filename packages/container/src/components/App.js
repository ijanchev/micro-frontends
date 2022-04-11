import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import MarketingApp from "./MarketingApp";

const App = () => {
  return (
    <BrowserRouter>
      <Header signedIn={false} onSignOut={() => console.log("sign out")} />
      <MarketingApp />
    </BrowserRouter>
  );
};

export default App;
