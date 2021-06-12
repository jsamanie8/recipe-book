import axios from 'axios';

const baseUrl = `https://localhost:5001/api/users`;

export const create = (payload) => {
    return axios.post(baseUrl, payload)
        .then(res => { return res })
        .catch(err => { return err });
}