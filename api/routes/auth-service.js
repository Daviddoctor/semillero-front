const config = require("../../config/config.json");

const API_BASE_URL = config.services.authService.url;
const paths = config.services.authService.paths;

const API_ROUTES = {
    login: `${API_BASE_URL}${paths.login}`,
    register: `${API_BASE_URL}${paths.register}`,
};

const api = API_ROUTES;

module.exports = api;