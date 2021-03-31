const baseURL = "http://localhost:8080/";

export function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    };
    return fetch(baseURL + "login", requestOptions).then(res => res.json());
}

export function validateUserToken(token) {
    //TODO:реальная проверка токена на валидность и уровень доступа (доделать на бэке)
    return true;
}

export function logOut() {
    localStorage.removeItem('user');
}

export function getAllStatData(user) {
    const requestOptions = {
        method: 'GET',
        headers: {'X-Authentication': user.token},
    };
    return fetch(baseURL + "statistics/all", requestOptions)
        .then(res => res.json());
}

export function putFile(user, file) {
    let formData = new FormData();
    formData.append(`file`, file);
    const requestOptions = {
        method: 'POST',
        headers: {'X-Authentication': user.token},
        body: formData
    };
    return fetch(baseURL + "upload-csv-file", requestOptions);
}

export function getAllStatDataCount(user) {
    const requestOptions = {
        method: 'GET',
        headers: {'X-Authentication': user.token},
    };
    return fetch(baseURL + "statistics/count", requestOptions)
        .then(res => res.json());
}

export function getFilteredStatData(user, range, date) {
    const requestOptions = {
        method: 'GET',
        headers: {'X-Authentication': user.token},
    };

    let url = `statistics?` +
        `&range=${range}` +
        `&date=${date}`;

    return fetch(baseURL + url, requestOptions)
        .then(res => res.json());
}
