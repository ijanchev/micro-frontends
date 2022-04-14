import React from "react";
import SignIn from "./Signin";
import SignUp from "./Signup";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route path="/auth/signin" component={SignIn} />
      <Route path="/auth/signup" component={SignUp} />
    </Switch>
  );
};

export default Routes;
