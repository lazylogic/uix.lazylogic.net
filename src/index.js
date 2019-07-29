import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';

// import components
import DevTools from 'mobx-react-devtools';
import makeInspectable from 'mobx-devtools-mst';
import RootStore from 'modules/stores';
import App from 'App';

// import styles
import CssBaseline from '@material-ui/core/CssBaseline'; //import 'index.css';
import { ThemeProvider } from '@material-ui/styles';
import theme from 'themes/muiTheme';

makeInspectable(RootStore);

ReactDOM.render(
  <Provider {...RootStore}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {process.env.NODE_ENV === 'local' && <DevTools />}
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
