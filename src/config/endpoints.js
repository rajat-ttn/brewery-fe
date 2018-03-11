const API = {
    ENDPOINT: {
        BASE: process.env.REACT_APP_API_URL || 'localhost:3001',
        DOMAIN: 'http',
        VERSION: '/api',
        DASHBOARD: {
            getBeer: {
                url: "/beers",
                method: "get"
            },
        },
    },
};

export default API;
