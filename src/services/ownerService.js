import axios from 'axios';
import * as helpers from './helpers';

const baseUrl = `https://localhost:5001/api/owners`;

const create = (payload) => {
    const config = {
        method: 'POST',
        url: `${baseUrl}`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' }
    }

    return axios(config)
        .then(helpers.globalSuccess)
        .catch(helpers.globalError);
}

const login = (payload) => {
    const config = {
        method: 'POST',
        url: `${baseUrl}/login`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: { 'Content-Type': 'application/json' }
    };

    return axios(config)
        .then(helpers.globalSuccess)
        .catch(helpers.globalError);
}

export {
    create,
    login
}
