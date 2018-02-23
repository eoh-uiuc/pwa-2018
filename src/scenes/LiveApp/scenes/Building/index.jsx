import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showBackArrow, hideBackArrow, setPage } from 'services/AppBar/actions';

import Buildings from '../Exhibits/buildings';

class Building extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buildingData: null,
    };
  }

  componentWillMount() {
    this.props.showBackArrow('/exhibits');
    this.props.setPage('Exhibits');
    const { buildingID } = this.props.match.params;
    const [ place ] = Buildings.filter(b => b.code === buildingID);
    if (place) {
      this.setState({
        place,
      });
    }
  }

  componentWillUnmount() {
    this.props.hideBackArrow();
  }

  render() {
    const { place } = this.state;
    return (
      <div>
        <h1>{place.name}</h1>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  showBackArrow: (to) => dispatch(showBackArrow(to)),
  hideBackArrow: () => dispatch(hideBackArrow()),
  setPage: (pageTitle) => dispatch(setPage(pageTitle)),
});

export default connect(null, mapDispatchToProps)(Building);
