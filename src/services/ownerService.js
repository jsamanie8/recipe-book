import axios from 'axios';

const baseUrl = `https://localhost:5001/api/owners`;

export const create = (payload, result) => {
    axios.post(baseUrl, payload)
        .then(
            //TODO, handle the result here.
            //Arrow function.
            (result) => {
                result(result.status);
            }
        )
        .catch(result);
}
