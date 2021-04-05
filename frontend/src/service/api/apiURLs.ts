const configs = {
    development: {
        SERVER_URI: 'http://localhost:8080',
    },
    production: {
        SERVER_URI: 'https://fls-bratchikov.herokuapp.com',
    },
};

const isProduction = process.env.NODE_ENV === 'production';

import {User} from "../../settings/user/userContext";

const BASE_API_URL = isProduction ? configs.production.SERVER_URI :  configs.development.SERVER_URI;

let baseUrlApp = `${BASE_API_URL}`;

const apiUrl: any = {
    uploaderUrl: {
        uploadCSV: `${baseUrlApp}/upload-csv-file`, // POST
    },
    auth: {
        signIn: `${baseUrlApp}/auth/login`, // GET
        signUp: `${baseUrlApp}/auth/signup`, // TO BE RELEASED
        validateToken: `${baseUrlApp}/auth/validate_token`, // TO BE RELEASED
    },
    statistics: {
        all: `${baseUrlApp}/statistics/all`, // GET
        filtered: `${baseUrlApp}/statistics`, // GET
        countAll: `${baseUrlApp}/statistics/count`, // GET
    },
    buildAuthHeaders: (context: User) => {
        return context.user.token
    }
};

export default apiUrl;
