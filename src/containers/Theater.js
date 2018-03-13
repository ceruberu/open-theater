import React, { Component } from 'react';
import './Theater.css';
import MockData from '../MockData.json';
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
    return (
      <div className="theater">
        <div className="theater-banner" alt="Theater Banner">
          <div className="theater-title">{MockTheater.Title}</div>
        </div>
        <div className="theater-inner">
          <div className="theater-side">
            <div className="theater-publisher">제작: <span>{MockTheater.Publisher}</span></div>
            <div className="theater-writer">작가: <span>{MockTheater.Writer}</span></div>
            <div className="theater-director">감독: <span>{MockTheater.Director}</span></div>
            <div className="theater-cast"> 출연: <span>{MockTheater.Cast.join(", ")}</span></div>
          </div>
          <div className=""></div>
          <div className="theater-ticket">
            예매
          </div>
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
