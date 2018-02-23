import React from 'react';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

import './styles.css';

const QAStyles = {
  root: {
    // backgroundColor: '#242323',
    color: 'black',
  },
};

const QA = (props) => (
  <ExpansionPanel classes={{ root: props.classes.root }} className="QA">
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

export default QAS;
