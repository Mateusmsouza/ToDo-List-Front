import React, { Component } from 'react';
import Routes from './router';
import CssBaseline from "@material-ui/core/CssBaseline";

class App extends Component {
    render() {
        return (
            <CssBaseline>
                <div>
                    <Routes/>  
                </div>
            </CssBaseline>
        );      
    }
}

export default App;