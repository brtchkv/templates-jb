import styled from "styled-components";

export const NoDataLabel = styled.h2`
  text-align: center;
  width: 100%;
  color: ${({theme}) => theme.styles.main.catalog.dataTable.color}
`;

export const AnchorContainerStyled = styled.div`
    & a {
        background: ${({theme}) => theme.styles.main.button.background};
        padding: 0.5rem 1rem;
        transition: background 0.2s ease-in-out;
        border: 1px solid ${({theme}) => theme.styles.main.button.border};
        color: ${({theme}) => theme.styles.main.button.color};
        border-radius: 4px;
        &:focus,
        &.focus {
            color: ${({theme}) => theme.styles.main.button.focus.color};
            background-color: ${({theme}) => theme.styles.main.button.focus.background};
            border-color: ${({theme}) => theme.styles.main.button.focus.border};
        }
        &:hover {
            color: ${({theme}) => theme.styles.main.button.hover.color} !important;
            background-color: ${({theme}) => theme.styles.main.button.hover.background} !important;
            border-color: ${({theme}) => theme.styles.main.button.hover.border} !important;
        }
        &:active,
        &.active {
            color: ${({theme}) => theme.styles.main.button.active.color};
            background-color: ${({theme}) => theme.styles.main.button.active.background};
            border-color: ${({theme}) => theme.styles.main.button.active.border};
        }
        &:active:hover,
        &.active:hover,
        &:active:focus,
        &.active:focus,
        &:active.focus,
        &.active.focus
        {
            color: ${({theme}) => theme.styles.main.button.active.focus.color};
            background-color: ${({theme}) => theme.styles.main.button.active.focus.background};
            border-color: ${({theme}) => theme.styles.main.button.active.focus.border};
        }
    }
`
