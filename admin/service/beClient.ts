// const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
//
const BASE_URL = "https://fit-review-444116-633533964999.europe-north1.run.app";

export const beClient = {
    async get(endpoint: string) {
        try {
            const response = await fetch(`${BASE_URL}${endpoint}`);
            if (!response.ok) {
                throw new Error(`GET ${endpoint} failed: ${response.status}`);
            }
            return JSON.parse(JSON.stringify(await response.json())); // Гарантируем JSON
        } catch (error) {
            console.error(`API GET Error: ${error}`);
            throw error;
        }
    },

    async post(endpoint: string, body: any, isFormData = false) {
        try {
            const headers: HeadersInit = isFormData ? {} : {"Content-Type": "application/json"};

            const response = await fetch(`${BASE_URL}${endpoint}`, {
                method: "POST",
                headers,
                body: isFormData ? body : JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error(`POST ${endpoint} failed: ${response.status}`);
            }

            // Проверяем, есть ли JSON в ответе
            const contentType = response.headers.get("Content-Type");
            if (contentType && contentType.includes("application/json")) {
                return response.json();
            }

            // Если контент не JSON, просто возвращаем null (или true, если нужно)
            return null;
        } catch (error) {
            console.error(`API POST Error: ${error}`);
            throw error;
        }
    },

    async put(endpoint: string, body: any) {
        try {
            const response = await fetch(`${BASE_URL}${endpoint}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error(`PUT ${endpoint} failed: ${response.status}`);
            }

            // Проверяем, есть ли JSON в ответе
            const contentType = response.headers.get("Content-Type");
            if (contentType && contentType.includes("application/json")) {
                return response.json();
            }

            return null; // PUT-запрос может не возвращать данные
        } catch (error) {
            console.error(`API PUT Error: ${error}`);
            throw error;
        }
    },

    async delete(endpoint: string) {
        try {
            const response = await fetch(`${BASE_URL}${endpoint}`, {method: "DELETE"});

            if (!response.ok) {
                throw new Error(`DELETE ${endpoint} failed: ${response.status}`);
            }

            return null; // DELETE-запрос обычно не возвращает данные
        } catch (error) {
            console.error(`API DELETE Error: ${error}`);
            throw error;
        }
    }
};
