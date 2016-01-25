import { Entity, Animation } from 'aframe-react';
import React, { PropTypes } from 'react';

const Button = props => (
  <Entity geometry={{
    primitive: 'sphere',
    radius: 0.8,
    roughness: 0.8,
    'width-segments': 52,
    'height-segments': 52,
  }} material="color: red"
    onClick={props.onClick}
  >
    <Animation attribute="position" from="0 0 0" to="0 1 0" repeat="indefinite" direction="alternate"/>
  </Entity>
);

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
