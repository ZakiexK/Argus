import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Auth endpoints
export const authApi = {
    // Basic Auth demo
    testBasicAuth: async (username: string, password: string) => {
        const credentials = btoa(`${username}:${password}`);
        return api.post('/api/auth/basic', null, {
            headers: {
                Authorization: `Basic ${credentials}`,
            },
        });
    },

    // Vulnerable endpoint (for CTF)
    testVulnerableAuth: async (username: string, password: string) => {
        const credentials = btoa(`${username}:${password}`);
        return api.get('/api/auth/basic/vulnerable', {
            headers: {
                Authorization: `Basic ${credentials}`,
            },
        });
    },
};

// Challenge endpoints
export const challengeApi = {
    getChallenges: async () => {
        return api.get('/api/challenges');
    },

    submitFlag: async (challengeId: string, flag: string) => {
        return api.post(`/api/challenges/${challengeId}/submit`, { flag });
    },
};

// Progress endpoints
export const progressApi = {
    getUserProgress: async (userId: string) => {
        return api.get(`/api/progress/${userId}`);
    },

    updateProgress: async (userId: string, module: string) => {
        return api.post(`/api/progress/${userId}/update`, { module });
    },
};
