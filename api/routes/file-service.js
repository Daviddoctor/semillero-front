const config = require("../../config/config.json");

const API_BASE_URL = config.services.fileService.url;
const paths = config.services.fileService.paths;

const API_ROUTES = {
    //Image
    uploadImage: `${API_BASE_URL}${paths.uploadImage}`,
    getImages: `${API_BASE_URL}${paths.getImages}`,
};

const api = API_ROUTES;

export default api;