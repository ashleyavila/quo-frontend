import React, { Component } from 'react';
import { ButtonToolbar, SplitButton, MenuItem, Button } from 'react-bootstrap';

class SelectionBox extends Component {
  render() {
    let i = 1
    return (
      <ButtonToolbar>
        <SplitButton bsStyle="default" bsSize="large" title="/r/">
          <MenuItem eventKey="1">/r/Complextro</MenuItem>
          <MenuItem eventKey="2">/r/breakbeat</MenuItem>
          <MenuItem eventKey="3">/r/boogiemusic</MenuItem>
          <MenuItem eventKey="4">/r/AtmosphericDnB</MenuItem>
          <MenuItem eventKey="5">/r/ambientmusic</MenuItem>
          <MenuItem eventKey="6">/r/AcidHouse</MenuItem>
          <MenuItem eventKey="7">/r/Electropop</MenuItem>
          <MenuItem eventKey="8">/r/electronicmusic</MenuItem>
          <MenuItem eventKey="9">/r/darkstep</MenuItem>
          <MenuItem eventKey="10">/r/deephouse</MenuItem>
          <MenuItem eventKey="11">/r/dubstep</MenuItem>
          <MenuItem eventKey="12">/r/EDM</MenuItem>
          <MenuItem eventKey="13">/r/EBM</MenuItem>
          <MenuItem eventKey="14">/r/electronicdancemusic</MenuItem>
          <MenuItem eventKey="15">/r/ElectronicJazz</MenuItem>
          <MenuItem eventKey="16">/r/electrohouse</MenuItem>
          <MenuItem eventKey="17">/r/electronicmagic</MenuItem>
        </SplitButton>
      </ButtonToolbar>
    )
  }
}

export default SelectionBox;