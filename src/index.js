import './styles/base.less';

import React from 'react';
import ReactDom from 'react-dom';
import promise from 'redux-promise';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './containers/App';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const reduxStore = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDom.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,

  document.getElementById('root')
);
