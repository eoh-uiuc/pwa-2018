import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import Paper from 'material-ui/Paper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import { setPage } from 'services/AppBar/actions';
import Popup from './components/Popup';
import shuttleSchedule from './shuttles';

import './styles.css';

const Parking = [
  {
    name: 'Lot E14',
    lat: 40.096704,
    lng: -88.239492,
  },
  {
    name: 'Garage B4',
    lat: 40.115869,
    lng: -88.224890,
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
    this.props.setPage('Parking & Shuttles');
  }

  render() {
    return (
      <div className="map">
        <Paper className="description-wrapper">
          <p>Parking is available at the following locations</p>
          <div className="parking-list">
            <ul>
              <li>
                <b>Lot E14</b>
                <div>First St. and Kirby Ave (Free)</div>
              </li>
              <li>
                <b>Lot B22</b>
                <div>Goodwin Ave. and University Ave (Free)</div>
              </li>
              <li>
                <span><b>Garage B4</b> (levels 4, 5, 6)</span>
                <div>Goodwin Ave. and University Ave (Free)</div>
              </li>
              <li>
                <b>JSM Apartments</b>
                <div>Wright St. and Healey St. (1$/hour)</div>
              </li>
            </ul>
          </div>
          <p>
            Parking lots are shown below. Tap a marker to get directions.
          </p>
        </Paper>
        <GMapContainer
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD0p4tcXgvmPZFWGi684Q1WaRAGN6dwc30"
          loadingElement={<div />}
          containerElement={<div style={{ height: 400 }}/>}
          mapElement={<div style={{ height: '100%' }}/>}
        />

        <Paper className="description-wrapper shuttle-desc">
          <p>
            Shuttles are available to take vistors from the parking lots
            to the Engineering Campus. Scheduled times are shown below.
          </p>
        </Paper>

        <Paper>
          <Table className="shuttle">
            <TableHead>
              <TableRow className="shuttle-row">
                <TableCell>Lot B22</TableCell>
                <TableCell>Siebel Center</TableCell>
                <TableCell>Lot 14</TableCell>
                <TableCell>Cen-Comm Tent</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {shuttleSchedule.map(n => {
                return (
                  <TableRow className="shuttle-row times" key={n[0]}>
                    <TableCell>{n[0]}</TableCell>
                    <TableCell>{n[1]}</TableCell>
                    <TableCell>{n[2]}</TableCell>
                    <TableCell>{n[3]}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setPage: (title) => dispatch(setPage(title)),
});

export default connect(null, mapDispatchToProps)(Map);
