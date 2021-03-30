import styled from "styled-components";

export const BviPanelStyled = styled.div`
    position: relative;
    display: inline-block;
    background: ${({theme}) => theme.styles.header.bvi.background};
    color: ${({theme}) => theme.styles.header.bvi.color};
    font-size: ${({theme}) => theme.fontSize};
    font-family: ${({theme}) => theme.fontSerif};
    letter-spacing: ${({theme}) => theme.fontKerning};
    line-height: ${({theme}) => theme.fontInterval};
    width: 100%;
    padding: 15px;
    border: 1px solid ${({theme}) => theme.styles.header.bvi.border};
    moz-box-shadow: ${({theme}) => theme.themeName === "default" ? "0 1px 3px 0 rgba(0, 0, 0, 0.23)" : "none"};
    webkit-box-shadow: ${({theme}) => theme.themeName === "default" ? "0 1px 3px 0 rgba(0, 0, 0, 0.23)" : "none"};
    box-shadow:  ${({theme}) => theme.themeName === "default" ? "0 1px 3px 0 rgba(0, 0, 0, 0.23)" : "none"};
`
export const BviButtonResetStyled = styled.button`
    && {
        padding: 2px;
        background: none;
        border: none;
        border-radius: 100%;
        color: ${({theme}) => theme.styles.header.bvi.button.reset.color};
        font-size: 1rem;
        margin-left: 0.7rem;
        -webkit-transition: -webkit-transform .25s ease-in-out;
        transition: transform .25s ease-in-out;
        .pi {
            font-size: 1.1em;
        }
        &:hover {
            filter: none;
        }
    }
`
export const BviButtonStyled = styled.button`
    color: ${({theme}) => theme.styles.header.bvi.button.color};
    background-color: ${({theme}) => theme.styles.header.bvi.button.background};
    border-color: ${({theme}) => theme.styles.header.bvi.button.border};
    &:focus,
    &.focus {
        color: ${({theme}) => theme.styles.header.bvi.button.focus.color};
        background-color: ${({theme}) => theme.styles.header.bvi.button.focus.background};
        border-color: ${({theme}) => theme.styles.header.bvi.button.focus.border};
    }
    &:hover {
        color: ${({theme}) => theme.styles.header.bvi.button.hover.color} !important;
        background-color: ${({theme}) => theme.styles.header.bvi.button.hover.background} !important;
        border-color: ${({theme}) => theme.styles.header.bvi.button.hover.border} !important;
    }
    &:active,
    &.active {
        color: ${({theme}) => theme.styles.header.bvi.button.active.color} ;
        background-color: ${({theme}) => theme.styles.header.bvi.button.active.background};
        border-color: ${({theme}) => theme.styles.header.bvi.button.active.border};
    }
    &:active:hover,
    &.active:hover,
    &:active:focus,
    &.active:focus,
    &:active.focus,
    &.active.focus,
    {
        color: ${({theme}) => theme.styles.header.bvi.button.active.color};
        background-color: ${({theme}) => theme.styles.header.bvi.button.active.background};
        border-color: ${({theme}) => theme.styles.header.bvi.button.active.border};
    }
    & .btn-grayscale {
        background: ${({theme}) => theme.themeName === "default" ? "gray" : theme.styles.header.bvi.button.grayscale.background} ;
    }

    & .btn-image-on {
        background: #6fc436;
        color: black;
    }

    & .btn-image-off {
        background: #db5b5b;
    }
`
export const BviSeparatorStyled = styled.hr`
    border: 0;
    border-top: 1px solid ${({theme}) => theme.styles.header.bvi.button.seperator.border};
    margin-top: 20px;
`


