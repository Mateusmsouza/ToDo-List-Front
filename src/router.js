import React from "react";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Login from "./screens/Login"

export default function Routes () {
    return (
        <BrowserRouter>
            <Route path="/">
                <Login/>
            </Route>                
        </BrowserRouter>
    );
}