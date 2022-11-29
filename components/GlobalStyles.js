import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --green: #0ba95b;
        --red: #ed203d;
        --yellow: #fcba28;
        --card-color: #F7F6F5;
        --active-nav-color: #d8e2ff;
    }


    html,
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    }



    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`;

export default GlobalStyles;
