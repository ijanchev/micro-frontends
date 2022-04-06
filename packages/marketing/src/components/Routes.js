import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Pricing from "./Pricing";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/pricing" component={Pricing} />
      <Route path="/" component={Landing} />
    </Switch>
  );
};

export default Routes;
