import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import { setPage } from 'services/AppBar/actions';

const Buildings = [
  {
    name: 'Electrical And Computer Engineering Building',
    lat: 40.115000,
    lng: -88.228103,
  },
  {
    name: 'Engineering Hall',
    lat: 40.110906,
    lng: -88.227000,
  },
  {
    name: 'Talbot Laboratory',
    lat: 40.111860,
    lng: -88.228392,
  },
  {
    name: 'Newmark Civil Engineering Laboratory',
    lat: 40.114077,
    lng: -88.226554,
  },
  {
    name: 'Materials Science and Engineering Building',
    lat: 40.110810,
    lng: -88.226046,
  },
  {
    name: 'Loomis Laboratory Of Physics',
    lat: 40.110952,
    lng: -88.223367,
  },
  {
    name: 'Digital Computer Laboratory',
    lat: 40.113041,
    lng: -88.226621,
  },
  {
    name: 'Thomas M. Siebel Center for Computer Science',
    lat: 40.113852,
    lng: -88.224884,
  }
];

class GMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedBuilding: '',
    };
  }

  render() {
    let lats = Buildings.map((b) => b.lat);
    let lngs = Buildings.map((b) => b.lng);
    let latC = (Math.max(...lats) + Math.min(...lats)) / 2;
    let lngC = (Math.max(...lngs) + Math.min(...lngs)) / 2;
    const center = {
      lat: latC,
      lng: lngC,
    };

    const markers = Buildings.map((p) => {
      return (
        <Marker
          key={p.name}
          title={p.name}
          position={{ lat: p.lat, lng: p.lng }}
        />
      );
    });

    return (
      <div>
        <GoogleMap
          defaultZoom={16.0}
          defaultCenter={center}
        >
          { markers }
        </GoogleMap>
        />
      </div>
    );
  }
}

const GMapContainer = withScriptjs(withGoogleMap(GMap));

class Exhibits extends Component {
  componentWillMount() {
    this.props.setPage('Exhibits');
  }

  render() {
    return (
      <div>
        <h1>Exhibits</h1>
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
