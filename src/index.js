import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './core/App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './core/GlobalStyle';
import { theme } from './core/theme';
import { Provider } from 'react-redux';
import { store } from './core/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
