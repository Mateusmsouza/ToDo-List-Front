import axios from 'axios';
import { URL_SERVER } from "./server";

export const createCard = card => {
    const key = localStorage.getItem("key");

    return axios.post(`${URL_SERVER}/card`, {
        name: card.name,
        description: card.description,
        blockerCard: card.blockerCard
    }, 
    {headers: {
        'Content-Type': 'json/application',
        Authorization: `Bearer ${key}`
    }})
}