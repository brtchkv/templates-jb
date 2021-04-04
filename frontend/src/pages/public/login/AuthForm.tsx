import TabContainer from "react-bootstrap/TabContainer";
import Login from "../../../components/auth-form/Login";
import {Link, RouteComponentProps, withRouter} from "react-router-dom";
import "./styles/Auth.css"
import {Tab} from 'react-bootstrap';
import {NonAuthRoutes} from "../../../settings/urls/pathTypes";
import {AuthImageContainer, AuthImageLogo, AuthPanelStyled, Lable} from "./styles/styles";
import jb from "../../../components/header/styles/jetbrains.svg";
import {useTranslation} from "react-i18next";

type PathParamsType = {
    path: string,
}

function AuthForm(props: RouteComponentProps<PathParamsType>) {
    const activeTab = props.match.path === NonAuthRoutes.login ? "login" : "register";
    const {t} = useTranslation();

    return (
        <div className="login-page container">
            <AuthPanelStyled className="login-form">
                <div className="login-form-header">
                    <TabContainer defaultActiveKey={activeTab}>
                        <AuthImageContainer>
                            <AuthImageLogo className="company-logo" recolor={true}
                                           src={jb}/>
                        </AuthImageContainer>
                        <Tab.Content className="login-form-body">
                            <Tab.Pane eventKey="login">
                                <Login/>
                            </Tab.Pane>
                        </Tab.Content>
                    </TabContainer>
                </div>
            </AuthPanelStyled>
            <div className="to_registration-wrapper">
                <div className="login-section">
                    <Lable><span>{t('auth.firstTime')}</span></Lable>
                    <Link to={NonAuthRoutes.register}>{t('auth.registerMe')}</Link>
                </div>
            </div>
        </div>
    );

}

export default withRouter(AuthForm);
