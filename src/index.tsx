import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserHistory } from 'history';
import * as React from 'react';

import { Provider } from 'react-redux';

import { App } from './App';
import './index.css';
import { store } from './store';
const history = createBrowserHistory();

export class ReactSignIn {
  public render() {
    return (
      <Provider store={store}>
        <App history={history} />
      </Provider>
    );
  }
}

