import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Intro from './Intro';
import Clicker from '../Clicker/Clicker';

export default class Main extends Component {

  render () {
    return(
      <Router history={hashHistory}>
        <Route path='/' component={Intro} />
        <Route path='clicker' component={Clicker} />
      </Router>
    );
  }
}
