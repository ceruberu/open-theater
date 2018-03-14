import React, { Component } from 'react';
import './Theater.css';
import MockData from '../MockData.json';
import StillBanner from '../images/still-banner.jpg';
import Poster from '../images/poster1.jpg';
// import Calendar from './Calendar';
// import Banner from '../images/inception_banner.jpg';

class Theater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: undefined,
      booleanDaysArray: props.daysOfWeek
    };
    this.handleDayClick = this.handleDayClick.bind(this);
    this.modifyDaysOfWeek = this.modifyDaysOfWeek.bind(this);
  }

  modifyDaysOfWeek(booleanDaysArray){
    let daysArray = [];
    booleanDaysArray.forEach((day,i)=>{
      if(!day){
        daysArray.push(i);
      }
    })
    return daysArray;
  }

  handleDayClick(day, { selected }) {
    console.log(day.getDay());
    if (selected) {
      // Unselect the day if already selected
      this.setState({ selectedDay: undefined });
      return;
    }
    this.setState({ selectedDay: day });
  }

  render() {
    const MockTheater = MockData.Theaters[0];
    const BannerStyle = {
      backgroundImage: `url(${StillBanner})`
    }
    return (
      <div className="content container">
        <div className="theater-banner" style={BannerStyle} alt="Theater Banner">
          <div className="theater-still" alt="Theater Banner" />
        </div>
        <div className="theater-inner">
          <img className="theater-poster" src={Poster} alt="Theater Poster" /> 
          <div className="theater-info">
            <h2 className="info">신과함께</h2>
            <div className="theater-publisher">제작: <span>{MockTheater.Publisher}</span></div>
            <div className="theater-writer">작가: <span>{MockTheater.Writer}</span></div>
            <div className="theater-director">감독: <span>{MockTheater.Director}</span></div>
            <div className="theater-cast"> 출연: <span>{MockTheater.Cast.join(", ")}</span></div>
          </div>
        </div>
        <div className="theater-overview">
          
        </div>
      </div>
    );
  }
}

export default Theater;

// <Calendar
// daysOfWeek={MockTheater.Days_Of_Week}
// start={MockTheater.Date_Start}
// end={MockTheater.Date_End}
// playtime={MockTheater.Playtime}
// selectedDay={this.state.selectedDay}
// handleDayClick={this.handleDayClick}
// modifyDaysOfWeek={this.modifyDaysOfWeek}
// />
