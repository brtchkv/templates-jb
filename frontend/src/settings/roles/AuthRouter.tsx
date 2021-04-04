import React, {useContext} from 'react';
import {Redirect, Route, RouteComponentProps} from 'react-router-dom';
import {NonAuthRoutes} from "../urls/pathTypes";
import {userContext} from "../user/userContext";
import {userRoles} from "./userRoles";

interface PrivateRouterProps {
    component: React.FC<RouteComponentProps> | React.ComponentType<any>,
    path: string | Array<string>,
    exact?: boolean,
    requiredRoles: Array<string>
}

const PrivateRoute = ({ component: Component, path, exact = false, requiredRoles, ...rest }: PrivateRouterProps): JSX.Element => {
    const {user} =  useContext(userContext);
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
            (userHasRequiredRole)
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
