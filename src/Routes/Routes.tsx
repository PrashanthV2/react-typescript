import React from 'react'
import { Dashboard } from '../Components/Dashboard';
import { Login } from '../Components/Login';
import { SignUp } from "../Components/SignUp";
import {Switch, Route} from "react-router-dom"


export const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/dashboard">
                <Dashboard/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route> 
                <Route path="/">
                   <SignUp/>
                </Route>
            </Switch>
        </>
    )
}
