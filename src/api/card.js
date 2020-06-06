import axios from 'axios';
import { URL_SERVER } from "./server";

const getIdNullIfEmptyCardBlocker = card => {
    if(card.blockerCard && card.blockerCard.id) return card.blockerCard
    else return null;
}

export const createCard = card => {
    const key = localStorage.getItem("key");
    return axios.post(`${URL_SERVER}/card`, {
        name: card.name,
        description: card.description,
        blockerCard: getIdNullIfEmptyCardBlocker(card)
    }, 
    {headers: {
        Authorization: `Bearer ${key}`
    }})
}

export const ListCards = () => {
    const key = localStorage.getItem("key");
    return axios.get(`${URL_SERVER}/cards`, 
    {headers: {
        Authorization: `Bearer ${key}`
    }})
}

export const patchCard = card => {
    const key = localStorage.getItem("key");
    return axios.patch(`${URL_SERVER}/card`, {
        id: card.id,
        name: card.name,
        description: card.description,
        blockerCard: getIdNullIfEmptyCardBlocker(card),
        status: card.cardStatus
    }, 
    { headers: {
        Authorization: `Bearer ${key}`
    }})
}

export const deleteCardById = id => {
    const key = localStorage.getItem("key");
    return axios.delete(`${URL_SERVER}/card/${id}`,
    { headers: {
        Authorization: `Bearer ${key}`
    }})
}