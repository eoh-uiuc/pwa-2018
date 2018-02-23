import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setPage } from 'services/AppBar/actions';
import './styles.css';
import QA from '../../components/QA';

class FAQ extends Component {
  componentWillMount() {
    this.props.setPage('FAQ');
  }

  render() {
    return (
      <div className="FAQ">
        <QA question="What does EOH stand for?">
          <p>EOH is an abbreviation for Engineering Open House.</p>
        </QA>
        <QA question="I have a general question or comment regarding EOH. Who can I reach out to?" >
          <p>Please reach out to the EOH 2018 director Kourosh Arasteh,
            through <a href="mailto:eoh@ec.illinois.edu">eoh@ec.illinois.edu</a>.</p>
        </QA>

        <QA question="What is there to see?">
          <p>
            Engineering Open House offers over 250 student exhibits ranging between all fields of science
            and engineering. Some example exhibits from the past are the concrete crusher where a one ton
            block of concrete is crushed, the Formula SAE student-built cars, the dorm room fire safety
            demonstration, and student-built aircraft exhibits!
          </p>
        </QA>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setPage: (title) => dispatch(setPage(title)),
});

export default connect(null, mapDispatchToProps)(FAQ);
