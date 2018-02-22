import React from 'react';
import {LearnComponent} from "./learn/Learn.jsx";
import {HomeComponent} from "./home/Home.jsx";
import {Route, Switch} from "react-router-dom";

export class MainComponent extends React.Component {

  render () {
    return (
      <Switch>
        <Route exact path='/' component={HomeComponent}/>
        <Route path='/learn' component={LearnComponent}/>
      </Switch>
    );
  };
}