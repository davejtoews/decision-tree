import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import decisionApp from './reducers';
import App from './components/App'

const preload = {
  "questions": [
    {
      "id": 3,
      "text": "sods",
      "answers": [
        4
      ]
    }
  ],
  "answers": [
    {
      "id": 4,
      "text": "fefe",
      "path": "result"
    }
  ],
  "results": [
    {
      "id": 0,
      "text": "rrrr"
    },
    {
      "id": 1,
      "text": "rare"
    },
    {
      "id": 2,
      "text": "ete"
    }
  ]
}

let store = createStore(decisionApp, preload);

render(
  <Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
)
//setInterval(function(){
//	console.log(store.getState());
//}, 3000);
