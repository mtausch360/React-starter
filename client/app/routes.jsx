import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './components/app';

const Greeting = ()=> <div>Hey There</div>;

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greeting} />
  </Route>
);
