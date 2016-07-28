import React, { Component, PropTypes } from 'react';
// import { Entity } from 'react-aframe';
// import {Button} from 'components';

export class Plain extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
  };

  onClick = () => {
    console.log('clicked');
    this.props.history.push('/list');
  };

  render() {
    return (
      <a-entity position="3.5 3 3" rotation="0 45 0">
        <a-entity
          geometry={{
            primitive: 'cylinder'
          }} material="color: red"
        >
          <a-animation begin="click" fill="forwards" repeat="1"
                       direction="alternate" attribute="position" from="-15 0 0"
                       to="15 0 0" dur="2000"></a-animation>
        </a-entity>
      </a-entity>
    );
  }
}
