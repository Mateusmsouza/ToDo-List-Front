import React from "react";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Login from "./screens/Login"

export default function Routes () {
    return (
        <BrowserRouter>
            <switch>
                <Route path="/">
                    <Login/>
                </Route>                
            </switch>
        </BrowserRouter>
    );
}