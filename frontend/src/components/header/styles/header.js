import styled from "styled-components";
import {Button} from "primereact/button";
import {Menu} from "primereact/menu";
import {Link} from "react-router-dom";

export const HeaderStyled = styled.header`
    background: ${({theme}) => theme.styles.header.background};
    color: ${({theme}) => theme.styles.header.color};
    font-size: ${({theme}) => theme.fontSize};
    font-family: ${({theme}) => theme.fontSerif};
    letter-spacing: ${({theme}) => theme.fontKerning};
    line-height: ${({theme}) => theme.fontInterval};
    
    .main-menu .nav-item a.sign-in-button {
        background: ${({theme}) => theme.styles.header.authButton.background};
        padding: 0.5rem 1rem;
        transition: background 0.2s ease-in-out;
    }

    .main-menu .nav-item a.sign-in-button:hover {
        color: ${({theme}) => theme.styles.header.authButton.hover.color};
        background: ${({theme}) => theme.styles.header.authButton.hover.background};
    }
`

export const MenuButtonStyled = styled(Button)`
    background: ${({theme}) => theme.styles.header.mainMenu.button.background} !important;
    color: ${({theme}) => theme.styles.header.mainMenu.button.color} !important;
    font-size: ${({theme}) => theme.fontSize} !important;
    font-family: ${({theme}) => theme.fontSerif} !important;
    letter-spacing: ${({theme}) => theme.fontKerning} !important;
    line-height: ${({theme}) => theme.fontInterval} !important;
    padding: 0.5rem 1rem;
    transition: background 0.2s ease-in-out;
    border: 1px solid ${({theme}) => theme.styles.header.mainMenu.button.border} !important;
    &&& {
        .p-button-text {
            padding-left: 25px;
            padding-right: 0px;
        }
    }
    &:enabled:hover {
        background-color: ${({theme}) => theme.styles.header.mainMenu.button.enabled.hover.background} !important;
        border-color: ${({theme}) => theme.styles.header.mainMenu.button.enabled.hover.color} !important;
    }
`

export const MenuProfileButtonStyled = styled(Button)`
    background: ${({theme}) => theme.styles.header.mainMenu.button.background} !important;
    color: ${({theme}) => theme.styles.header.mainMenu.button.color} !important;
    font-size: ${({theme}) => theme.fontSize} !important;
    font-family: ${({theme}) => theme.fontSerif} !important;
    letter-spacing: ${({theme}) => theme.fontKerning} !important;
    line-height: ${({theme}) => theme.fontInterval} !important;
    padding: 0.5rem 1rem;
    transition: background 0.2s ease-in-out;
    border: 1px solid ${({theme}) => theme.styles.header.mainMenu.button.border} !important;
    &&& {
        .p-button-text {
            padding-right: 0px;
        }
    }
    &:enabled:hover {
        background-color: ${({theme}) => theme.styles.header.mainMenu.button.enabled.hover.background} !important;
        border-color: ${({theme}) => theme.styles.header.mainMenu.button.enabled.hover.color} !important;
    }
`
export const MenuWrapper = styled.div`
    && {
        @media (min-width: 770px){
            display: none !important;
        }
    }
`

export const MenuStyled = styled(Menu)`
    background: ${({theme}) => theme.styles.header.mainMenu.background} !important;
    color: ${({theme}) => theme.styles.header.mainMenu.color} !important;
    font-size: ${({theme}) => theme.fontSize};
    font-family: ${({theme}) => theme.fontSerif};
    letter-spacing: ${({theme}) => theme.fontKerning};
    line-height: ${({theme}) => theme.fontInterval};
    border: none;
        
    & .p-menuitem-link { 
        color: ${({theme}) => theme.styles.header.mainMenu.primeItem.color} !important;
        .p-menuitem-icon {
            color: ${({theme}) => theme.styles.header.mainMenu.primeItem.icon.color} !important;
        }
        .p-menuitem-text {
            color: ${({theme}) => theme.styles.header.mainMenu.primeItem.icon.color} !important;
            &:hover {
                background-color: ${({theme}) => theme.styles.header.mainMenu.primeItem.hover.background} !important;
                border-color: ${({theme}) => theme.styles.header.mainMenu.primeItem.hover.border} !important;
            }
        }
        &:hover {
            background-color: ${({theme}) => theme.styles.header.mainMenu.primeItem.hover.background} !important;
            border-color: ${({theme}) => theme.styles.header.mainMenu.primeItem.hover.border} !important;
        }
    }
    
    &.p-menu-overlay {
        border-color: ${({theme}) => theme.styles.header.mainMenu.primeItem.overlay.border} !important;
    }
`

export const StyledHeaderLink = styled(Link)`
    && {
        color: ${({theme}) => theme.styles.header.link.color};
        font-size: ${({theme}) => theme.fontSize};
        font-family: ${({theme}) => theme.fontSerif};
        letter-spacing: ${({theme}) => theme.fontKerning};
        line-height: ${({theme}) => theme.fontInterval};
        &:hover {
            color: ${({theme}) => theme.styles.header.link.hover.color};
        }
    }
`

export const StyledNav = styled.nav`
    margin-left: auto;
    @media (max-width: 770px){
        display: none;
    }
`
