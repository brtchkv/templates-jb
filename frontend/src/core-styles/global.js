import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  html, body {
    background: ${({ theme }) => theme.styles.main.catalog.background};
    color: ${({ theme }) => theme.styles.main.color};
    font-size: ${({ theme }) => theme.fontSize};
    font-family: ${({ theme }) => theme.fontSerif};
    letter-spacing: ${({ theme }) => theme.fontKerning};
    line-height: ${({ theme }) => theme.fontInterval};
    height: 100%;
    position: relative;
  }
  
  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding-top: 0;
    margin: 0;
  }
  
  body .p-component {
    font-family: ${({ theme }) => theme.fontSerif};
    font-size: ${({ theme }) => theme.fontSize};
    text-decoration: none;
    letter-spacing: ${({ theme }) => theme.fontKerning};
    line-height: ${({ theme }) => theme.fontInterval};
  }
  
  .plp-theme {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .main-container {
    min-height: 100vh;
    overflow: hidden;
    display: block;
    position: relative;
  }
  
  .plp-theme a {
    color: ${({ theme }) => theme.styles.main.link.color};
    text-decoration: none;
  }
  
  .plp-theme a:hover {
    color: ${({ theme }) => theme.styles.main.link.hover.color};
    text-decoration: none;
    filter: brightness(85%);
  }
  
  button,
  input[type='button'],
  input[type='submit'] {
    background: ${({ theme }) => theme.styles.main.button.background};
    padding: 0.5rem 1rem;
    transition: background 0.2s ease-in-out;
    border: 1px solid ${({ theme }) => theme.styles.main.button.border};
    color: ${({ theme }) => theme.styles.main.button.color};
    border-radius: 4px;
    &:focus,
    &.focus {
      color: ${({ theme }) => theme.styles.main.button.focus.color};
      background-color: ${({ theme }) =>
        theme.styles.main.button.focus.background};
      border-color: ${({ theme }) => theme.styles.main.button.focus.border};
    }
    &:hover {
      color: ${({ theme }) => theme.styles.main.button.hover.color} !important;
      background-color: ${({ theme }) =>
        theme.styles.main.button.hover.background} !important;
      border-color: ${({ theme }) =>
        theme.styles.main.button.hover.border} !important;
      -webkit-filter: brightness(85%);
      filter: brightness(85%);
    }
    &:active,
    &.active {
      color: ${({ theme }) => theme.styles.main.button.active.color};
      background-color: ${({ theme }) =>
        theme.styles.main.button.active.background};
      border-color: ${({ theme }) => theme.styles.main.button.active.border};
    }
    &:active:hover,
    &.active:hover,
    &:active:focus,
    &.active:focus,
    &:active.focus,
    &.active.focus {
      color: ${({ theme }) => theme.styles.main.button.active.focus.color};
      background-color: ${({ theme }) =>
        theme.styles.main.button.active.focus.background};
      border-color: ${({ theme }) =>
        theme.styles.main.button.active.focus.border};
    }
  }
  
    /* BASIC COMPONENTS */

  /* headers */

  .plp-theme h1 {
      font-size: 2rem;
      margin: 1.2em 0 0.8em;
  }

  .plp-theme h2 {
      font-size: 1.8rem;
      margin: 1.2em 0 0.8em;
  }

  .plp-theme h3 {
      font-size: 1.5rem;
      margin: 1.2em 0 0.8em;
  }

  /* inputs */

  .plp-theme input[type='text'] {
      width: 100%;
      padding: 0.5rem 1rem;
      color: #8ea0b2;
      background: #FFF;
      border: 1px solid #afbdca;
      text-align: left;
      position: relative;
  }

  /* custom tabs */

  .plp-theme .p-tabview .p-tabview-panels {
      background-color: #ffffff;
      padding: 0;
      border: none;
      color: #333333;
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
  }

  /* custom dropdown */
  .plp-theme .p-button:enabled:focus {
      -webkit-box-shadow: none;
      box-shadow: none;
  }

  .plp-theme .p-menuitem-link:hover {
      text-decoration-line: none;
  }

  /* custom selector */

  .plp-selector {
      position: relative;
  }

  .plp-selector .selector-button {
      width: 100%;
      padding: 0.5rem 1rem;
      color: #8ea0b2;
      background: #FFF;
      border: 1px solid #afbdca;
      text-align: left;
      position: relative;
  }

  .plp-selector .selector-button:hover {
      background: #FFF;
      color: #8ea0b2;
  }

  .plp-selector .selector-button:after {
      content: "\\f078";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      font-size: 0.8rem;
      line-height: 1;
      color: #415162;
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
  }

  .plp-selector .options {
      display: none;
      position: absolute;
      top: 100%;
      width: max-content;
      min-width: 100%;
      z-index: 1;
      background: #FFF;
      border: 1px solid #afbdca;
      overflow-y: auto;
      max-height: 15rem;
  }

  .plp-selector .option:first-child {
      padding-top: 0.4rem;
  }

  .plp-selector .option:last-child {
      padding-bottom: 0.4rem;
  }

  .plp-selector .option {
      padding: 0.2rem 1rem;
      color: #415162;
  }

  .plp-selector .option:hover {
      background: #eceff2;
      cursor: pointer;
  }

  /* CUSTOM FONT SIZE OF PRIME COMPONENTS */

  .plp-theme .p-component {
      font-size: 1rem;
  }

  .plp-theme .page-content {
      flex-grow: 1;
      flex-shrink: 1;
  }

`;
