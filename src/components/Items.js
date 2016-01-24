import React, { Component } from 'react';
import { Entity } from 'aframe-react';

export default class Items extends Component {

  static propTypes = {
    items: React.PropTypes.array,
    delItem: React.PropTypes.func,
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

  render() {
    const { items } = this.props;
    return (
      <Entity>
        {
          items.map((item, index) =>
            <Entity key={index} geometry={{ primitive: 'box' }} material="color: blue"
              position={item.pos}
              onClick={this.onClick(index)}
            />
          )
        }
      </Entity>
    );
  }
}
