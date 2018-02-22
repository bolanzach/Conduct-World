import React from 'react';
import {render} from 'react-dom';
import './app.scss';
import {HeaderComponent} from './header/Header.jsx';

class App extends React.Component {
  render () {
    return (
      <HeaderComponent/>
    );
  }
}

render(<App/>, document.getElementById('app'));