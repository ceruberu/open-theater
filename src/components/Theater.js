import React, { Component } from 'react';
import './Theater.css';
import MockData from '../MockData.json';
class Theater extends Component {
  render() {
    console.log("MOCK:: ", MockData);
    return (
      <div id="theater">
      </div>
    );
  }
}

export default Theater;
