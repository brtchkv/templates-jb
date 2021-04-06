import Axios, {AxiosResponse} from 'axios';
import apiUrl from "./apiURLs";
import {FileWithPath} from 'file-selector';
import {User} from "../../settings/user/userContext";

export const login = (
    username: string,
    password: string
): Promise<AxiosResponse> => {
    const body = JSON.stringify({username, password});
    return Axios.post(apiUrl.auth.signIn, body, {
        headers: {
            "Content-Type": "application/json"
        }
    });
};

export const checkToken = (
    token: string
): Promise<AxiosResponse> => {
    return Axios.get(apiUrl.auth.validateToken, {
        headers: {
            "X-Authentication": token
        }
    });
};

export const getAllStatDataCount = (
    context: User
): Promise<AxiosResponse> => {
    const authHeaders = apiUrl.buildAuthHeaders(context);
    return Axios.get(apiUrl.statistics.countAll, {
        headers: {
            "X-Authentication": authHeaders
        }
    });
};

export const getFilteredStatData = (
    context: User,
    range: string,
    date: string
): Promise<AxiosResponse> => {
    const authHeaders = apiUrl.buildAuthHeaders(context);
    return Axios.get(apiUrl.statistics.filtered, {
        params: {
            range: range,
            date: date
        },
        headers: {
            "X-Authentication": authHeaders
        }
    });
};

export const uploadCSV = (
    file: FileWithPath,
    context: User
): Promise<AxiosResponse> => {
    const authHeaders = apiUrl.buildAuthHeaders(context);
    const formData = new FormData();
    formData.append(`file`, file);
    return Axios.post(apiUrl.uploaderUrl.uploadCSV, formData, {
        headers: {
            "X-Authentication": authHeaders
        }
    });
};

export function logOut() {
    localStorage.removeItem('user');
}
