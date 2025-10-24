import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  *:before,
  *:after {
    box-sizing: border-box;
  }


   html,
  body {
    width: 100%;
     height: 100%;
    font-family: 'Montserrat', Arial,  sans-serif;
    background-color: #F4F5F6;
    color:  '#000000';
  } 
input,
textarea {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: middle;
  color: rgba(0, 0, 0, 1); 
}

input::placeholder,
textarea::placeholder {
  color: rgba(153, 153, 153, 1); 
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  box-shadow: 0 0 0px 1000px white inset !important; 
  -webkit-text-fill-color: #000 !important;
  transition: background-color 9999s ease-out, color 9999s ease-out;
  transition-delay: 9999s;
  `;
