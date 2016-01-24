import { Entity } from 'aframe-react';
import React from 'react';

export default props => (
  <Entity>
    <Entity geometry={{ primitive: 'box' }} material="color: green"
      position="3 0 0"
      onClick={props.addItem}/>
  </Entity>
);
