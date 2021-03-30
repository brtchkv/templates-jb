import React, {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import "../../pages/public/login/styles/Auth.css"
import Alert from "react-bootstrap/Alert";
import * as API from "../../service/api/serviceAPI";
import {User, userContext} from "../../settings/user/userContext";
import {AuthPanelButtonStyled, AuthPanelLabelStyled} from "../../pages/public/login/styles/styles";

let pattern = {
    minLength: 8,
    maxLength: 60,
    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
    message: "Введите почтовый адресс в стандартном формате, например, ivan@ivan.ru"
};

let schema = {
    properties: {
        username: {
            maxLength: 255,
            required: true
        },
        password: {
            required: true
        }
    }
};

function Login() {
    const context = useContext<User>(userContext);
    const {register, handleSubmit, errors} = useForm();
    const [loginStatus, setLoginStatus] = useState("");
    const [loginMessage, setLoginMessage] = useState("");

    const onSubmit = (data) => {
        API.login(data.username, data.password)
            .then((response) => {
                if (response.success) {
                    setLoginStatus("success");
                    setLoginMessage("Вход успешен");
                    localStorage.setItem('user', JSON.stringify(response));
                    context.setUser({
                        token: response.token,
                        role: response.role.toString().toLowerCase()
                    });
                } else {
                    setLoginStatus("danger");
                    setLoginMessage("Неправильный пароль или имейл!");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="auth-section">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <AuthPanelLabelStyled>Логин или e-mail:</AuthPanelLabelStyled>
                    <input type="text" name="username"
                           style={{borderColor: errors.username && "red"}}
                           ref={register(schema.properties.username)}/>
                    {
                        errors.username && errors.username.type === "validate" &&
                        <Alert variant="danger">
                            This email address already exists
                        </Alert>
                    }
                </div>
                <div>
                    <AuthPanelLabelStyled>Пароль</AuthPanelLabelStyled>
                    <input type="password" name="password" style={{borderColor: errors.password && "red"}}
                           ref={register(schema.properties.password)}
                    />
                </div>
                {
                    loginMessage !== "" &&
                    <Alert variant={loginStatus}>
                        {loginMessage}
                    </Alert>
                }
                <AuthPanelButtonStyled type="submit" className="auth-btn">Войти</AuthPanelButtonStyled>
            </form>
        </div>
    );
}

export default Login;
