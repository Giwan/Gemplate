import React, { Component } from 'react';
import Clicker from 'Clicker';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div>
        <h1>Hello {this.props.name}</h1>
        <Clicker />
      </div>
    );
  }
}
