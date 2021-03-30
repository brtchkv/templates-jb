import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import "../../pages/public/login/styles/Auth.css"
// @ts-ignore
import * as API from "../../service/api/serviceAPI.ts";
import {ErrorMessage} from "@hookform/error-message";
import {AuthPanelButtonStyled, AuthPanelLabelStyled} from "../../pages/public/login/styles/styles";

let pattern = {
    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
    message: "Введите почтовый адресс в стандартном формате, например, ivan@ivan.ru"
};

function checkEmail(email) {
    API.checkRegistration(email, "null").then((response) => {
        return response.success;
    }).catch(function (error) {
        console.log(error);
        return false;
    });
}

interface FormDataTypes {
    username: string
    password: string
    errors: {
        username: boolean
        password: boolean
    }
}

let schema = {
    properties: {
        username: {
            maxLength: 255,
            required: true,
            validate: (input) => checkEmail(input)
        },
        password: {
            minLength: 8,
            maxLength: 60,
            required: true
        }
    }
};

function Register() {
    const { register, handleSubmit, errors } = useForm<FormDataTypes>();
    const [registerStatus, setregisterStatus] = useState("");
    const [registerMessage, setregisterMessage] = useState("");

    const emailIsUnique = async (email) => {
        await wait(1000);
        return true;
    };

    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const onSubmit = (data) => {
        //TODO: регистрация на сервере
        console.log(data);
    };

    return (
        <div className="auth-section">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <AuthPanelLabelStyled>Логин или e-mail:</AuthPanelLabelStyled>
                    <input type="text" name="username"
                           style={{borderColor: errors.username && "red"}}
                           ref={register({
                               required: true,
                               validate: emailIsUnique
                           })}/>
                    <ErrorMessage
                        errors={errors}
                        name="multipleErrorInput"
                        render={({ messages }) => {
                            console.log("messages", messages);
                            return messages
                                ? Object.entries(messages).map(([type, message]) => (
                                    <p key={type}>{message}</p>
                                ))
                                : null;
                        }}
                    />
                </div>
                <div>
                    <AuthPanelLabelStyled>Пароль</AuthPanelLabelStyled>
                    <input type="password" name="password" style={{borderColor: errors.password && "red"}}
                           ref={register(schema.properties.password)}
                    />
                </div>
                <AuthPanelButtonStyled type="submit" className="auth-btn">Войти</AuthPanelButtonStyled>
            </form>
        </div>
    );
}

export default Register;
