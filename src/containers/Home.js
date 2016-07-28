import React, { Component, PropTypes } from 'react';
import { Entity } from 'react-aframe';
import {Button} from 'components';

export class Home extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
  };

  onClick = () => {
    console.log('clicked!!');
    this.props.history.push('/list');
  };
  onClickPlain = () => {
    this.props.history.push('/plain');
  };
  render() {
    return (
      <Entity>
        <Button
          onClick={this.onClick}
          position="0 0 3"
        />
        <Button
          onClick={this.onClickPlain}
          position="3 0 3"
        />
        <Entity text="text: React redux aframe boilerplate" material="color: #7e7e7e" position="-5 3 1"/>
      </Entity>
    );
  }
}
