import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1';

export const getRequest = async (endpoint, params = {}) => {
    try {
        const response = await axios.get(`${BASE_URL}${endpoint}`, { params });
        return response.data;
    } catch (error) {
        console.error('[API Service] Error in GET request:', error);
        throw new Error(error);
    }
};