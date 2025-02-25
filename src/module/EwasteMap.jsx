// EwasteMap.js
import React, { useEffect, useState } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function EwasteMap({ google }) {
  // State to store the user's location
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Fetch user's geolocation when the component mounts
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      });
    }
  }, []); // The empty array [] ensures this effect runs only once

  return (
    <div className="map-container">
      <Map
        google={google}
        zoom={5} // Initial zoom level
        // Center the map on the user's location if available, otherwise, use initial coordinates
        initialCenter={userLocation || { lat: 40.7128, lng: -74.0060 }}
      >
        {/* Map markers go here */}
        {/* Example marker */}
        <Marker
          title="E-waste Facility"
          name="E-waste Facility Name"
          position={{ lat: 41.8781, lng: -87.6298 }}
        />
      </Map>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD-LubFAv9AEIi-hemc8HeLFYeSVjVKhog', // Replace 'YOUR_API_KEY' with the API key you obtained
})(EwasteMap);
