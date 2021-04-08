import React, {Dispatch, SetStateAction, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {userContext, UserCredentials} from "../../settings/user/userContext";
import {userRoles} from "../../settings/roles/userRoles";
import * as API from "../../service/api/serviceAPI";
import {AuthRoutes, NonAuthRoutes} from "../../settings/urls/pathTypes";
import "./styles/header.css"
import {checkLocalStorage} from "../../helpers/user";
import {useTranslation} from 'react-i18next';
import Bvi from "../bvi/bvi";
import "../bvi/styles/bvi.css"
import Fade from "../../helpers/animation/Fade";
import Image from "../image/Image";
import jb from "./styles/jetbrains.svg"
import {
    HeaderStyled, MenuButtonSettingsStyled,
    MenuButtonStyled,
    MenuProfileButtonStyled, MenuProfileWrapper, MenuSettingsWrapper,
    MenuStyled,
    StyledMoon,
    StyledNav, StyledSun, ThemeSwitcherStyled,
} from "./styles/header";
import {theme as themeDark} from "../../core-styles/theme/themes/darkTheme";
import {theme as themeDefault} from "../../core-styles/theme/themes/defaultTheme";

interface HeaderProps {
    themeController: any
}

const Header = (props: HeaderProps) => {
    let menuProfile = useRef(null);
    let menuSettings = useRef(null);
    const {t, i18n} = useTranslation();
    const [bvi, showBvi] = useState(false);
    const [speechSynthesisVolume, setSpeechSynthesisVolume] = useState(getMute());
    const [speechSynthesis, setSpeechSynthesis] = useState(false);

    const speechController = {
        speechSynthesis: speechSynthesis,
        setSpeechSynthesis: setSpeechSynthesis,
        speechSynthesisVolume: speechSynthesisVolume,
        setSpeechSynthesisVolume: setSpeechSynthesisVolume
    };

    function getMute(): boolean {
        const localBvi = window.localStorage.getItem('bvi-speech');
        if (localBvi) {
            return JSON.parse(localBvi);
        }
        return true;
    }

    const toggleBvi = () => {
        showBvi(!bvi)
    };

    const changeLang = () => {
        i18n.changeLanguage(i18n.languages[0] === "ru" ? "en" : "ru");
    };

    const toggleSettings = (event: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        menuSettings.current.toggle(event)
    }

    const toggleProfileStudent = (event: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        menuProfile.current.toggle(event)
    }

    const toggleProfileUni = (event: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        menuProfile.current.toggle(event)
    }

    function setWhiteTheme() {
        props.themeController.setTheme(
            {
                ...props.themeController.theme,
                styles: themeDefault,
                themeName: "default"
            }
        )
    }

    function setDarkTheme() {
        props.themeController.setTheme(
            {
                ...props.themeController.theme,
                styles: themeDark,
                themeName: "dark"
            }
        )
    }

    const Logo = () => (
        <div className="col-auto px-sm-0">
            <Link to={NonAuthRoutes.landing}>
                <Image className="company-logo" recolor={true} src={jb}/>
            </Link>
        </div>
    );

    const HeaderNav = () => (
        <StyledNav>
            <ul className="top-nav">
                <MenuButtonStyled onClick={toggleBvi} label={t('header.settings.a11')} icon="pi pi-eye"/>
                <MenuButtonStyled onClick={changeLang} label={t('header.settings.i18')} icon="pi pi-globe"/>
            </ul>
        </StyledNav>
    );

    const Settings = () => (
        <MenuSettingsWrapper className="d-flex">
            <MenuStyled model={[
                {
                    label: t('header.settings.a11'), icon: "pi pi-eye", command: () => {
                        showBvi(!bvi)
                    }
                },
                {
                    label: t('header.settings.i18'), icon: "pi pi-globe", command: () => {
                        changeLang()
                    }
                }
            ]} popup={true} ref={menuSettings} id="popup_menu_settings"/>
            <MenuButtonSettingsStyled icon="pi pi-cog" onClick={toggleSettings}
                              aria-controls="popup_menu_settings" aria-haspopup={true}/>
        </MenuSettingsWrapper>
    );

    const ProfileStudentMenu = (props: { entity: { setUser: Dispatch<SetStateAction<UserCredentials>> } }) => (
        <MenuProfileWrapper className="ml-auto ml-md-0">
            <MenuStyled model={[
                {
                    label: t('header.authMenu.profile'),
                    url: AuthRoutes.profile,
                    icon: "pi pi-user"
                },
                {
                    label: t('header.authMenu.logOut'),
                    icon: "pi pi-sign-out",
                    command: () => {
                        API.logOut();
                        props.entity.setUser(checkLocalStorage);
                    }
                }
            ]} popup={true} ref={menuProfile} id="popup_menu_profile"/>
            <MenuProfileButtonStyled label={t('header.authMenu.title')} icon="fas fa-user-circle fa-2x"
                                     onClick={toggleProfileStudent}
                                     aria-controls="popup_menu_profile" aria-haspopup={true}/>
        </MenuProfileWrapper>
    );

    const ProfileBasicMenu = (props: { entity: { setUser: Dispatch<SetStateAction<UserCredentials>> } }) => (
        <div className="ml-auto ml-md-0">
            <MenuStyled model={[
                {label: t('header.authMenu.profile'), url: AuthRoutes.profile, icon: "pi pi-user"},
                {
                    label: t('header.authMenu.logOut'), icon: "pi pi-sign-out", command: () => {
                        API.logOut();
                        props.entity.setUser(checkLocalStorage);
                    }
                }
            ]} popup={true} ref={menuProfile} id="popup_menu_profile"/>
            <MenuButtonStyled label={t('header.authMenu.title')} icon="fas fa-user-circle fa-2x"
                              onClick={toggleProfileUni}
                              aria-controls="popup_menu_profile" aria-haspopup={true}/>
        </div>
    );

    const ThemeSwitcher = () => (
        <ThemeSwitcherStyled className="px-3 py-2">
            {props.themeController.theme.themeName === "dark" ||
             props.themeController.theme.themeName === "dark-bvi"? (
                <StyledSun size={32} onClick={() => setWhiteTheme()}/>
            ) : (
                <StyledMoon size={32} onClick={() => setDarkTheme()}/>
            )}
        </ThemeSwitcherStyled>
    );
    return (
        <HeaderStyled className="header">
            <div className="main-menu">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <Logo/>
                        <HeaderNav/>
                        <userContext.Consumer>
                            {(value) => {
                                if (userRoles.student.includes(value.user.role)) {
                                    return <ProfileStudentMenu entity={value}/>
                                } else if (userRoles.registered.includes(value.user.role)) {
                                    return <ProfileBasicMenu entity={value}/>
                                }
                                return <></>
                            }}
                        </userContext.Consumer>
                        <ThemeSwitcher/>
                        <Settings/>
                        <Fade show={bvi}>
                            <Bvi showToggler={toggleBvi} speechController={speechController}
                                 themeController={props.themeController}/>
                        </Fade>
                    </div>
                </div>
            </div>
        </HeaderStyled>
    );
}

export default Header;
