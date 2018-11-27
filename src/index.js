import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import reducers from './reducers';
//import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const store = createStore(reducers);

//ReactDOM.render(<App />, document.getElementById('root'))

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);