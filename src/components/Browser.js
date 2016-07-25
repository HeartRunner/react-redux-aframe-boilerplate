import {
  Entity,
  Animation,
} from 'aframe-react';
import React from 'react';

export default () => (
  <Entity>
    <Entity
      geometry={{
        primitive: 'box',
        width: 16,
        height: 9,
        depth: 0.5,
      }}
      material={{color: '#6173F4'}}
      position='0 0 0'
    />
    <Entity geometry={{
      primitive: 'box',
      width: 200,
      height: 1,
      depth: 200,
    }}
      material={{color: '#6173F4'}}
      position='0 -20 0'
    />
  </Entity>
);
