import { combineReducers } from 'redux'
import reducerAuthentication from './authentication';
import reducerRegistration from "./registration";

export default combineReducers({
    reducerAuthentication,
    reducerRegistration
});