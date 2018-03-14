import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Poster from '../images/poster1.jpg';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <Link to="/theater">
          <img className="card-poster" alt="Poster" src={Poster} />
        </Link>
        <div className="card-info">
          <Link className="link-theater" to="/theater">
            <h2 className="info">신과함께</h2>
          </Link>
          <h4 className="info">80분</h4>
          <h4 className="info">드라마, 액션</h4>
          <Link to="/ticket" className="link-ticket">
            예매하기
          </Link>
        </div>
      </div>
    );
  }
}

export default Card;
