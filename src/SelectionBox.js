import React, { Component } from 'react';
import './App.css';
import { ButtonToolbar, DropdownButton, MenuItem, Grid, Row, Col } from 'react-bootstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
          <Col>
            <ButtonToolbar>
              <DropdownButton bsStyle="default" bsSize="large" title={this.props.subTitle} ref="menu">
                <MenuItem onClick={this.handleClick}>/r/Music</MenuItem>
                <MenuItem header>Electronic Music</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/AcidHouse</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/ambientmusic</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/AStateOfTrance</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/AtmosphericDnB</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/BigBeat</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/breakbeat</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/boogiemusic</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/breakcore</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/brostep</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/chicagohouse</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/chillout</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/Chipbreak</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/Chiptunes</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/Complextro</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/cxd</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/DnB</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/deephouse</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/dubstep</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/darkstep</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/EDM</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/EBM</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/ElectronicBlues</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/electronichiphop</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/electroswing</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/ElectronicMusic</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/electronicdancemusic</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/Electropop</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/electronicmusic</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/ElectronicJazz</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/electrohouse</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/electronicmagic</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/filth</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/frenchelectro</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/frenchhouse</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/funkhouse</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/fusiondancemusic</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/futurebeats</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/FutureFunkAirlines</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/FutureGarage</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/futuresynth</MenuItem>
                {/* <MenuItem header>Rock/Metal Music</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/AlternativeRock</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/BlackMetal</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/ClassicRock</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/futuresynth</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/futuresynth</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/futuresynth</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/futuresynth</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/futuresynth</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/futuresynth</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/futuresynth</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/futuresynth</MenuItem>
                <MenuItem onClick={this.handleClick}>/r/futuresynth</MenuItem> */}
              </DropdownButton>
            </ButtonToolbar>
          </Col>
          {/* <Col md={3}>
            <ButtonToolbar>
              <DropdownButton bsStyle="default" bsSize="large" title={this.props.subTitle} ref="menu">
                <MenuItem onClick={this.handleClick}>/r/futuresynth</MenuItem>
                <MenuItem header>Electronic Music</MenuItem>
              </DropdownButton>
            </ButtonToolbar>
          </Col>
          <Col md={3}>
            <ButtonToolbar>
              <DropdownButton bsStyle="default" bsSize="large" title={this.props.subTitle} ref="menu">
                <MenuItem onClick={this.handleClick}>/r/futuresynth</MenuItem>
                <MenuItem header>Electronic Music</MenuItem>
              </DropdownButton>
            </ButtonToolbar>
          </Col>
          <Col md={3}>
            <ButtonToolbar>
              <DropdownButton bsStyle="default" bsSize="large" title={this.props.subTitle} ref="menu">
                <MenuItem onClick={this.handleClick}>/r/futuresynth</MenuItem>
                <MenuItem header>Electronic Music</MenuItem>
              </DropdownButton>
            </ButtonToolbar>
          </Col> */}
        </Row>
      </Grid>


    )
  }
}

export default SelectionBox;
