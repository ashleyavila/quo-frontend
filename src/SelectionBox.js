import React, { Component } from 'react';
import { ButtonToolbar, SplitButton, MenuItem, Grid, Row, Col } from 'react-bootstrap';

class SelectionBox extends Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.updateTitle(e.currentTarget.textContent)
  }

  render() {
    return (
      <Grid>
        <Row className='selection-row'>
          <Col md={6} mdpush={6}>
          <ButtonToolbar>
            <SplitButton bsStyle="default" bsSize="large" title={this.props.subTitle} ref="menu">
              <MenuItem eventKey="1" onClick={this.handleClick}>/r/Complextro</MenuItem>
              <MenuItem eventKey="2" onClick={this.handleClick}>/r/breakbeat</MenuItem>
              <MenuItem eventKey="3" onClick={this.handleClick}>/r/boogiemusic</MenuItem>
              <MenuItem eventKey="4" onClick={this.handleClick}>/r/AtmosphericDnB</MenuItem>
              <MenuItem eventKey="5" onClick={this.handleClick}>/r/ambientmusic</MenuItem>
              <MenuItem eventKey="6" onClick={this.handleClick}>/r/AcidHouse</MenuItem>
              <MenuItem eventKey="7" onClick={this.handleClick}>/r/Electropop</MenuItem>
              <MenuItem eventKey="8" onClick={this.handleClick}>/r/electronicmusic</MenuItem>
              <MenuItem eventKey="9" onClick={this.handleClick}>/r/darkstep</MenuItem>
              <MenuItem eventKey="10" onClick={this.handleClick}>/r/deephouse</MenuItem>
              <MenuItem eventKey="11" onClick={this.handleClick}>/r/dubstep</MenuItem>
              <MenuItem eventKey="12" onClick={this.handleClick}>/r/EDM</MenuItem>
              <MenuItem eventKey="13" onClick={this.handleClick}>/r/EBM</MenuItem>
              <MenuItem eventKey="14" onClick={this.handleClick}>/r/electronicdancemusic</MenuItem>
              <MenuItem eventKey="15" onClick={this.handleClick}>/r/ElectronicJazz</MenuItem>
              <MenuItem eventKey="16" onClick={this.handleClick}>/r/electrohouse</MenuItem>
              <MenuItem eventKey="17" onClick={this.handleClick}>/r/electronicmagic</MenuItem>
              <MenuItem eventKey="18" onClick={this.handleClick}>/r/Music</MenuItem>
            </SplitButton>
          </ButtonToolbar>
          </Col>
        </Row>
      </Grid>

      
    )
  }
}

export default SelectionBox;
