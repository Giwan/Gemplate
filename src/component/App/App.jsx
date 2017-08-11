import React, { Component } from 'react'
import { connect } from 'react-redux';
import Clicker from 'Clicker'
import ReduxClicker from '../ReduxClicker/ReduxClicker'

const mapStateToProps = (state) => {
    return {
        clickNumber: state.app.clickNumber
    }
}

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return(
      <div>
        <h1>Hello {this.props.name}</h1>
        <Clicker />
        <h1>Redux ClickNumber: {this.props.clickNumber}</h1>
        <ReduxClicker />
      </div>
    );
  }
}

App = connect(mapStateToProps)(App);
export default App;
