import axios from 'axios';
import {supabase} from "@/supabase";
import {API_URL} from "@/config";

const BASE_URL = API_URL;

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

const getAccessToken = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) throw new Error("User is not authenticated");
    return session.access_token;
};

// Secure GET requests
export const secureGetRequest = async (endpoint, params = {}) => {
    try {
        const token = await getAccessToken();
        const response = await axios.get(`${BASE_URL}${endpoint}`, {
            params,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("[API Service] Error in SECURE GET request:", error);
        throw new Error(error);
    }
};

// Secure POST requests
export const securePostRequest = async (endpoint, data = {}, config = {}) => {
    try {
        const token = await getAccessToken();
        const response = await axios.post(`${BASE_URL}${endpoint}`, data, {
            ...config,
            headers: {
                Authorization: `Bearer ${token}`,
                ...config?.headers,
            },
        });
        return response.data;
    } catch (error) {
        console.error("[API Service] Error in SECURE POST request:", error);
        throw new Error(error);
    }
};
