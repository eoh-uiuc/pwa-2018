import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Paper from 'material-ui/Paper';

import { setPage } from 'services/AppBar/actions';
import Buildings from './buildings';

class GMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedBuilding: '',
    };
  }

  render() {
    const { history } = this.props;

    // let lats = Buildings.map((b) => b.lat);
    // let lngs = Buildings.map((b) => b.lng);
    // let latC = (Math.max(...lats) + Math.min(...lats)) / 2;
    // let lngC = (Math.max(...lngs) + Math.min(...lngs)) / 2;
    // const center = {
    //   lat: latC,
    //   lng: lngC,
    // };

    const center = {
      lat: 40.113201,
      lng: -88.22588,
    }

    const markers = Buildings.map((p) => {
      return (
        <Marker
          key={p.name}
          title={p.name}
          position={{ lat: p.lat, lng: p.lng }}
          onClick={() => { history.push(`/exhibits/${p.code}`); }}
        />
      );
    });

    return (
      <div>
        <GoogleMap
          defaultZoom={16.1}
          defaultCenter={center}
        >
          { markers }
        </GoogleMap>
      </div>
    );
  }
}

const GMapContainer = withRouter(withScriptjs(withGoogleMap(GMap)));

class Exhibits extends Component {
  componentWillMount() {
    this.props.setPage('Exhibits');
  }

  render() {
    return (
      <div>
        <Paper className="description-wrapper">
          <p className="description-text">
            Exhibits are held at multiple buildings throughout the engineering
            campus. Tap the markers below to see what exhibits are at each
            building.
          </p>
        </Paper>
        <GMapContainer
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD0p4tcXgvmPZFWGi684Q1WaRAGN6dwc30"
          loadingElement={<div />}
          containerElement={<div style={{ height: 400 }}/>}
          mapElement={<div style={{ height: '100%' }}/>}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setPage: (title) => dispatch(setPage(title)),
});

export default connect(null, mapDispatchToProps)(Exhibits);
