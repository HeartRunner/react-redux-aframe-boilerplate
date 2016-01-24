import React, { Component, PropTypes } from 'react';
import { Entity } from 'aframe-react';

export class Home extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
  };

  onClick = () => {
    console.log('clicked');
    this.props.history.push('/list');
  };

  render() {
    return (
      <Entity>
        <Entity geometry={{ primitive: 'box' }} material="color: red"
          onClick={this.onClick}
        />
        <Entity text="text: Hello, World!" material="color: blue" position="0 3 0"/>
        <Entity text={`text: PATH: ${this.props.route.path}`} material="color: #232323" position="1 2 0"/>
      </Entity>
    );
  }
}
