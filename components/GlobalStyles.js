import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    @font-face {
    font-family: 'Montserrat';
    src: url('/fonts/Montserrat-VariableFont_wght.ttf')
    }



    :root {
        --green: #77dd77;
        --red: #ff6961;
        --yellow: #fcba28;
        --card-color: linear-gradient(90deg, hsla(24, 100%, 65%, 1) 0%, hsla(24, 100%, 82%, 1) 100%);
        --active-nav-color: #FFDBC8;
        --background-color: #FFFBFF;
        --fab-color: #FFDBC8;
        --nav-color: linear-gradient(0deg, rgba(152, 71, 0, 0.08), rgba(152, 71, 0, 0.08)), #FFFBFF;
        --text-color: #201A17;
        --box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
    }


    html,
    body {
        font-family: Montserrat, sans-serif;
          background: var(--background-color);
    }



    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        color: var(--text-color)
    }
`;

export default GlobalStyles;
