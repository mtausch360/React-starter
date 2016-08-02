import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import routes from './routes';


ReactDOM.render(

  <Router history={browserHistory} routes={routes}></Router>

  ,document.querySelector('.app-container'));
