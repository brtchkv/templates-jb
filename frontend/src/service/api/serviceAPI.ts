const baseURL = "http://localhost:8080/";

export function fetchPageData(path, start, count, filterOptions) {
    let url = baseURL + path + `?` +
        `start=${start}&count=${count}` +
        `&uniFilter=${filterOptions.uniFilter}` +
        `&sortMethodFilter=${filterOptions.sortMethodFilter}` +
        `&courseStatusFilter=${filterOptions.courseStatusFilter}` +
        `&groupFilter=${filterOptions.groupFilter}`;
    return fetch(url).then(res => res.json());
}

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
    console.log("Logged out");
    localStorage.removeItem('user');
}

export function checkRegistration(username, password) {
    //TODO:реальная проверка имейла (доделать на бэке)

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    };

    return fetch(baseURL + "register/check", requestOptions)
        .then(res => res.json());
}

export function filterCoursesBy(preferences) {
    let url = baseURL + `courses?` +
        `start=0&count=2` +
        `&uniFilter=${preferences.uniFilter}` +
        `&sortMethodFilter=${preferences.sortMethodFilter}` +
        `&courseStatusFilter=${preferences.courseStatusFilter}` +
        `&groupFilter=${preferences.groupFilter}`;
    return fetch(url).then(res => res.json());
}

export function getAllStatData(user) {
    const requestOptions = {
        method: 'GET',
        headers: {'X-Authentication': user.token},
    };
    return fetch(baseURL + "statistics/all", requestOptions)
        .then(res => res.json());
}

export function getFilteredStatData(user, preferences) {
    const requestOptions = {
        method: 'GET',
        headers: {'X-Authentication': user.token},
    };

    let url = baseURL + `statistics?` +
        `&range=${preferences.range}` +
        `&date=${preferences.date}`;

    return fetch(baseURL + url, requestOptions)
        .then(res => res.json());
}
