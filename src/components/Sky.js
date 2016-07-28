import { Entity } from 'react-aframe';
import React from 'react';

export default () => (
  <Entity geometry={{ primitive: 'sphere', radius: 5000 }}
    material={{ color: '#2e2e2e', shader: 'flat' }}
    scale="1 1 -1"/>
);
