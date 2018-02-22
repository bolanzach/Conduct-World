import React from 'react';
import {Link} from "react-router-dom";

export class HeaderComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navItems: this.getListItems()
    };
  }

  getListItems () {
    return [
      {
        id: 'home',
        label: 'Conduct',
        path: '/'
      },
      {
        id: 'learn',
        label: 'Learn',
        path: '/learn'
      },
      {
        id: 'docs',
        label: 'Docs',
        path: '/docs'
      }
    ]
  }

  render () {
    return (
      <header className={'header'}>
        <nav>
          <ul>
            {(this.state.navItems || []).map(item =>
              (<li key={item.id} className={item.id}>
                <Link to={item.path}>{item.label}</Link>
              </li>)
            )}
          </ul>
        </nav>
      </header>
    );
  }



}