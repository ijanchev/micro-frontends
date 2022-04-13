import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import MarketingApp from "./MarketingApp";

const Dashboard = () => <h1>Dashboard</h1>;
const Auth = () => <h1>Auth</h1>;

const Routes = () => {
  return (
    <Switch>
      <Route path="/auth" component={Auth} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route path="*" component={MarketingApp} />
    </Switch>
  );
};

export default Routes;
