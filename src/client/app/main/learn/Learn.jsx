import React from 'react';
import {NavPanelComponent} from "../navPanel/NavPanel.jsx";

export class LearnComponent extends React.Component {


  render () {
    return (
      <div className={'learn'}>
        <h1>GET LEARNED</h1>
        <NavPanelComponent/>
      </div>
    );
  }
}