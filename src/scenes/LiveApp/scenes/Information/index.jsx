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
    const carleAddr = encodeURI('611 W Park St, Urbana, IL 61801');
    const presAddr = encodeURI('1400 W Park St, Urbana, IL 61801');
    const getMapsURL = (coords) => `https://www.google.com/maps/dir/?api=1&destination=${coords}`;


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
          <QA question="Missing Child">
            Please report any case of a missing child to the EOH Central Committee tent on North of Talbot Lab.
            Our volunteers throughout campus will be notified to keep a lookout for the lost child, or parents of the lost child.
          </QA>
          <QA question="Injuries">
            In any case of injury, immediately notify nearby volunteer and go to the Illini Emergency Medical Services (IEMS) at the North-West corner on Bardeen.
          </QA>
          <QA question="Local Hospitals">
            <div>
              <p><a href={getMapsURL(carleAddr)}>Carle Foundation Hospital</a></p>
              <p><a href={getMapsURL(presAddr)}>Presence Covenant Medical Center</a></p>
            </div>
          </QA>
          <QA question="Tours">
            <div>
              <p>Have an engineering student tour guide show you the best side of campus and EOH.</p>
              <p>Tours are on both Friday and Saturday from 9 AM - 4 PM. Tours begin on the Quad side of Grainger
                library and last 30 minutes</p>
            </div>
          </QA>
          <QA question="Lost and Found">
            Any missing items can be brought to lost and found at the EOH Central Committee tent at North Talbot Lawn
            between 9am and 4pm on Friday and Saturday (during EOH hours), or at the Engineering Council office
            (Engineering Hall 103C) at any other time.
          </QA>
          <QA question="Merchandise">
            Commemorate your trip to EOH by finding EOH and Illini gear from the entertainment tent (North side of Talbot Lab)!
          </QA>
          <QA question="Visitor's Booth">
            For any general inquiries, please feel free to approach our volunteers at the visitor’s booth
          </QA>
          <QA question="EOH Central Committee Tent">
            For any other emergencies, please approach any central committee member in the Central Committee Tent North Talbot Lawn right away
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
