import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./screens/Login"
import Home from "./screens/Home";
import Register from "./screens/Register";

export default function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home">
                    <Home></Home>
                </Route>
                
                <Route path="/register">
                    <Register></Register>
                </Route>

                <Route path="/">
                    <Login></Login>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}