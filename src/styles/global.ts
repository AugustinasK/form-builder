import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  #root, body {
    display: flex;
    flex-direction: column;
  }
  body {
    margin: 0;
    font-family: "Inter", sans-serif;
    font-weight: 300;
  }

  h1, h2, h3, h4, h5, h6 {
    width: 100%;
    font-weight: 400;
    line-height: 1;
  }
  h1 {
    font-size: 54px;
    margin: 30px 0 20px 0;
  }
  h2 {
    font-size: 48px;
    margin: 30px 0 20px 0;
  }
  h3 {
    font-size: 40px;
    margin: 30px 0 20px 0;
  }
  h4 {
    font-size: 24px;
    margin: 30px 0 20px 0;
  }
  h5 {
    font-size: 18px;
    margin: 10px 0 10px 0;
  }
`;
