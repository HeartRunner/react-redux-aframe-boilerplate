import {
  Entity,
  Animation,
} from 'react-aframe';
import React from 'react';

export default props => {
  const geometry = {
    primitive: 'ring',
    radiusInner: 0.07,
    radiusOuter: 0.13,
  };
  const material = {
    color: props.color || '#fced2c',
    shader: 'flat',
    // opacity: props.opacity || 0.9,
  };
  return (
    <Entity
      cursor={{
        maxDistance: 30,
        fuse: true,
        ...props
      }}
      position="0 0 -3"
      geometry={geometry}
      material={material}
    >
      <Animation
        attribute="scale"
        fill="backwards"
        begin="click"
        from="0.1 0.1 0.1"
        to="1 1 1"
        dur="150"
        easing="ease-in"
      />
      <Animation
        attribute="scale"
        fill="forwards"
        begin="click"
        to="0.1 0.1 0.1"
        from="1 1 1"
        dur="1500"
        easing="ease-in"
      />

    </Entity>
  );
};
