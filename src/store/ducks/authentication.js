const Type = {
    LOGIN: "todolist/authentication/LOGIN",
    LOGOUT: "todolist/authentication/LOGOUT"
};

const INITIAL_STATE = {
    key: '',
    user: {}
}

const actions = {
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

export default function reducerAuthentication(state = INITIAL_STATE, action){

    switch(action.type){
 
        case(Type.LOGIN): {
            return {
                ...state
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