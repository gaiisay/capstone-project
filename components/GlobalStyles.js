import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    @font-face {
    font-family: 'Montserrat';
    src: url('./fonts/Montserrat/Montserrat-VariableFont_wght.ttf')
    }



    :root {
        --green: #0ba95b;
        --red: #ed203d;
        --yellow: #fcba28;
        --card-color: #FF7D48;
        --active-nav-color: #d8e2ff;
        --background-color: #F7F6F5;
    }


    html,
    body {
        font-family: Montserrat, sans-serif
    }



    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyles;
