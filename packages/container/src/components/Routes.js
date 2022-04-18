import React from "react";
import { Route, Switch } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import ProtectedRoute from "./ProtectedRoute";
const AuthApp = React.lazy(() => import("./AuthApp"));
const MarketingApp = React.lazy(() => import("./MarketingApp"));
const DashboardApp = React.lazy(() => import("./DashboardApp"));

const Routes = () => {
  return (
    <React.Suspense fallback={<ProgressBar />}>
      <Switch>
        <Route path="/auth" component={AuthApp} />
        <ProtectedRoute exact path="/dashboard" component={DashboardApp} />
        <Route path="*" component={MarketingApp} />
      </Switch>
    </React.Suspense>
  );
};

export default Routes;
