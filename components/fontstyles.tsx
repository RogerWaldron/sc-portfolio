import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url("public/fonts/Poppins-Regular.ttf") format('truetype'),
      url("public/fonts/Poppins-Bold.ttf") format('truetype'),
      url("public/fonts/Poppins-Black.ttf") format('truetype');
`;

export default FontStyles;
