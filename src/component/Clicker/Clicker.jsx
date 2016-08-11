import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Clicker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  render () {
    return(
      <div>
      <button onClick={this.onClickerClick.bind(this)}>
        {this.state.counter}
      </button>
      <Link to='/'>back</Link>
    </div>
    );
  }

  onClickerClick() {
    let i = this.state.counter;
    i++;
    this.setState({counter: i});
  }
}
