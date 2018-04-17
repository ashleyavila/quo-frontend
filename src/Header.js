import React, { Component } from 'react';
import './App.css';
import { Grid, Row } from 'react-bootstrap';

class Header extends Component {
  render() {
    let auth = !this.props.isLoggedOn ? (
      <a href='http://localhost:8888/login' > Login to Spotify </a>
    ) : (
      <a href='/' > Sign out </a>
    );
    return (
      <Grid>
        <Row className='login'>
            {auth}
        </Row>
        <Row className="App-header">
          <h1>Quo</h1>
        </Row>
      </Grid>
    );
  }
}

export default Header;
