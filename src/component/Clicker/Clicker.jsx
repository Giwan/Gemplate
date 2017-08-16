import React, {Component} from 'react';
import { Link } from 'react-router';

// Flux
import ClickerStore from '../../store/ClickerStore'
import ClickerAction from '../../action/ClickerAction'
export default class Clicker extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      isClickerOn: ClickerStore.isClickerOn(),
    };

    // aah I keep forgetting this
    this.updateClickerState = this.updateClickerState.bind(this);
  }

  componentDidMount() {
    ClickerStore.addChangeListener(this.updateClickerState);
    ClickerAction.setText('clicker is on');

  }

  componentWillUnmount() {
    ClickerStore.removeChangeListener(this.updateClickerState);
  }

  updateClickerState() {
    this.setState({ isClickerOn: ClickerStore.isClickerOn() });
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
