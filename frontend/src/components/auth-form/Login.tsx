import {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import "../../pages/public/login/styles/Auth.css"
import Alert from "react-bootstrap/Alert";
import * as API from "../../service/api/serviceAPI";
import {User, userContext} from "../../settings/user/userContext";
import {AuthPanelButtonStyled, AuthPanelLabelStyled} from "../../pages/public/login/styles/styles";
import {useTranslation} from "react-i18next";

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

interface UserFormData {
    username: string,
    password: string
}

function Login() {
    const context = useContext<User>(userContext);
    const {register, handleSubmit, errors} = useForm();
    const [loginStatus, setLoginStatus] = useState("");
    const [loginMessage, setLoginMessage] = useState("");
    const {t} = useTranslation();

    const onSubmit = (data: UserFormData) => {
        API.login(data.username, data.password)
            .then((response) => {
                    setLoginStatus("success");
                    setLoginMessage(t('successLogin'));
                    let user = {
                        token: response.data.token,
                        role: response.data.role.toString().toLowerCase()
                    }
                    localStorage.setItem('user', JSON.stringify(user));
                    context.setUser({
                        token: response.data.token,
                        role: response.data.role.toString().toLowerCase()
                    });
                }
            ).catch(function (error) {
                console.log(error);
                setLoginStatus("danger");
                setLoginMessage(t('wrongCredentials'));
            });
    };

    return (
        <div className="auth-section">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <AuthPanelLabelStyled>{t('auth.enterUsernameOrEmail')}</AuthPanelLabelStyled>
                    <input type="text" name="username"
                           style={{borderColor: errors.username && "red"}}
                           ref={register(schema.properties.username)}/>
                    {
                        errors.username && errors.username.type === "validate" &&
                        <Alert variant="danger">
                            {t('auth.emailExists')}
                        </Alert>
                    }
                </div>
                <div>
                    <AuthPanelLabelStyled>{t('auth.password')}</AuthPanelLabelStyled>
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
                <AuthPanelButtonStyled type="submit" className="auth-btn">{t('auth.login')}</AuthPanelButtonStyled>
            </form>
        </div>
    );
}

export default Login;
