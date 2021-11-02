import React from 'react'
import { Dashboard } from '../Components/Dashboard/Dashboard';
import { Login } from '../Components/Login/Login';
import { SignUp } from "../Components/SignUp/SignUp";
import { Switch, Route } from "react-router-dom";
import { Details } from '../Components/Dashboard/Details';
import PrivateRoute from "./PrivateRoute";



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
