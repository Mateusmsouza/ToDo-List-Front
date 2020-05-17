import axios from 'axios';

const URL_SERVER = 'http://localhost:8080';

export const registration = (name, password ,email) => {
    return axios.post(`${URL_SERVER}/user`, {
        name,
        password,
        email
    })
}