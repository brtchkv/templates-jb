import styled from "styled-components";
import {FileUpload} from "primereact/components/fileupload/FileUpload";

export const ButtonStyled = styled(FileUpload)`
    max-width: max-content;
    & .p-button {
        background: ${({theme}) => theme.styles.header.mainMenu.button.background} !important;
        color: ${({theme}) => theme.styles.header.mainMenu.button.color} !important;
        font-size: ${({theme}) => theme.fontSize} !important;
        font-family: ${({theme}) => theme.fontSerif} !important;
        letter-spacing: ${({theme}) => theme.fontKerning} !important;
        line-height: ${({theme}) => theme.fontInterval} !important;
        padding: 0.5rem 1rem;
        transition: background 0.2s ease-in-out;
        border: 1px solid ${({theme}) => theme.styles.header.mainMenu.button.border} !important;
       
        &:hover {
            background-color: ${({theme}) => theme.styles.header.mainMenu.button.enabled.hover.background} !important;
            border-color: ${({theme}) => theme.styles.header.mainMenu.button.enabled.hover.color} !important;
        }
    }
`
