import { Entity } from 'react-aframe';
import React from 'react';

export default props => (
  <Entity>
    <Entity camera look-controls wasd-controls {...props}/>
  </Entity>
);
