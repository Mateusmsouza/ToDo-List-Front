import { login as loginRequest } from "../../api/authentication";

/**
 * actions
 */
export const Type = {
    LOGIN: "todolist/authentication/LOGIN",
    LOGOUT: "todolist/authentication/LOGOUT"
};


export const login = user => {
        console.log("outside dispatch");
        return (dispatch, getState) => {
            console.log("inside dispatch");
            console.log(dispatch);
            return loginRequest(user.username, user.password)
            .then( response => {
                console.log(response)
                dispatch({
                    type: Type.LOGIN,
                    user: response.data,
                    key: response.headers.token
                })
            })
            .catch( err => dispatch({type: Type.LOGIN}))
        }  
}

export const logout = () => {
        return dispatch =>  dispatch({type: Type.LOGOUT})
}

/**
 * reducer
 */
const INITIAL_STATE = {
    key: '',
    user: {}
}

export default function reducerAuthentication(state = INITIAL_STATE, action){
    console.log(`reducer called by action ${action}`);
    console.log(action)
    switch(action.type){
 
        case Type.LOGIN: {
            console.log("login stuff")
            return {
                ...state,
                user: action.user,
                key: action.key || ''
            }
        }

        case Type.LOGOUT: {
            return {
                ...state
            }
        }
        
        default: {
            console.log("default stuff")
            return state;}
    }
}