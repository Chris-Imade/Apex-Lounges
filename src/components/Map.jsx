import React from 'react';
import { withGoogleMap, GoogleMap, Marker, Polyline } from 'react-google-maps';

const Map = withGoogleMap((props) => {
  const { markers, apiKey } = props;

  // Create an array of LatLng objects from the markers
  const positions = markers.map((marker) => ({
    lat: marker.latitude,
    lng: marker.longitude,
  }));

  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
      options={{ gestureHandling: 'greedy' }}
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}`}
    >
      {/* Add markers */}
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={{ lat: marker.latitude, lng: marker.longitude }}
        />
      ))}

      {/* Connect the markers with a Polyline */}
      <Polyline path={positions} options={{ strokeColor: '#FF0000' }} />
    </GoogleMap>
  );
});

export default Map;