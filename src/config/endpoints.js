const API = {
    ENDPOINT: {
        BASE: 'localhost:3001',
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
