import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    main {
        margin-bottom: 80px;
    }
`;

export default GlobalStyles;
