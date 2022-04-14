import React from "react";
import { Route, Switch } from "react-router-dom";
import ProgressBar from "./ProgressBar";
const AuthApp = React.lazy(() => import("./AuthApp"));
const MarketingApp = React.lazy(() => import("./MarketingApp"));

const Dashboard = () => <h1>Dashboard</h1>;

const Routes = () => {
  return (
    <React.Suspense fallback={<ProgressBar />}>
      <Switch>
        <Route path="/auth" component={AuthApp} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="*" component={MarketingApp} />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
