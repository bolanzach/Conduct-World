import React from 'react';
import {NavPanelComponent} from "../navPanel/NavPanel.jsx";

export class LearnComponent extends React.Component {


  render () {
    return (
      <div className={'learn main-content'}>
        <NavPanelComponent/>
        <div className={'doc-content'}>
          <h1>Learn the Conduct Engine</h1>
          <p>asdfasdf</p>
          <h2>What is Conduct</h2>
        </div>
      </div>
    );
  }
}