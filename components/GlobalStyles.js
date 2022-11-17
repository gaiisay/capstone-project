import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        
    }

    main {
        display: grid;
        justify-content: center;
    };

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    h1, h2 {
        text-align: center;
        margin-bottom: 1rem;
    }
`;

export default GlobalStyles;
