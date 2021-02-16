import * as React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import Root from './components/Root';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Inter, sans-serif;
  }
`;

ReactDOM.render(
  <>
    <Root />
    <GlobalStyle />
  </>,
  document.getElementById('app')
);
