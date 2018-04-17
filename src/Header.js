import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Grid>
        <Row className='login'>
            <a href='http://localhost:8888/login' > Login to Spotify </a>
        </Row>
        <Row className="App-header">
          <h1>Quo</h1>
        </Row>
      </Grid>
    );
  }
}

export default Header;
