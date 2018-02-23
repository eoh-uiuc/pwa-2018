import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import { setPage } from 'services/AppBar/actions';
import './styles.css';

const QAStyles = {
  root: {
    // backgroundColor: '#242323',
    color: 'black',
  },
};

const QA = (props) => (
  <ExpansionPanel classes={{ root: props.classes.root }}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
      <div className="question">
        {props.question}
      </div>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
        {props.children}
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

const QAS = withStyles(QAStyles)(QA);

class FAQ extends Component {
  componentWillMount() {
    this.props.setPage('FAQ');
  }

  render() {
    return (
      <div className="FAQ">
        <QAS question="What does EOH stand for?">
          <p>EOH is an abbreviation for Engineering Open House.</p>
        </QAS>
        <QAS question="I have a general question or comment regarding EOH. Who can I reach out to?" >
          <p>Please reach out to the EOH 2018 director Kourosh Arasteh,
            through <a href="mailto:eoh@ec.illinois.edu">eoh@ec.illinois.edu</a>.</p>
        </QAS>

        <QAS question="What is there to see?">
          <p>
            Engineering Open House offers over 250 student exhibits ranging between all fields of science
            and engineering. Some example exhibits from the past are the concrete crusher where a one ton
            block of concrete is crushed, the Formula SAE student-built cars, the dorm room fire safety
            demonstration, and student-built aircraft exhibits!
          </p>
        </QAS>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setPage: (title) => dispatch(setPage(title)),
});

export default connect(null, mapDispatchToProps)(FAQ);
