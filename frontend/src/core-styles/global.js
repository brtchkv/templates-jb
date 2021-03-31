import {
  createGlobalStyle
} from 'styled-components';

export const GlobalStyles = createGlobalStyle `
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html, body {
    background: ${({theme}) => theme.styles.main.catalog.background};
    color: ${({theme}) => theme.styles.main.color};
    font-size: ${({theme}) => theme.fontSize};
    font-family: ${({theme}) => theme.fontSerif};
    letter-spacing: ${({theme}) => theme.fontKerning};
    line-height: ${({theme}) => theme.fontInterval};
  }
  
  body .p-component {
    font-family: ${({theme}) => theme.fontSerif};
    font-size: ${({theme}) => theme.fontSize};
    text-decoration: none;
    letter-spacing: ${({theme}) => theme.fontKerning};
    line-height: ${({theme}) => theme.fontInterval};
  }
  
  .plp-theme a {
    color: ${({theme}) => theme.styles.main.link.color};
    text-decoration: none;
  }
  
  .plp-theme a:hover {
    color: ${({theme}) => theme.styles.main.link.hover.color};
    text-decoration: none;
    filter: brightness(85%);
  }
  
  button,
  input[type='button'],
  input[type='submit'] {
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
      -webkit-filter: brightness(85%);
      filter: brightness(85%);
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
    &.active.focus {
      color: ${({theme}) => theme.styles.main.button.active.focus.color};
      background-color: ${({theme}) => theme.styles.main.button.active.focus.background};
      border-color: ${({theme}) => theme.styles.main.button.active.focus.border};
    }
  }
`;
