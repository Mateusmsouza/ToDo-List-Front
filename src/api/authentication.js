import axios from 'axios';

const URL_SERVER = 'http://127.0.0.1:8080';

export const login = (username, password) => {
    console.log("login called")
    return axios({
        method: 'post',
        url: `${URL_SERVER}/login`,
        data: {
            username,
            password
        }
    })
}