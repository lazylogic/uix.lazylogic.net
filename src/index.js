import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';

// import components
import { default as stores } from 'modules/stores';
import App from 'App';

// import styles
import CssBaseline from '@material-ui/core/CssBaseline'; //import 'index.css';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'themes/muiTheme';

ReactDOM.render(
  <Provider {...stores}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);
