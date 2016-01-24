import React, { Component } from 'react';
import { Entity } from 'aframe-react';

export class Home extends Component {
  onClick = () => {
    console.log('clicked');
    this.props.history.push('/list');
  };

  render() {
    return (
      <Entity geometry={{ primitive: 'box' }} material="color: red"
        onClick={this.onClick}
      />
    );
  }
}
