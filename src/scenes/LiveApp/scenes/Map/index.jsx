import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import { setPage } from 'services/AppBar/actions';
import Popup from './components/Popup';

import './styles.css';

const Parking = [
  {
    name: 'Lot E14',
    lat: 40.096704,
    lng: -88.239492,
  },
  {
    name: 'B4 Parking Garage',
    lat: 40.115735,
    lng: -88.224874,
  },
  {
    name: 'Lot B22',
    lat: 40.116024,
    lng: -88.223296,
  }
];

class GMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      selectedLot: null,
    }
  }

  render() {
    const center = {
      lat: 40.107511,
      lng: -88.232884,
    };

    const markers = Parking.map((p) => {
      return (
        <Marker
          key={p.name}
          title={p.name}
          position={{ lat: p.lat, lng: p.lng }}
          onClick={() => {
            this.setState({
              open: true,
              selectedLot: p,
            });
          }}
        />
      );
    });

    return (
      <div>
        <GoogleMap
          defaultZoom={13.8}
          defaultCenter={center}
        >
          { markers }
        </GoogleMap>
        <Popup
          open={this.state.open}
          onClose={() => {
            this.setState({ open: false });
          }}
          lot={this.state.selectedLot}
        />
      </div>
    );
  }
}

const GMapContainer = withScriptjs(withGoogleMap(GMap));

class Map extends Component {
  componentWillMount() {
    this.props.setPage('Parking');
  }

  render() {
    return (
      <div className="map">
        <p>
          Parking is available in Lot E14, B22, and parking garage B4 shown below.
        </p>
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

export default connect(null, mapDispatchToProps)(Map);
