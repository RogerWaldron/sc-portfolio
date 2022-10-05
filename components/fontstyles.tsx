import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: url("/fonts/Poppins-Regular.ttf") format('truetype'),
      url("/fonts/Poppins-Bold.ttf") format('truetype'),
      url("/fonts/Poppins-Black.ttf") format('truetype');
`;

export default FontStyles;
