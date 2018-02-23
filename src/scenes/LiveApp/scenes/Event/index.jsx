import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showBackArrow, hideBackArrow, setPage } from 'services/AppBar/actions';

import { events } from 'data/events';
import './styles.css';

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventData: null,
    };
  }

  componentWillMount() {
    this.props.showBackArrow('/');
    const { eventID } = this.props.match.params;
    const eventData = events[eventID];
    if (eventData) {
      this.props.setPage(eventData.title);
      this.setState({
        eventData,
      });
    }
  }

  componentWillUnmount() {
    this.props.hideBackArrow();
  }

  render() {
    const { eventData } = this.state;

    if (eventData === null) {
      return (
        <div className="event">
          <h2 className="title">Event Not Found</h2>
        </div>
      );
    }

    return (
      <div className="event">
        <h2 className="title">{eventData.title}</h2>
        <h6 className="info">{eventData.time} | {eventData.location}</h6>
        <img className="event-img" src={require(`assets/${eventData.image}`)} alt="Parisa" />

        <p className="body">
          {eventData.body}
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  showBackArrow: (to) => dispatch(showBackArrow(to)),
  hideBackArrow: () => dispatch(hideBackArrow()),
  setPage: (pageTitle) => dispatch(setPage(pageTitle)),
});

export default connect(null, mapDispatchToProps)(Event);
