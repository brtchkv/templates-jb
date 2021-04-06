import styled from "styled-components";
import {Button} from "primereact/button";
import {Menu} from "primereact/menu";
import {Moon, Sun} from "styled-icons/evaicons-solid";

export const StyledSun = styled(Sun)`
  color: ${({theme}) => theme.styles.header.color};
  cursor: pointer;
`;

export const StyledMoon = styled(Moon)`
  color: ${({theme}) => theme.styles.header.color};
  cursor: pointer;
`;

export const ThemeSwitcherStyled = styled.div`
    border-radius: 3px;
    transition: background 0.2s ease-in-out;
    &:hover {
      color: ${({theme}) => theme.styles.header.authButton.hover.color};
      background: ${({theme}) => theme.styles.header.authButton.hover.background};
      filter: brightness(85%);
    }
`;


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
    transition: background 0.2s ease-in-out;
    border: 1px solid ${({theme}) => theme.styles.header.mainMenu.button.border} !important;
    &&& {
        padding: 0.7rem 1rem;
        .p-button-text {
            padding-left: 25px;
            padding-right: 0px;
        }
    }
    &:enabled:hover {
        background-color: ${({theme}) => theme.styles.header.mainMenu.button.enabled.hover.background} !important;
        border-color: ${({theme}) => theme.styles.header.mainMenu.button.enabled.hover.color} !important;
    }
    
    @media (max-width: 414px){
        && {
            .p-button-label {
                display: none;
            }
        }
    }
`

export const MenuButtonSettingsStyled = styled(Button)`
    background: ${({theme}) => theme.styles.header.mainMenu.button.background} !important;
    color: ${({theme}) => theme.styles.header.mainMenu.button.color} !important;
    font-size: ${({theme}) => theme.fontSize} !important;
    font-family: ${({theme}) => theme.fontSerif} !important;
    letter-spacing: ${({theme}) => theme.fontKerning} !important;
    line-height: ${({theme}) => theme.fontInterval} !important;
    transition: background 0.2s ease-in-out;
    border: 1px solid ${({theme}) => theme.styles.header.mainMenu.button.border} !important;
    &&& {
        padding: .6rem;
        width: 100%;
        .pi-cog {
            font-size: 1.8rem
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
    
    @media (max-width: 414px){
        && {
            .p-button-label {
                display: none;
            }
        }
    }
     
`
export const MenuSettingsWrapper = styled.div`
    && {
        @media (min-width: 770px){
            display: none !important;
        }
        
        @media (max-width: 575px){
            padding-right: 1rem;
            padding-left: 1rem;
        }
        
        @media (max-width: 770px){
            padding-left: 1rem;
        }
    }
`

export const MenuProfileWrapper = styled.div`
    && {
        @media (max-width: 770px){
            padding-right: 1rem;
        }
        
        @media (max-width: 575px){
            padding-right: 1rem;
            padding-left: 1rem;
        }
        
        @media (max-width: 375px){
            padding-right: .5rem;
            padding-left: .5rem;
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

export const StyledNav = styled.nav`
    margin-left: auto;
    @media (max-width: 770px){
        display: none;
    }
`
