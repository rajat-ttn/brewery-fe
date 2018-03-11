const API = {
    ENDPOINT: {
        BASE: 'localhost:3001',
        HOLA: process.env.REACT_APP_API_URL,
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

window.HOLA = process.env.REACT_APP_API_URL;

export default API;
