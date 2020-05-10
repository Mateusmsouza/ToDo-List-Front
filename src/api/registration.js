import axios from 'axios';

const URL_SERVER = 'http://127.0.0.1:8080';

export const registration = (user) => {
    return axios({
        method: 'post',
        url: `${URL_SERVER}/user`,
        data: {
            username: user.username,
            password: user.password,
            email: user.email
        }
    })
}