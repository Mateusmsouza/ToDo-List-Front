import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './ducks';
import thunkMiddleware from "redux-thunk";

const store = createStore(reducers, {}, compose(applyMiddleware(thunkMiddleware))
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;