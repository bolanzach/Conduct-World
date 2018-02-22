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
        id: 'learn',
        label: 'Learn',
        path: ''
      },
      {
        id: 'blog',
        label: 'Blog',
        path: ''
      }
    ]
  }

  render () {
    return (
      <div className={'header'}>
          <ul>
            {(this.state.navItems || []).map(item =>
              (<li key={item.id} className={item.id}>
                <Link to='/'>{item.label}</Link>
              </li>)
            )}
          </ul>
      </div>
    );
  }



}