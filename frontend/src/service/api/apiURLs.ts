// const isProduction = process.env.REACT_APP_ENV === 'production';
// const isStaging = process.env.REACT_APP_ENV === 'staging';

import {User} from "../../settings/user/userContext";

const BASE_API_URL = process.env.REACT_APP_SERVER_URL;

let baseUrlApp = `${BASE_API_URL}`;

const apiUrl: any = {
    uploaderUrl: {
        uploadCSV: `${baseUrlApp}/upload-csv-file`, // POST
    },
    auth: {
        signIn: `${baseUrlApp}/auth/login`, // GET
        signUp: `${baseUrlApp}/auth/signup`, // TO BE RELEASED
        validateToken: `${baseUrlApp}/auth/validate_token`, // NOT RELEASED
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
