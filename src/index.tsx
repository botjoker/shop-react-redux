import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './store/reducers/rootReducer'
import { Provider } from 'react-redux';

const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>  ,
  document.getElementById('root')
);