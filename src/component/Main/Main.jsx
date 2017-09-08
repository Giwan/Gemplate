import React, { Component } from 'react';
import Clicker from 'Clicker';
import axios from 'axios';

export default class Main extends Component {

  render () {
    return(
      <div>
        <h1>Hello {this.props.name}</h1>
        <Clicker />
        <Login />
      </div>
    );
  }
}

class Login extends Component {
    render() {
        return (
            <div>
                <input type="text" ref="username" value="demo"></input>
                <input type="password" ref="password" value="demo123"></input>
                <button onClick={this.performLogin.bind(this)}>Login</button>
            </div>
        )
    }

    performLogin() {
        axios.get("/api/login.json", {
            params: {
                username: this.refs.username.value,
                password: this.refs.password.value
            }
        }).then(rsp => {
            return console.log('successful response: ', rsp);
        }).catch(err => console.log("failed ", err));
    }
}
