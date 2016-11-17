import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import decisionApp from './reducers';
import App from './components/App';
import cqProlyfill from 'cq-prolyfill';

const preload = {};

let store = createStore(decisionApp, preload);

render(
  <Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
);

cqProlyfill();
