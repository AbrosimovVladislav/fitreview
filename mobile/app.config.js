export default ({ config }) => {
    return {
        ...config,
        extra: {
            ...config.extra, // Сохранение остальных extra-данных
            eas: {
                projectId: "937c1fb2-aaf3-4432-9fac-2cbd7d67d9ae"
            },
            API_URL:
                process.env.EXPO_ENV === 'local'
                    ? 'http://localhost:8080/api/v1'
                    : process.env.EXPO_ENV === 'test'
                        ? 'https://fit-review-444116-633533964999.europe-north1.run.app/api/v1'
                        : 'https://fit-review-444116-633533964999.europe-north1.run.app/api/v1',
        },
    };
};
