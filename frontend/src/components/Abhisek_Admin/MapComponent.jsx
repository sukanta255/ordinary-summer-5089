import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const apiKey = env.REACT_APP_API_KEY;
let apiKey
function MapComponent() {
  const mapContainerStyle = {
    width: '100%',
    height: '100%'
  };

  const center = {
    lat: 3.745,
    lng: 38.523
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
   
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;