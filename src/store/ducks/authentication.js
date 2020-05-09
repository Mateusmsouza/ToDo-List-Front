import { login as loginRequest } from "../../api/authentication";

/**
 * actions
 */
export const Type = {
    LOGIN: "todolist/authentication/LOGIN",
    LOGOUT: "todolist/authentication/LOGOUT"
};


export const login = user => {
        return dispatch => {
            return loginRequest(user.username, user.password)
            .then( response => {
                console.log(response);
                dispatch({
                    type: Type.LOGIN,
                    user: response.data,
                    key: response.headers.token
                })
                window.location.href="/home"
            })
            .catch( err => {
                console.log(err.message)
                dispatch({
                    type: Type.LOGIN,
                    apiErrors: err.message
                })
            })
        }  
}

export const logout = () => {
        return dispatch =>  dispatch({type: Type.LOGOUT})
}

/**
 * reducer
 */
const INITIAL_STATE = {
    key: "",
    user: {},
    apiErrors: ""
}

export default function reducerAuthentication(state = INITIAL_STATE, action){
    switch(action.type){
 
        case Type.LOGIN: {
            return {
                ...state,
                user: action.user,
                key: action.key,
                apiErrors: action.apiErrors
            }
        }

        case Type.LOGOUT: {
            return {
                ...state
            }
        }
        
        default: {
            return {
                ... state
            };
        }
    }
}