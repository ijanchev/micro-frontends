import React from "react";
import AppProviders from "./AppProviders";
import Header from "./Header";
import MarketingApp from "./MarketingApp";

const App = () => {
  return (
    <AppProviders>
      <Header />
      <MarketingApp />
    </AppProviders>
  );
};

export default App;
