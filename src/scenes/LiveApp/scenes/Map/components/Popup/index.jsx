import React from 'react';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Button from 'material-ui/Button';

import './styles.css';

const Popup = (props) => {
  let lot = {
    name: '',
    lat: 0,
    lng: 0,
  };
  if (props.open && props.lot) {
    lot = props.lot;
  }

  const coords = encodeURI(`${lot.lat},${lot.lng}`);
  const dirURL = `https://www.google.com/maps/dir/?api=1&destination=${coords}`;

  return (
    <Dialog open={props.open} onClose={props.onClose}>
      <div className="lot-popup">
        <DialogTitle className="title">{lot.name}</DialogTitle>
        <div>
          <Button
            className="lot-button"
            raised
            color="primary"
            onClick={() => { window.open(dirURL, '_blank'); }}
          >
            Open in Google Maps
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default Popup;
