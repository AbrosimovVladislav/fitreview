const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

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

    async post(endpoint: string, body: any) {
        try {
            const response = await fetch(`${BASE_URL}${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                throw new Error(`POST ${endpoint} failed: ${response.status}`);
            }
            return JSON.parse(JSON.stringify(await response.json())); // Гарантируем JSON
        } catch (error) {
            console.error(`API POST Error: ${error}`);
            throw error;
        }
    },
};
