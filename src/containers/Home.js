import React, { Component, PropTypes } from 'react';
import { Entity } from 'aframe-react';
import {Button} from 'components';

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
        <Button onClick={this.onClick} />
        <Entity text="text: React redux aframe boilerplate" material="color: #7e7e7e" position="-5 3 -3"/>
        <Entity text={`text: PATH: ${this.props.route.path}`} material="color: #232323" position="1 4 -3" rotation="12 -35 10"/>
      </Entity>
    );
  }
}
