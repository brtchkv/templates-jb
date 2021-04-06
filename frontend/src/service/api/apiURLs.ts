import {User} from "../../settings/user/userContext";

const configs = {
    development: {
        SERVER_URI: 'http://localhost:8080',
    },
    production: {
        SERVER_URI: 'https://fls-bratchikov.herokuapp.com',
    },
};

const isProduction = process.env.REACT_APP_API_ENV === 'production';
const BASE_API_URL = (process.env.REACT_APP_API_ENV && isProduction) ? configs.production.SERVER_URI :  configs.development.SERVER_URI;

let baseUrlApp = `${BASE_API_URL}`;

export const apiUrl: any = {
    uploaderUrl: {
        uploadCSV: `${baseUrlApp}/api/upload-csv-file`, // POST
    },
    auth: {
        signIn: `${baseUrlApp}/api/auth/login`, // GET
        signUp: `${baseUrlApp}/api/auth/signup`, // TO BE RELEASED
        validateToken: `${baseUrlApp}/api/auth/validate_token`, // TO BE RELEASED
    },
    statistics: {
        all: `${baseUrlApp}/api/statistics/all`, // GET
        filtered: `${baseUrlApp}/api/statistics`, // GET
        countAll: `${baseUrlApp}/api/statistics/count`, // GET
    },
    buildAuthHeaders: (context: User) => {
        return context.user.token
    }
};

export default apiUrl;
