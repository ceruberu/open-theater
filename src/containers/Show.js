import React, { Component } from 'react';
import './Show.css';
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
    const MockShow = MockData.Theaters[0];
    const BannerStyle = {
      backgroundImage: `url(${StillBanner})`
    }
    return (
      <div className="content container">
        <div className="show-banner" style={BannerStyle} alt="show Banner">
          <div className="show-still" alt="show Banner" />
        </div>
        <div className="show-inner">
          <img className="show-poster" src={Poster} alt="show Poster" /> 
          <div className="show-info">
            <h2 className="info">신과함께</h2>
            <div className="show-publisher">제작: <span>{MockShow.Publisher}</span></div>
            <div className="show-writer">작가: <span>{MockShow.Writer}</span></div>
            <div className="show-director">감독: <span>{MockShow.Director}</span></div>
            <div className="show-cast"> 출연: <span>{MockShow.Cast.join(", ")}</span></div>
          </div>
        </div>
        <div className="show-overview">

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
