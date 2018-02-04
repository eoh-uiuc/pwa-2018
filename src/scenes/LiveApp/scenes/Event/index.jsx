import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showBackArrow, hideBackArrow } from 'services/AppBar/actions';

import './styles.css';

class Event extends Component {
  componentWillMount() {
    this.props.showBackArrow('/');
  }

  componentWillUnmount() {
    this.props.hideBackArrow();
  }

  render() {
    return (
      <div className="event">
        <h2 className="title">Keynote: Parisa Tabriz</h2>
        <h6 className="info">Friday 5PM | ECEB 1002</h6>
        <img className="event-img" src={require('assets/Parisa-Tabriz.jpg')} alt="Parisa" />

        <p className="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in arcu felis. Etiam vestibulum lacus in euismod hendrerit. Aliquam at condimentum mauris. Proin a neque pellentesque nisl tempor interdum sit amet sit amet sapien. Donec mollis varius sem. Sed sodales posuere sollicitudin. Aliquam pellentesque urna justo, ac cursus augue ornare quis. Donec tempus faucibus dolor nec bibendum. Nam scelerisque tristique est, sed convallis arcu consequat quis. Quisque odio est, porta nec arcu vitae, fringilla tincidunt nibh.
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  showBackArrow: (to) => dispatch(showBackArrow(to)),
  hideBackArrow: () => dispatch(hideBackArrow()),
});

export default connect(null, mapDispatchToProps)(Event);
