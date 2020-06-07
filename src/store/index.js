import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './ducks';
import thunk from "redux-thunk";


const enhancer = () => {
    // , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    return compose(applyMiddleware(thunk));
}

const store = createStore(reducers, enhancer());

export default store;