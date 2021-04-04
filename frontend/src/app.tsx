import React, { useState} from 'react';
import DashBoard from './pages/private/dashboard/DashBoard'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from "./components/header/Header";
import AuthForm from "./pages/public/login/AuthForm";
import PageNotFound from "./pages/stubs/PageNotFound";
import {userContext, UserCredentials} from './settings/user/userContext';
import {AuthRoutes, NonAuthRoutes} from "./settings/urls/pathTypes";
import {UserRolesEntities} from "./settings/roles/userRoles";
import PrivateRoute from "./settings/roles/AuthRouter";
import {checkLocalStorage} from "./helpers/user";
import {GlobalStyles} from "./core-styles/global";
import {ThemeProvider} from 'styled-components';
import {useTheme} from "./core-styles/theme/useTheme";

const Profile = React.lazy(/* profile */() => import('./pages/private/profile/Profile'));

function App() {
    const [loginUser, setLoginUser] = useState<UserCredentials>(checkLocalStorage());
    const [theme, setTheme] = useTheme();

    const value = {
        user: loginUser,
        setUser: setLoginUser
    };

    const themeController = {
        theme: theme,
        setTheme: setTheme
    };

    return (
        <BrowserRouter>
            <ThemeProvider theme={themeController.theme}>
                <>
                    <GlobalStyles/>
                        <userContext.Provider value={value}>
                            <div className="plp-theme">
                                <Header themeController={themeController}/>
                                <Switch>
                                    <PrivateRoute path={AuthRoutes.profile} component={Profile}
                                                  requiredRoles={[String(UserRolesEntities.student), String(UserRolesEntities.basic)]}/>
                                    <PrivateRoute path={[NonAuthRoutes.login, NonAuthRoutes.register]}
                                                  component={AuthForm}
                                                  requiredRoles={[String(UserRolesEntities.anon)]}/>
                                    <PrivateRoute exact path={NonAuthRoutes.landing} component={DashBoard}
                                                  requiredRoles={[String(UserRolesEntities.student), String(UserRolesEntities.basic)]}/>
                                    <Route component={PageNotFound}/>
                                </Switch>
                            </div>
                        </userContext.Provider>
                </>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
