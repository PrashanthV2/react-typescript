import React from 'react'
import { Dashboard } from '../features/user/dashboard/container/dashboard';
import { Login } from '../features/user/auth/container/login/login';
import { SignUp } from "../features/user/auth/container/signup";
import { Switch, Route } from "react-router-dom";
import { Details } from '../features/user/dashboard/container/details';
import PrivateRoute from "./privateRoute";

export const Routes = () => {
    return (
      <>
        <Switch>
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/details">
            <Details />
          </Route>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route path="*" component={() => <h1>404 page not found</h1>} />
        </Switch>
      </>
    );
}
