import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setPage } from 'services/AppBar/actions';

import './styles.css';

const TimePoint = (props) => {
  return (
    <li className="work">
      <div className="relative">
        <label><Link to="/event/hardcoded">{props.label}</Link></label>
        <span className="date">{props.time}</span>
        <span className="circle"></span>
        <p className="location">{props.location}</p>
      </div>
    </li>
  );
};

class Schedule extends Component {
  componentWillMount() {
    this.props.setPage('Schedule');
  }

  render() {
    return (
      <div>
        <h2 className="day">Friday 3/9</h2>
        <ul id="timeline">
          <TimePoint
            label="Exhibiting Hours Begin"
            time="9:00 AM"
            location="All Buildings"
          />
          <TimePoint
            label="Food Trucks"
            time="11:00 AM"
            location="Springfield Ave"
          />
          <TimePoint
            label="Exhibiting Hours End"
            time="4:00 PM"
            location=""
          />
          <TimePoint
            label="Keynote: Parisa Tabriz"
            time="5:00 PM"
            location="ECEB 1002"
          />
          <TimePoint
            label="Tesla Coil Concert"
            time="8:00 PM"
            location="Bardeen Quad"
          />
        </ul>

        <h2 className="day">Saturday 3/10</h2>
        <ul id="timeline">
          <TimePoint
            label="Exhibiting Hours Begin"
            time="9:00 AM"
            location="All Buildings"
          />
          <TimePoint
            label="Food Trucks"
            time="11:00 AM"
            location="Springfield Ave"
          />
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setPage: (title) => dispatch(setPage(title)),
});

export default connect(null, mapDispatchToProps)(Schedule);
