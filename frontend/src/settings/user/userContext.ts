import React, {Dispatch, SetStateAction} from 'react';
import {UserRolesEntities} from "../roles/userRoles";

export interface UserCredentials {
    token: string,
    role: string
}

export interface User {
    user: {
        token: string,
        role: string
    },
    setUser: Dispatch<SetStateAction<UserCredentials>>
}

export const userContext = React.createContext<User>({
    user: {
        token: "",
        role: String(UserRolesEntities.anon)
    },
    setUser: () => {}
});
