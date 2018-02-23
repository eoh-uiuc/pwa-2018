import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setPage } from 'services/AppBar/actions';
import QA from '../../components/QA';
import './styles.css';

class Information extends Component {
  componentWillMount() {
    this.props.setPage('Information');
  }

  componentDidMount() {
    window.twttr.widgets.load(document.getElementById('info-container'));
  }

  render() {
    return (
      <div id="info-container">
        <div className="info-block">
          <QA question="Emergency Information">
            <div>
              <p>UI Police:&nbsp;
                <a href="tel+217-333-1216">(217) 333-1216</a>
              </p>
              <p>Champaign Police:&nbsp;
                <a href="tel+217-351-4545">(217) 351-4545</a>
              </p>
            </div>
          </QA>
        </div>

        <a
          className="twitter-timeline"
          data-height="500"
          href="https://twitter.com/IllinoisEOH?ref_src=twsrc%5Etfw"
        >
          Tweets by IllinoisEOH
        </a>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setPage: (title) => dispatch(setPage(title)),
});

export default connect(null, mapDispatchToProps)(Information);
