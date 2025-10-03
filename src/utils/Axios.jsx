import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer '
    }
    
})

export default instance