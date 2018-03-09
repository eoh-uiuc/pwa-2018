import React from 'react';

import { Link } from 'react-router-dom';

export const TimePoint = (props) => {
  return (
    <li className="work">
      { props.children }
    </li>
  );
};

export const TimeElement = (props) => {
  const { top, eventID } = props;
  let classes = 'relative';
  if (top) {
    classes = 'relative top';
  }
  let link = props.label;
  if (props.href) {
    link = <Link to={props.href}>{props.label}</Link>;
  } else if (eventID) {
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
