import axios from 'axios';
import { URL_SERVER } from "./server";

export const createCard = card => {
    const key = localStorage.getItem("key");
    console.log('key used', key);
    return axios.post(`${URL_SERVER}/card`, {
        name: card.name,
        description: card.description,
        blockerCard: card.blockerCard
    }, 
    {headers: {
        Authorization: `Bearer ${key}`
    }})
}