import { 
    createCard as create
 } from "../../api/card";

/**
 * actions
 */
export const Type = {
    CREATE: "todolist/card/CREATE"
};

export const createCard = card => {
    console.log("inside action");
    return dispatch => {
        console.log("inside dispatch");
        create(card)
        .then( response => {
            dispatch({
                type: Type.CREATE, 
            })
        })
        .catch( err => {
            console.log(err.message)
            dispatch({
                type: Type.CREATE,
                apiErrors: err.message
            })
        })
    }
}

/**
 * reducer
 */

 const INITIAL_STATE = {
     cards: [],
     apiErrors: ""
 }

 export default function reducerCard(state = INITIAL_STATE, action){
     switch (action.type) {
         case Type.CREATE:
             return {
                ...state,
                cards: action.cards,
                apiErrors: action.apiErrors
             }
     
         default:
            return {
                ...state
            };
     }
 }