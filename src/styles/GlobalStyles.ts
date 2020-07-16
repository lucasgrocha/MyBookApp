import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, border-style, #root {
    max-height: 100vh;
    max-width: 100vw;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html {
    background: var(--primary);
  }

  body {
    margin: auto;
  }

  :root {
    --primary: #4b4b97;
    --white: #D9D9D9;
    --whitesmoke: #f4f3f3;
  }
`
