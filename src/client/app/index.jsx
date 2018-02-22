import React from 'react';
import {render} from 'react-dom';
import './app.scss';
import {HeaderComponent} from './header/Header.jsx';
import {MainComponent} from "./main/Main.jsx";
import {HashRouter} from "react-router-dom";

class App extends React.Component {
  render () {
    return (
      <div>
        <HashRouter>
          <div>
            <HeaderComponent/>
            <MainComponent/>
          </div>
        </HashRouter>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));