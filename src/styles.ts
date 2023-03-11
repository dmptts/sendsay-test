import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';
import InterRegularWoff from './fonts/inter-regular.woff';
import InterRegularWoff2 from './fonts/inter-regular.woff2';
import InterMediumWoff from './fonts/inter-medium.woff';
import InterMediumWoff2 from './fonts/inter-medium.woff2';
import InterExtraBoldWoff from './fonts/inter-extrabold.woff';
import InterExtraBoldWoff2 from './fonts/inter-extrabold.woff2';
import HelveticaNeueRegularWoff from './fonts/helvetica-neue-regular.woff';
import HelveticaNeueRegularWoff2 from './fonts/helvetica-neue-regular.woff2';

export default createGlobalStyle`
  ${normalize}
  
  @font-face {
    font-style: normal;
    font-weight: 400;
    font-family: "Inter";
    font-display: swap;
    src:
      url(${InterRegularWoff}) format("woff2"),
      url(${InterRegularWoff2}) format("woff");
  }

  @font-face {
    font-style: normal;
    font-weight: 500;
    font-family: "Inter";
    font-display: swap;
    src:
      url(${InterMediumWoff2}) format("woff2"),
      url(${InterMediumWoff}) format("woff");
  }

  @font-face {
    font-style: normal;
    font-weight: 800;
    font-family: "Inter";
    font-display: swap;
    src:
      url(${InterExtraBoldWoff2}) format("woff2"),
      url(${InterExtraBoldWoff}) format("woff");
  }

  @font-face {
    font-style: normal;
    font-weight: 400;
    font-family: "Helvetica Neue";
    font-display: swap;
    src:
      url(${HelveticaNeueRegularWoff2}) format("woff2"),
      url(${HelveticaNeueRegularWoff}) format("woff");
  }

  :root {
    --color-default-white: #ffffff;
    --color-default-black: #000000;
    --color-accent: #5d5fef;
    --font-inter: "Inter", Arial, sans-serif;
    --font-helvetica: "Helvetica Neue", Arial, sans-serif
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }

  html {
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem; // 15px
    line-height: 1.4;
    font-family: "Inter", Arial, sans-serif;
    color: var(--color-default-black);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  body {
    width: 100%;
    height: 100%;

    background-color: var(--color-default-white);
  }

  a {
    color: #000000;
    text-decoration: none;
  }

  img,
  video {
    display: block;
    max-width: 100%;
    height: auto;
  }

  textarea {
    resize: none;
  }

  input:-webkit-autofill {
    box-shadow: inset 0 0 0 1000px $color-default-white;

    -webkit-text-fill-color: $color-default-black;
  }

  // firefox placeholder \ invalid fix + ios bdrs
  input,
  textarea {
    border-radius: 0;

    &::placeholder {
      opacity: 1;
    }

    &:invalid {
      box-shadow: none;
    }
  }

  select {
    border-radius: 0;
  }

  // chrome search X removal
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    appearance: none;
  }

  // input[number] arrows removal
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;

    appearance: none;
  }

  input[type="number"] {
    appearance: textfield;
  }

  // ios button \ inputs reset
  select,
  textarea,
  input:matches([type="email"],
    [type="number"],
    [type="password"],
    [type="search"],
    [type="tel"],
    [type="text"],
    [type="url"]) {
    appearance: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    appearance: none;
  }
`;

export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
