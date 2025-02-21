import axios from 'axios';
import {auth} from "@/firebase";
import {getIdToken} from "firebase/auth";
import {API_URL} from "@/config";

const BASE_URL = API_URL;

export const getRequest = async (endpoint, params = {}) => {
    console.log(BASE_URL)
    try {
        const response = await axios.get(`${BASE_URL}${endpoint}`, { params });
        return response.data;
    } catch (error) {
        console.error('[API Service] Error in GET request:', error);
        throw new Error(error);
    }
};

export const postRequest = async (endpoint, data = {}, config = {}) => {
    console.log(BASE_URL)
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
    console.log(BASE_URL)
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
    console.log(BASE_URL)
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