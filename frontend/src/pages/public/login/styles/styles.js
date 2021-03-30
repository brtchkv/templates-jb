import styled from "styled-components";
import {Nav} from 'react-bootstrap';
import Label from "reactstrap/es/Label";
import Image from "../../../../components/image/Image";


export const AuthPanelStyled = styled.div`
    width: 30rem;
    margin: 4rem auto;
    background-color: ${({theme}) => theme.styles.main.authentication.background};
    box-shadow: ${({theme}) => theme.styles.main.authentication.boxShadow}; 
    border: 1px solid ${({theme}) => "1px solid " + theme.styles.main.authentication.border};
    
`

export const AuthPanelLabelStyled = styled(Label)`
    display: block;
    color: ${({theme}) => theme.styles.main.authentication.label.color};
`

export const AuthImageLogo = styled(Image)`
   width: 6rem;
`

export const AuthImageContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: center;
`

export const AuthPanelButtonStyled = styled.button`
     &:hover {
         background-color: ${({theme}) => theme.styles.main.authentication.button.hover.background} !important;
         border-color: ${({theme}) => theme.styles.main.authentication.button.hover.border} !important;
     }
`
export const AuthPanelTabStyled = styled(Nav.Link)`
        color: ${({theme}) => theme.styles.main.authentication.label.color};
        background-color: ${({theme}) => theme.styles.main.authentication.background};
        width: 100%;
        text-align: center;
        &.active {
            background-color: ${({theme}) => theme.styles.main.authentication.background} !important;
        }
        
        &&& {
            color: ${({theme}) => theme.styles.main.authentication.label.color};
        }
`
export const Lable = styled.h4`
        color: ${({theme}) => theme.styles.main.authentication.label.color};
`
