import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Intro from './Intro';
import Clicker from '../Clicker/Clicker';
import Fourofour from './Fourofour.jsx';

export default class Main extends Component {

  render () {
    return(
      <Router history={hashHistory}>
        <Route path='/' component={Intro} />
        <Route path='clicker' component={Clicker} />
        <Route path='*' component={Fourofour} />
      </Router>
    );
  }
}
