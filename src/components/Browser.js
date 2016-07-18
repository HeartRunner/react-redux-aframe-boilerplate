import {
  Entity,
  Animation,
} from 'aframe-react';
import React from 'react';

export default () => (
  <Entity>
    <Entity geometry={{
      primitive: 'sphere',
      radius: 0.8,
      roughness: 0.8,
      'width-segments': 52,
      'height-segments': 52,
    }}
       material="color: red"
    >
      <Animation attribute="position" from="1 1 1 " to="0 1 2" repeat="indefinite" direction="alternate"/>
    </Entity>
    <Entity geometry={{
        primitive: 'box',
        width: 6,
        height: 6,
        depth: 0.5,
        color="#6173F4",
      }}
    />
  </Entity>
);
