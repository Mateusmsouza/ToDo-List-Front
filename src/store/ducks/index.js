import { combineReducers } from 'redux'
import reducerAuthentication from './authentication';
import reducerRegistration from "./registration";
import reducerCard from "./card";

export default combineReducers({
    reducerAuthentication,
    reducerRegistration,
    reducerCard
});