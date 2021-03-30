import React, {useContext} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {NonAuthRoutes} from "../urls/pathTypes.ts";
import {userContext} from "../user/userContext.ts";
import * as API from "../../service/api/serviceAPI.ts";
import {userRoles} from "./userRoles.ts";

const PrivateRoute = ({ component: Component, serverValidation = false, path, exact = false, requiredRoles, ...rest }) => {
    const {user} =  useContext(userContext);
    const isAuth = serverValidation ? API.validateUserToken(user.token) : true;
    const userHasRequiredRole = requiredRoles.includes(user.role);
    const registeredRole = userRoles.registered.includes(user.role);
    const message = userHasRequiredRole ?
        "Авторизируйтесь":
        "У вас нет прав, чтобы посетить эту страницу";
    return (
    <Route
        path={path}
        exact={exact}
        {...rest}
        render={props =>
            (isAuth && userHasRequiredRole)
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: userHasRequiredRole || registeredRole ? NonAuthRoutes.landing
                        : NonAuthRoutes.login
                    ,
                    state: {
                        message,
                        requestedPath: path
                    }
                }}/>
        }
    />
    );
};

export default PrivateRoute;
