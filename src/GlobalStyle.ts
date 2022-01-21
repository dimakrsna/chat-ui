import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing:border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'ProximaNova-Regular', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6, p, figure, ul, li, img {
    margin: 0;
    padding: 0;
    border: 0;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block; 
  }

  ol, ul {
    list-style: none; 
  }

  table {
    border-collapse: collapse;
    border-spacing: 0; 
  }

  button {
    outline: none;
    border: none;
  }

  a {
    outline: none;
    text-decoration: none;
  }

  input {
    outline: none;
  }

  pre {
    margin: 0; 
  }
`