import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentMeta from 'react-document-meta';
import { Items, AddItem } from 'components';
import { addItem, delItem } from 'modules/items';
import { Entity } from 'aframe-react';
const metaData = {
  title: 'Redux test',
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
        <Entity geometry={{ primitive: 'box' }} material="color: red"
          onClick={this.onClick}
        />
      </Entity>
    );
  }
}
