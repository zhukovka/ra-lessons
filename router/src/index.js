import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DataFetcher from './DataFetcher';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import qhistory from 'qhistory';
import qs from 'qs';
const {stringify, parse} = qs;
const hist = createBrowserHistory();
const history = qhistory(
  hist,
  stringify,
  parse
);
ReactDOM.render(<Router history={history}><DataFetcher /></Router>, document.getElementById('root'));
registerServiceWorker();
