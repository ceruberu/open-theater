import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <nav id="header-wrapper">
        <div id="header">
          <div id="header-left">
            <h1 className="headerTitle">Open Theater</h1>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
