import axios from 'axios';

const API = process.env.REACT_APP_PHOTO_KEY

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${API}`
    }

})