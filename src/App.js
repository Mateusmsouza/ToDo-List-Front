import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from './router';
import store from './store';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Provider store={store}>
                    <CssBaseline>
                        <div>
                            <Routes/>  
                        </div>
                    </CssBaseline>
                </Provider>
            </div>
        );      
    }
}

export default App;