import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setPage } from 'services/AppBar/actions';

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
