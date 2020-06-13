import { registration } from "../../api/registration";

/**
 * actions
 */
export const Type = {
    REGISTER: "todolist/registration/REGISTER"
}

export const register = user => {
    return dispatch => {
        return registration(user.username, user.password, user.email)
        .then( reponse => {
            console.log(reponse)
            dispatch({
                type: Type.REGISTER
            })
            window.location.href="/"
        })
        .catch( err => {
            const { data } = err.response;
            dispatch({
                type: Type.REGISTER,
                apiErrors: data.message || err.message
            })
        })
    }
}

/**
 * reducer
 */

 const INITIAL_STATE = {
     apiErrors: undefined,
 }

export default function reducerRegistration(state = INITIAL_STATE, action){
    switch (action.type){

        case Type.REGISTER:
            return {
                ...state,
                apiErrors: action.apiErrors
            }
     
        default: {
            return {
                ...state
            };
        }
    }
 }