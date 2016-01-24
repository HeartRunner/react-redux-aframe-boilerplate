import React, { Component } from 'react';
import { Scene } from 'aframe-react';
import DocumentMeta from 'react-document-meta';

import { Cursor, Camera } from 'components';

const metaData = {
  title: 'Virtual Reality',
  description: 'Start you project easy and fast with modern tools',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};
export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  };

  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <Scene>
          <Camera position="0 2 5"><Cursor/></Camera>
          {this.props.children}
        </Scene>
      </section>
    );
  }
}
