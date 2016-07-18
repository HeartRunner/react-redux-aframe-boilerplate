import React, { Component, PropTypes } from 'react';
import { Entity } from 'aframe-react';
import { DelayText } from 'components';

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


  // move up the label a little
  changeLoc(originLocs) {
    const locs = originLocs.slice();
    locs[1] = locs[1] + 1;
    locs[0] = locs[0] - 1;
    return locs.join(' ');
  }

  render() {
    const { items } = this.props;
    return (
      <Entity>
        {
          items.map((item, index) =>
            <Entity key={item.text} >
              <Entity geometry={{
                primitive: 'cylinder',
                radius: 1,
                height: 1,
                'theta-start': 57,
              }}
                material="color: #86C9EC"
                position={item.pos.join(' ')}
                onClick={this.onClick(index)}
              />
              {
                // aframe-text-component is extremely slow, so I delay the rendering of each text
              }
              <DelayText delay={index * 10000} text={item.text} material="color: #232323" position={this.changeLoc(item.pos)}/>
            </Entity>
          )
        }
      </Entity>
    );
  }
}
