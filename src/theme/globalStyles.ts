import { createGlobalStyle } from "styled-components";
import spaceBackground from "../assets/space-background.jpg";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    box-sizing: border-box;
    background-size: contain;
    background-repeat: repeat;
    background-image: url(${spaceBackground});
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle;
