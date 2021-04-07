import styled from "styled-components";
import {ArrowLeft, ArrowRight} from 'styled-icons/evaicons-solid';

export const FilterPanelContainerStyled = styled.div`
    background: ${({theme}) => theme.styles.main.filterPanel.background};
    color: ${({theme}) => theme.styles.main.filterPanel.color};
    font-size: ${({theme}) => theme.fontSize};
    font-family: ${({theme}) => theme.fontSerif};
    letter-spacing: ${({theme}) => theme.fontKerning};
    line-height: ${({theme}) => theme.fontInterval};
    
    padding-left: 15px;
    padding-right: 15px;
    
    & .title span {
        color: ${({theme}) => theme.styles.main.filterPanel.title.color};
    }
`

export const FilterForm = styled.form`
    width: 100%;
`

export const ArrowRightStyled = styled(ArrowRight)`
  color: ${({theme}) => theme.styles.header.color};
`;

export const ArrowLeftStyled = styled(ArrowLeft)`
  color: ${({theme}) => theme.styles.header.color};
`;

export const ButtonStyled = styled.div`
  cursor: pointer;
  border: none;
  vertical-align:middle;
  background-color: inherit;
  transition: background 0.2s ease-in-out 0s;
  padding: 0.3rem 1rem;
  border-radius: 4px;
  &:hover {
    color: rgb(0, 0, 0) !important;
    background-color: rgb(236, 239, 242) !important;
    border-color: rgb(236, 239, 242) !important;
    filter: brightness(85%);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const SelectorStyled = styled.select`
    font-size: ${({theme}) => theme.fontSize};
    font-family: ${({theme}) => theme.fontSerif};
    letter-spacing: ${({theme}) => theme.fontKerning};
    line-height: ${({theme}) => theme.fontInterval};
    display: inline-block;
    width: 100%;
    padding: .375rem 1.75rem .375rem .75rem;
    font-weight: 400;
    color: ${({theme}) => theme.styles.main.filterPanel.selector.color};
    vertical-align: middle;
    background: ${({theme}) => theme.styles.main.filterPanel.selector.background} url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right .75rem center/8px 10px;
    border: 1px solid ${({theme}) => theme.styles.main.filterPanel.selector.border};
    border-radius: .25rem;
    -webkit-appearance: none;
    appearance: none;
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-left: 1rem;
`

export const OrderLabelStyled = styled.label`
    padding-right: 0.5rem;
    color: ${({theme}) => theme.styles.main.filterPanel.label.color};
    line-height: 2rem;
    text-align: center;
`
