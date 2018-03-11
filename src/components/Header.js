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
          <div id="header-right">
            <div className="nav-icon">예매</div>
            <div className="nav-icon">소개</div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
