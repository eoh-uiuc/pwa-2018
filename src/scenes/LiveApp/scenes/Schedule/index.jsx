import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setPage } from 'services/AppBar/actions';

import './styles.css';

const TimePoint = (props) => {
  return (
    <li className="work">
      { props.children }
    </li>
  );
};

const TimeElement = (props) => {
  const { top, eventID } = props;
  let classes = 'relative';
  if (top) {
    classes = 'relative top';
  }
  let link = props.label;
  if (eventID) {
    link = <Link to={`/event/${eventID}`}>{props.label}</Link>;
  }
  return (
    <div className={classes}>
      <label>{link}</label>
      { top && <span className="date">{props.time}</span> }
      { top && <span className="circle"></span> }
      <p className="location">{props.location}</p>
    </div>
  );
}

class Schedule extends Component {
  componentWillMount() {
    this.props.setPage('Schedule');
  }

  render() {
    return (
      <div>
        <h2 className="day">Friday 3/9</h2>
        <ul id="timeline">
          <TimePoint>
            <TimeElement
              top
              label="High School Design Competition"
              time="8:30 AM"
              location="ECEB 3002"
              eventID="hsdc"
            />
          </TimePoint>
          <TimePoint>
            <TimeElement
              top
              label="Exhibiting Hours Begin"
              time="9:00 AM"
              location="All Buildings"
            />
            <TimeElement
              label="Midwestern Robotics Design Competition"
              location="Kenney Gym Annex"
              eventID="mrdc"
            />
            <TimeElement
              label="Robobrawls Begin"
              location="Bardeen Quad"
              eventID="robobrawl"
            />
            <TimeElement
              label="MNTL Tours Begin"
              location="Micro and Nanotechnology Laboratory"
              eventID="mntltour"
            />
            <TimeElement
              label="Startup Showcase"
              location="Siebel Atrium"
              eventID="startup"
            />
          </TimePoint>
          <TimePoint>
            <TimeElement
              top
              label="Dorm Room Burn Demo"
              time="10:00 AM"
              location="Bardeen Quad"
              eventID="dormroom"
            />
            <TimeElement
              label="Concrete Crusher Begins"
              location="Talbot Lab Basement"
              eventID="crusher"
            />
          </TimePoint>
          <TimePoint>
            <TimeElement
              top
              label="Food Trucks"
              time="11:00 AM"
              location="Springfield Ave"
            />
          </TimePoint>
          <TimePoint>
            <TimeElement
              top
              label="Dorm Room Burn Demo"
              time="2:00 PM"
              location="Bardeen Quad"
              eventID="dormroom"
            />
          </TimePoint>
          <TimePoint>
            <TimeElement
              top
              label="Exhibiting Hours End"
              time="4:00 PM"
              location=""
            />
          </TimePoint>
          <TimePoint>
            <TimeElement
              top
              label="Keynote: Parisa Tabriz"
              time="4:30 PM"
              location="ECEB 1002"
              eventID="keynote"
            />
          </TimePoint>
          <TimePoint>
            <TimeElement
              top
              label="Tesla Coil Concert"
              time="7:30 PM"
              location="Bardeen Quad"
              eventID="teslaCoilConcert"
            />
          </TimePoint>
        </ul>

        <h2 className="day">Saturday 3/10</h2>
        <ul id="timeline">
          <TimePoint>
            <TimeElement
              top
              label="Exhibiting Hours Begin"
              time="9:00 AM"
              location="All Buildings"
            />
            <TimeElement
              label="Middle School Design Competition"
              time="9:00 AM"
              location="ECEB 2nd & 3rd Floor"
              eventID="msdc"
            />
            <TimeElement
              label="Midwestern Robotics Design Competition"
              location="Kenney Gym Annex"
              eventID="mrdc"
            />
            <TimeElement
              label="Robobrawls"
              location="Bardeen Quad"
              eventID="robobrawl"
            />
            <TimeElement
              label="Startup Showcase"
              location="Siebel Atrium"
              eventID="startup"
            />
          </TimePoint>
          <TimePoint>
            <TimeElement
              top
              label="Dorm Room Burn Demo"
              time="10:00 AM"
              location="Bardeen Quad"
              eventID="dormroom"
            />
            <TimeElement
              label="Concrete Crusher Begins"
              location="Talbot Lab Basement"
              eventID="crusher"
            />
          </TimePoint>
          <TimePoint>
            <TimeElement
              top
              label="Food Trucks"
              time="11:00 AM"
              location="Springfield Ave"
            />
          </TimePoint>
          <TimePoint>
            <TimeElement
              top
              label="Dorm Room Burn Demo"
              time="2:00 PM"
              location="Bardeen Quad"
              eventID="dormroom"
            />
          </TimePoint>
        </ul>

        <div className="policy">
          <div>
            <a href="https://www.vpaa.uillinois.edu/resources/cookies">Cookie Policy</a>
          </div>
          <div>
            <a href="https://www.vpaa.uillinois.edu/resources/web_privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setPage: (title) => dispatch(setPage(title)),
});

export default connect(null, mapDispatchToProps)(Schedule);
