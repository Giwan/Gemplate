import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Intro extends Component {
  render () {
    return(
      <div>
        <h1>Gemplate</h1>
        <p>A lightweight setup to get started with react.
          This particular example uses react-router. </p>
          <Link to='/'>Home</Link>
          <br />
          <Link to='/clicker'>clicker</Link>
      </div>
    );
  }
}
