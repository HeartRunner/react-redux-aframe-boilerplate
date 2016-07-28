import { Entity, Animation } from 'react-aframe';
import React, { PropTypes } from 'react';

import * as Aframe from 'react-aframe';
console.log(Aframe);
const Button = props => (
  <Entity geometry={{
    primitive: 'sphere',
    radius: 0.8,
    roughness: 0.8,
    'width-segments': 52,
    'height-segments': 52,
  }} material="color: red"
    onClick={props.onClick}
    position={props.position}
  >
    <Animation attribute="position" from="0 0 0" to={props.position} repeat="indefinite" direction="alternate"/>
  </Entity>
);

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
