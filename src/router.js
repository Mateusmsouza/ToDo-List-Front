import React from "react";
import {
  BrowserRouter,
  Route,
} from "react-router-dom";

export default function Routes () {
    return (
        <BrowserRouter>
            <switch>
                <Route path="/">
                    <Home/>
                </Route>                
            </switch>
        </BrowserRouter>
    );
}

function Home() {
    return <h2>Login Screen</h2>;
  }