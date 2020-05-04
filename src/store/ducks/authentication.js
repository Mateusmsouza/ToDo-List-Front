import { login } from "../../api/authentication";

/**
 * actions
 */
export const Type = {
    LOGIN: "todolist/authentication/LOGIN",
    LOGOUT: "todolist/authentication/LOGOUT"
};

export const actions = {
    login: (user) => {
        console.log(`login user: ${user}`);
        return login(user.username, user.password)
        .then( response => {
            console.log(response);
            return {
                type: Type.LOGIN,
                user: response.data,
                key: response.headers.token
            };
        })

        
    },
    logout: () => {
        return {
            type: Type.LOGOUT
        }
    }
};

/**
 * reducer
 */
const INITIAL_STATE = {
    key: '',
    user: {}
}

export default function reducerAuthentication(state = INITIAL_STATE, action){

    switch(action.type){
 
        case(Type.LOGIN): {
            return {
                ...state,
                user: action.user,
                key: action.key || ''
            }
        }
        case(Type.LOGOUT): {
            return {
                ...state
            }
        }
        
        default: return state;
    }
}