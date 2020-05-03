/**
 * actions
 */
export const Type = {
    LOGIN: "todolist/authentication/LOGIN",
    LOGOUT: "todolist/authentication/LOGOUT"
};

export const actions = {
    login: (user) => {
        return {
            type: Type.LOGIN,
            user
        };
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