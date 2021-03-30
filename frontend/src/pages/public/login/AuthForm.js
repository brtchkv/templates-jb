import React from 'react';
import TabPane from "react-bootstrap/TabPane";
import Register from "../../../components/auth-form/Register.tsx";
import TabContainer from "react-bootstrap/TabContainer";
import Login from "../../../components/auth-form/Login.tsx";
import {Link, withRouter} from "react-router-dom";
import "./styles/Auth.css"
import {Nav, Tab} from 'react-bootstrap';
import {NonAuthRoutes} from "../../../settings/urls/pathTypes.ts";
import {AuthImageContainer, AuthImageLogo, AuthPanelStyled, AuthPanelTabStyled, Lable} from "./styles/styles";
import jb from "../../include/header/styles/jetbrains.svg";
import Image from "../../../components/image/Image";

class AuthForm extends React.Component {

    render() {
        const activeTab = this.props.match.path === NonAuthRoutes.login ? "login" : "register";
        return (
            <div className="login-page container">
                <AuthPanelStyled className="login-form">
                    <div className="login-form-header">
                        <TabContainer defaultActiveKey={activeTab}>
                            {/*<Nav variant="pills" className="auth-tabs">*/}
                            {/*            <Nav.Item className="tabs">*/}
                            {/*                <AuthPanelTabStyled eventKey="login">Войти</AuthPanelTabStyled>*/}
                            {/*            </Nav.Item>*/}
                            {/*            <Nav.Item className="tabs">*/}
                            {/*                <AuthPanelTabStyled eventKey="register">Регистрация</AuthPanelTabStyled>*/}
                            {/*            </Nav.Item>*/}
                            {/*</Nav>*/}
                            <AuthImageContainer>
                                <AuthImageLogo alt="JetBrains" className="company-logo" recolor={true}
                                       src={jb}/>
                            </AuthImageContainer>
                            <Tab.Content className="login-form-body">
                                <Tab.Pane eventKey="login">
                                    <Login className="login-form-body"/>
                                </Tab.Pane>
                                <TabPane eventKey="register" >
                                    <Register className="login-form-body"/>
                                </TabPane>
                            </Tab.Content>
                        </TabContainer>
                    </div>
                </AuthPanelStyled>
                <div className="to_registration-wrapper">
                    <div className="login-section">
                        <Lable><span>Впервые на платформе?</span></Lable>
                        <Link to={NonAuthRoutes.register}>Создать аккаунт</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(AuthForm);
