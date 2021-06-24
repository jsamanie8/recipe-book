import axios from 'axios';

const globalSuccess = response => {
    return response.data;
}

const globalError = error => {
    return Promise.reject(error);
}

export {
    globalSuccess,
    globalError
}