import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FaMapPin } from 'react-icons/fa';

const GoogleMap = ({ latitude, longitude }) => {
  const openInGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps/place/${latitude},${longitude}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <button className="btn btn-primary" onClick={openInGoogleMaps}>
                Open in Google Maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
