import { Entity } from 'aframe-react';
import React from 'react';

export default () => (
  <Entity geometry={{ primitive: 'sphere', radius: 5000 }}
    material={{ color: '#9FE0DB', shader: 'flat' }}
    scale="1 1 -1"/>
);
