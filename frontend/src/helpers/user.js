import {UserRolesEntities} from "../settings/roles/userRoles.ts";

export function checkLocalStorage() {
    if (localStorage.getItem("user") !== null) {
        let userFromStorage = JSON.parse(localStorage.getItem('user'));
        if (userFromStorage.token !== undefined && userFromStorage.role !== undefined) {
            return {
                token: userFromStorage.token,
                role: userFromStorage.role.toString().toLowerCase()
            }
        }
    }
    return {
        token: "",
        role: String(UserRolesEntities.anon)
    }
}
