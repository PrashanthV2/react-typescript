import React from 'react'
import { Dashboard } from '../Components/Dashboard';
import { Login } from '../Components/Login';
import { SignUp } from "../Components/SignUp";
import {Switch, Route} from "react-router-dom"
import { Details } from '../Components/Details';


export const Routes = () => {
    return (
      <>
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/details">
            <Details/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <SignUp />
          </Route>
        </Switch>
      </>
    );
}
