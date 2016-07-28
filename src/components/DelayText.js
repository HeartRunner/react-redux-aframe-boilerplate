import { Entity } from 'react-aframe';
import React, { Component, PropTypes } from 'react';


export default class DelayText extends Component {
  static propTypes = {
    text: PropTypes.string,
    delay: PropTypes.number,
  };

  state = {
    canRender: false,
  };

  componentDidMount() {
    this.handle = setTimeout(() => {
      this.handle = null;
      this.setState({ canRender: true });
    }, this.props.delay || 100);
  }

  ComponentWillUnmount() {
    if (this.handle) clearTimeout(this.handle);
  }

  render() {
    const { text, ...rest } = this.props;
    return this.state.canRender ? <Entity text={`text: ${text || '0 0'}`} {...rest}/> : <Entity/>;
  }

}
