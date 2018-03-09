import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setPage } from 'services/AppBar/actions';
import Main from './components/Main';
import Performers from './components/Performers';

import './styles.css';

class Schedule extends Component {
  componentWillMount() {
    if (this.props.location.pathname === '/performances') {
      this.props.setPage('Performances');
    } else {
      this.props.setPage('Schedule');
    }
  }

  render() {
    let sched = <Main />;
    if (this.props.location.pathname === '/performances') {
      sched = <Performers />;
    }

    return (
      <div className="schedule">
        { sched }
        <div className="policy">
          <div>
            <a href="https://www.vpaa.uillinois.edu/resources/cookies">
              Cookie Policy
            </a>
          </div>
          <div>
            <a href="https://www.vpaa.uillinois.edu/resources/web_privacy">
              Privacy Policy
            </a>
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
