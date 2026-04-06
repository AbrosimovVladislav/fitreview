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
                    ? 'http://localhost:3000/api/v1'
                    : process.env.EXPO_ENV === 'test'
                        ? 'https://fit-review-444116-633533964999.europe-north1.run.app/api/v1'
                        : 'https://fit-review-444116-633533964999.europe-north1.run.app/api/v1',
            SUPABASE_URL: process.env.SUPABASE_URL || 'https://qgtliqdbptmbnhlzeuev.supabase.co',
            SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFndGxpcWRicHRtYm5obHpldWV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUzOTk3NDksImV4cCI6MjA5MDk3NTc0OX0.0vzIH9zREsMHpsGBI8I6QbJNbyhjkCC858hkMsByL64',
        },
    };
};
