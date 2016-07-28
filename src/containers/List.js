import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';
import { Items, AddItem, Button } from 'components';
import { addItem, delItem } from 'modules/items';
import { Entity } from 'react-aframe';

const metaData = {
  title: 'Virtul Reality List',
  description: 'Start you project easy and fast with modern tools.',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

@connect(
  state => state.items,
  { addItem, delItem}
)
export class List extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    addItem: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
  }

  onClick = () => {
    console.log('clicked');
    this.props.history.push('/home');
  };

  render() {
    return (
      <Entity>
        <DocumentMeta {...metaData} />
        <Items {...this.props} />
        <AddItem addItem={this.props.addItem}/>
        <Button onClick={this.onClick} position="-3 0 3"/>
      </Entity>
    );
  }
}
