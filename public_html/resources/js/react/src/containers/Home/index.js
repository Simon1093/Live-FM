import React, { Component } from "react";
import DocumentTitle from 'react-document-title';
import { InfoBox } from '../../Components';
class Home extends Component {
  render() {
    return (
      <DocumentTitle title={`Home - ${window.App.name}`}>
        <div style={{ background: '#000', 'border-radius': '5px' }}>
          <InfoBox></InfoBox>
          <InfoBox></InfoBox>
          <InfoBox></InfoBox>
        </div>
      </DocumentTitle>
    );
  }
}

export default Home;
