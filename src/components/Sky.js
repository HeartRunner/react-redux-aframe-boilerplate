import { Entity } from 'aframe-react';
import React from 'react';

export default () => (
  <Entity geometry={{ primitive: 'sphere', radius: 5000 }}
    material={{ color: '#3e3e3e', shader: 'flat' }}
    scale="1 1 -1"/>
);
