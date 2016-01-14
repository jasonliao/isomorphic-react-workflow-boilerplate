import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import routes from './routes';
import configureStore from './store/configureStore';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router history={createBrowserHistory()} >
      { routes }
    </Router>
  </Provider>,
  document.getElementById('root')
);
