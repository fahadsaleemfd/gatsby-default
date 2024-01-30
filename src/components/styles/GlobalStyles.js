// GlobalStyles.js
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { theme } from './Theme' // Import the theme

const GlobalStyles = createGlobalStyle`
  ${reset}

  /* GlobalStyles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    box-sizing: border-box;
    scroll-behavior: smooth;

    @media screen and (max-width: ${theme.breakpoints.tabletLandscape}) {
    font-size: 56.25%; /* 900px */
  }

  @media screen and (max-width: ${theme.breakpoints.tabletPortrait}) {
    font-size: 50%; /* 600px */
  }

  @media screen and (min-width: ${theme.breakpoints.bigDesktop}) {
    font-size: 75%; /* 1800px */
  }
}

  body {
    box-sizing: border-box;
    padding: 3rem;
    background-image: linear-gradient(
    to right,
    #96c3e8,
    ${(props) => props.theme.colors.scrumhrBlue}
  );


    @media screen and (max-width: ${theme.breakpoints.tabletPortrait}) {
      padding: 0;
    }
  }

  ::selection {
    background-color: ${theme.colors.scrumhrBlue};
    color: #fff;
  }

  a {
    text-decoration: none;
  }

  body {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    line-height: 1.7;
    color: #777;
  }
`

export { GlobalStyles }
