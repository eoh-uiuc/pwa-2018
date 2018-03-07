import React, { Component } from 'react';
import { connect } from 'react-redux';
import Divider from 'material-ui/Divider';

import { showBackArrow, hideBackArrow, setPage } from 'services/AppBar/actions';
import QA from '../../components/QA';
import Buildings from '../Exhibits/buildings';
import Exhibits from 'data/exhibitsBuildings.json';
import './styles.css';

class Building extends Component {
  constructor(props) {
    super(props);

    this.state = {
      place: null,
      buildingID: null,
    };
  }

  componentWillMount() {
    this.props.showBackArrow('/exhibits');
    this.props.setPage('Exhibits');
    const { buildingID } = this.props.match.params;
    const [ place ] = Buildings.filter(b => b.code === buildingID);
    this.setState({
      place,
      buildingID,
    });
  }

  componentWillUnmount() {
    this.props.hideBackArrow();
  }

  render() {
    const { place, buildingID } = this.state;
    let exhibits = Exhibits[buildingID];

    if (place) {
      if (!exhibits) {
        exhibits = [
          {
            ID: 0,
            URL: '#',
            'Exhibit Name': 'No exhibits here yet',
            'Exhibit Description': 'No exhibits here yet'
          },
        ];
      }
      const exhibitsComp = exhibits.map(e => (
        <QA question={e['Exhibit Name']} key={e['ID']}>
          <div className="exhibit-desc">
            <p>{e['Exhibit Description']}</p>
            <Divider className="divider" />
            <p><strong>Location:</strong> {e['Room']}</p>
            <Divider className="divider" />
            <p>Find out more <a href={`${e['URL']}`}>here</a></p>
          </div>
        </QA>
      ));

      return (
        <div className="building">
          <h3>{place.name}</h3>

          {exhibitsComp}
        </div>
      );
    } else {
      return (
        <div className="building">
          <h3>No such buildingID: {buildingID}</h3>
        </div>
      );
    }
  }
}


const mapDispatchToProps = (dispatch) => ({
  showBackArrow: (to) => dispatch(showBackArrow(to)),
  hideBackArrow: () => dispatch(hideBackArrow()),
  setPage: (pageTitle) => dispatch(setPage(pageTitle)),
});

export default connect(null, mapDispatchToProps)(Building);
