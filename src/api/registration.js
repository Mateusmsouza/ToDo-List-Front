import axios from 'axios';
import { URL_SERVER } from "./server";

export const registration = (name, password ,email) => {
    return axios.post(`${URL_SERVER}/user`, {
        name,
        password,
        email
    })
}