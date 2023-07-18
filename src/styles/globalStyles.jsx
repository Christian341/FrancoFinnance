import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  outline: none;
  border: none;
  box-sizing: border-box;
  font-size: 62.5%;
  }

  :root{
    --color-primary: #FDFCFF;
    --strokeheader-color: #DFDAFF;
    --btn-color: #7A71DF;
    --offocus: #CCCBD6;
  }
  body{
    font-family: 'poppins', sans-serif;
  }
`;
