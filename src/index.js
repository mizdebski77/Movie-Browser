import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './core/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './core/GlobalStyle';
import { theme } from './core/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
