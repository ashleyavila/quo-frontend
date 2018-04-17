import React, { Component } from 'react';
import './App.css';
import { ButtonToolbar } from 'react-bootstrap';

class LoginButtons extends Component {
  render() {
    return (
    <button class='login-button'>
      <a href='http://localhost:8888/login' > Login to Spotify </a>
    </button>
    )
  }
}

export default LoginButtons;