import React, { Component } from "react";
import DocumentTitle from 'react-document-title';

class Home extends Component {
   render() {
      return (
        <DocumentTitle title={`Stuff - ${window.App.name}`}>
          <div>
            <h2>STUFF</h2>
            <p>Mauris sem velit, vehicula eget sodales vitae,
            rhoncus eget sapien:</p>
            <ol>
              <li>Nulla pulvinar diam</li>
              <li>Facilisis bibendum</li>
              <li>Vestibulum vulputate</li>
              <li>Eget erat</li>
              <li>Id porttitor</li>
            </ol>
          </div>
        </DocumentTitle>
      );
   }
}

export default Home;
