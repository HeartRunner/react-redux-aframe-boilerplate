import {
  Entity,
  Animation,
} from 'react-aframe';
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

@connect(
  (state) => ({location: state.routing.locationBeforeTransitions ? state.routing.locationBeforeTransitions.pathname : 'First Page!'})
)
export default class Browser extends Component {


  onBackPress = () => {
    console.log('clicked back');
    hashHistory.goBack();
  };

  render() {
    const {props} = this;
    console.log(props.location);
    return (<Entity>
        <Entity
          geometry={{
            primitive: 'box',
            width: 16,
            height: 9,
            depth: 0.5,
          }}
          material={{color: '#c3e0f7'}}
          position='0 0 0'
        />
        <Entity geometry={{
          primitive: 'box',
          width: 200,
          height: 1,
          depth: 200,
        }}
            material={{color: '#353739'}}
            position='0 -20 0'
        />
        <Entity
          geometry={{
            primitive: 'box',
            width: 2,
            height: 1.2,
            depth: 0.5,
          }}
          material={{color: '#353739'}}
          position='-7 4 0.3d'
          onClick={this.onBackPress}
        />
        <Entity text={`text: PATH: ${props.location}`} material="color: #fff" position="6 5 2" rotation="12 -65 10"/>

      </Entity>
    );
  }
}

Browser.propTypes = {
  location: PropTypes.string.isRequired,
};