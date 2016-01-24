import React, { Component, PropTypes } from 'react';
import { Entity } from 'aframe-react';

export default class Items extends Component {

  static propTypes = {
    items: PropTypes.array,
    delItem: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  onClick = (index) => {
    return (event) => {
      event.preventDefault();
      console.log('click', index);
      this.props.delItem(index);
    };
  };

  // move up the label a little. [TODO: change the string state to array]
  changeLoc(locString) {
    const locs = locString.split(' ');
    locs[1] = parseInt(locs[1], 10) + 2;
    return locs.join(' ');
  }

  render() {
    const { items } = this.props;
    return (
      <Entity>
        {
          items.map((item, index) =>
            <Entity key={index} >
              <Entity geometry={{ primitive: 'box' }} material="color: blue"
                position={item.pos}
                onClick={this.onClick(index)} />
              <Entity text={`text: ${item.text || '0 0'}`} material="color: #232323" position={this.changeLoc(item.pos)}/>
            </Entity>
          )
        }
      </Entity>
    );
  }
}
