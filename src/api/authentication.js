import axios from 'axios';
import { URL_SERVER } from "./server";

export const login = (username, password) => {
    return axios({
        method: 'post',
        url: `${URL_SERVER}/login`,
        data: {
            username,
            password
        }
    })
}