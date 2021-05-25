import axios from 'axios';

const baseUrl = `https://localhost:5001/api/owners`;

export const create = (payload) => {
    axios.post(baseUrl, payload)
        .then(console.log('Created!'))
        .catch(console.log('error'));
}
