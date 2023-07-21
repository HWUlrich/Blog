import axios from 'axios';

const blogFetch = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        "content-type": "aplication-json"
    }
});

export default blogFetch;