import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    color: #170C3A;
    background: #EAEAEA;
  }

  button {
    font-family: 'Source Sans Pro', sans-serif;
    cursor: pointer;
    user-select: none;
  }
`;

export default GlobalStyle;
