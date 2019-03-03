import React, { Component } from "react";
import DocumentTitle from 'react-document-title';

class Home extends Component {
   render() {
      return (
        <DocumentTitle title={`Contact - ${window.App.name}`}>
          <div>
            <h2>GOT QUESTIONS?</h2>
            <p>The easiest thing to do is post on
            our <a href="http://forum.kirupa.com">forums</a>.
            </p>
          </div>
        </DocumentTitle>
      );
   }
}

export default Home;
