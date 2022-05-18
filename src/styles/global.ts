import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
}

body {
    background-color: #f8f8f8;
    color: #292929;
}

body,
input,
button,
textarea {
    font: 400 1.6rem "Roboto", sans-serif;
}

`;
