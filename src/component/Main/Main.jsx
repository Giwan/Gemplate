import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Intro from './Intro';
import Clicker from '../Clicker/Clicker';
import Fourofour from './Fourofour.jsx';

// Flux
import ClickerAction from '../../action/ClickerAction'
import ClickerStore from '../../store/ClickerStore'

export default class Main extends Component {


  constructor(props) {
    super(props);

    this.state = {
      clickerIsOn: ClickerStore.isClickerOn(),
      text: ClickerStore.getText()
    }

    this.updateClickerState = this.updateClickerState.bind(this);
  }

  componentDidMount() {
    ClickerStore.addChangeListener(this.updateClickerState);
    ClickerAction.disable();
  }

  componentWillUnmount() {
    ClickerStore.removeChangeListener(this.updateClickerState);
  }

  updateClickerState() {
    this.setState({
        clickerIsOn: ClickerStore.isClickerOn(),
        text: ClickerStore.getText()
    });
  }

  render () {
    return(
      <div>
        <h1>Hello {this.props.name}</h1>

        <div className="component" >
          <div>{ this.state.text }</div>
          <div>{ this.evaluateButtons() }</div>
      </div>
        <Clicker />

        <Router history={hashHistory}>
          <Route path='/' component={Intro} />
          <Route path='clicker' component={Clicker} />
          <Route path='*' component={Fourofour} />
        </Router>
      </div>
    );
  }

  evaluateButtons() {
    let clickerIsOn = this.state.clickerIsOn;
    if (clickerIsOn) return (
      <button onClick={ ()=> ClickerAction.disable() } >
        disable clicker
      </button>
    );
    else return (
      <button onClick={()=> ClickerAction.enable() } >
        enable clicker
      </button>
    );
  }
}
