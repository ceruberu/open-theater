import React, { Component } from 'react';
import Poster from '../images/poster1.jpg';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-poster" src={Poster} />
        <div className="card-info">
          <h2 className="info">신과함께</h2>
          <h4 className="info">80분</h4>
          <h4 className="info">드라마, 액션</h4>
          <button className="link-ticket">
            예매하기
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
