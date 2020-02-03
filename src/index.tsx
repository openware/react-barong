// tslint:disable:no-submodule-imports
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { addLocaleData } from 'react-intl';

import en from 'react-intl/locale-data/en';

import { Provider } from 'react-redux';

import { App } from './App';
import './index.css';
import { rootSaga } from './modules';
import { sagaMiddleware, store } from './store';
const history = createBrowserHistory();

addLocaleData([...en]);
sagaMiddleware.run(rootSaga);

const render = () => ReactDOM.render(
  <Provider store={store}>
      <App history={history} />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);

render();