export const ENV = process.env.EXPO_ENV || 'prod';

const config = {
    local: {
        API_URL: 'http://localhost:8080/api/v1',
    },
    test: {
        API_URL: 'https://fit-review-444116-633533964999.europe-north1.run.app/api/v1',
    },
    prod: {
        API_URL: 'https://fit-review-444116-633533964999.europe-north1.run.app/api/v1',
    }
};

export const API_URL = config[ENV]?.API_URL || config.prod.API_URL;