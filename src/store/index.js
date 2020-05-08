import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './ducks';
import thunk from "redux-thunk";


const enhancer = () => {
    return compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}

const store = createStore(reducers, enhancer());

export default store;