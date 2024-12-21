import axios from 'axios';
import {auth} from "@/firebase";
import {getIdToken} from "firebase/auth";

// const BASE_URL = 'http://localhost:8080/api/v1';
const BASE_URL = 'https://fit-review-444116-633533964999.europe-north1.run.app/api/v1';

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

// Защищённые GET-запросы
export const secureGetRequest = async (endpoint, params = {}) => {
    try {
        const user = auth.currentUser;
        if (!user) {
            throw new Error("User is not authenticated");
        }
        const idToken = await getIdToken(user);

        const response = await axios.get(`${BASE_URL}${endpoint}`, {
            params,
            headers: {
                Authorization: `Bearer ${idToken}`, // Добавляем токен в заголовок
            },
        });
        return response.data;
    } catch (error) {
        console.error("[API Service] Error in SECURE GET request:", error);
        throw new Error(error);
    }
};

// Защищённые POST-запросы
export const securePostRequest = async (endpoint, data = {}, config = {}) => {
    try {
        // Получаем текущий idToken
        const user = auth.currentUser;
        if (!user) {
            throw new Error("User is not authenticated");
        }
        const idToken = await getIdToken(user);

        const response = await axios.post(`${BASE_URL}${endpoint}`, data, {
            ...config,
            headers: {
                Authorization: `Bearer ${idToken}`, // Добавляем токен в заголовок
                ...config?.headers,
            },
        });
        return response.data;
    } catch (error) {
        console.error("[API Service] Error in SECURE POST request:", error);
        throw new Error(error);
    }
};