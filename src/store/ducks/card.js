import { 
    createCard as create,
    ListCards,
    patchCard,
    deleteCardById
 } from "../../api/card";

/**
 * actions
 */
export const Type = {
    CREATE: "todolist/card/CREATE",
    LIST: "todolist/card/LIST",
    PATCH: "todolist/card/UPDATE",
    DELETE: "todolist/card/DELETE",
    UPDATE_SELECTED_CARD: "todolist/card/UPDATE_SELECTED_CARD",
    CLEAN_API_ERRORS: "todolist/card/CLEAN_API_ERRORS"
};

const onUnauthorizedSendToHome = (err) => {
    console.log(err);
    if(err.response.status === 401){
        window.location.href = "/"
    }
} 

export const listUserCards = () => {
    return dispatch => {
        ListCards()
        .then( response => {
            dispatch({
                type: Type.LIST,
                cards: response.data
            })
        })
        .catch( err => {
            onUnauthorizedSendToHome(err);
            const { data } = err.response;
            dispatch({
                type: Type.LIST,
                apiErrors: data.message || err.message
            })
        })
    }
}

export const createCard = card => {
    return dispatch => {
        create(card)
        .then( _ => {
            dispatch(listUserCards());
        })
        .catch( err => {
            onUnauthorizedSendToHome(err);
            const { data } = err.response;
            dispatch(listUserCards())
            dispatch({
                type: Type.CREATE,
                apiErrors: data.message || err.message
            })
        })
    }
}

export const updateCard = card => {
    return dispatch => {
        patchCard(card)
        .then( _ => {
            dispatch(listUserCards());
        })
        .catch( err => {
            onUnauthorizedSendToHome(err);
            const { data } = err.response;
            dispatch({
                type: Type.PATCH,
                apiErrors: data.message || err.message
            })
        })
    }
}

export const deleteCard = id => {
    return dispatch => {
        deleteCardById(id)
        .then( _ => {
            dispatch(listUserCards());
        })
        .catch( err => {
            onUnauthorizedSendToHome(err);
            const { data } = err.response;
            dispatch({
                type: Type.DELETE,
                apiErrors: data.message || err.message
            })
        })
    }
}

export const updateSelectedCard = selectedCard => {
    return {
        type: Type.UPDATE_SELECTED_CARD,
        selectedCard
    };
};

export const cleanApiErrors = () => {
    return {
        type: Type.CLEAN_API_ERRORS,
        apiErrors: ""
    }
}
/**
 * reducer
 */
const baseSelectedCard = {
    name: "",
    description: "",
    status: "",
    blockerCard: {}
}

const INITIAL_STATE = {
     cards: [],
     selectedCard: baseSelectedCard,
     apiErrors: ""
 }

 export default function reducerCard(state = INITIAL_STATE, action){
    switch (action.type) {
        case Type.CREATE:
            return {
                ...state,
                apiErrors: action.apiErrors
            };
        
        case Type.LIST:
            return {
                ...state,
                cards: action.cards,
                apiErrors: action.apiErrors
            };
        
        case Type.PATCH:
            return {
                ...state,
                apiErrors: action.apiErrors
            };
        
        case Type.UPDATE_SELECTED_CARD:
            return {
                ...state,
                selectedCard: action.selectedCard || baseSelectedCard
            };

        case Type.DELETE:
            return {
                ...state,
                apiErrors: action.apiErrors
            };
        
        case Type.CLEAN_API_ERRORS:
            return {
                ...state,
                apiErrors: action.apiErrors
            }
  
          default:
            return state;
    }
 }