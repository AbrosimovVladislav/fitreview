import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/v1';
// const BASE_URL = 'https://fit-review-444116-633533964999.europe-north1.run.app/api/v1';

export const getRequest = async (endpoint, params = {}) => {
    try {
        const response = await axios.get(`${BASE_URL}${endpoint}`, { params });
        return response.data;
    } catch (error) {
        console.error('[API Service] Error in GET request:', error);
        throw new Error(error);
    }
};

export const postRequest = async (endpoint, data = {}, config = {}) => {
    try {
        const response = await axios.post(`${BASE_URL}${endpoint}`, data, config);
        return response.data;
    } catch (error) {
        console.error('[API Service] Error in POST request:', error);
        throw new Error(error);
    }
};