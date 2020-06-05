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
    UPDATE_SELECTED_CARD: "todolist/card/UPDATE_SELECTED_CARD"
};

export const createCard = card => {
    return dispatch => {
        
        if (!card.blockerCard.id){
            card.blockerCard = null;
        }

        create(card)
        .then( _ => {
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
            dispatch({
                type: Type.LIST,
                apiErrors: err.message
            })
        })
    }
}

export const updateCard = card => {
    return dispatch => {
        patchCard(card)
        .then( _ => {
            dispatch({
                type: Type.PATCH
            })
        })
        .catch( err => {
            console.log(err.message);
            dispatch({
                type: Type.PATCH,
                apiErrors: err.message
            })
        })
    }
}

export const deleteCard = id => {
    return dispatch => {
        deleteCardById(id)
        .then( _ => {
            dispatch({
                type: Type.DELETE
            })
        })
        .catch( err => {
            console.log(err.message);
            dispatch({
                type: Type.DELETE,
                apiErrors: err.message
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

        default:
            return state;
    }
 }