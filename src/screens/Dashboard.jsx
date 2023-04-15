import React, { useState } from 'react';
import HotelSearch from '../components/HotelSearch';
import { Map } from '../components';

// const markers = [
//   { id: 1, latitude: 37.7749, longitude: -122.4194 },
//   { id: 2, latitude: 37.7749, longitude: -122.431 },
//   { id: 3, latitude: 37.7749, longitude: -122.4426 },
// ];



const Dashboard = () => {
  const [toggleControl, setToggleControl] = useState(false);
  console.log(toggleControl);
  


  return (
    <div className={`flex justify-between items-center w-full h-[100vh] overflow-y-hidden`}>
      {/* Map display */}
      <div className={`h-[100vh] ${toggleControl ? "hide__map " : "map"} transition`}>
        {/* <Map markers={markers} apiKey={""} /> */}
      </div>
      {/* Hotels */}
      <div className={`h-[100vh] ${toggleControl ? "collapse-search" : "hotels"} transition`} >
        <HotelSearch />
        {!toggleControl ? (
          <div onClick={() => setToggleControl(!toggleControl)} className='control cursor-pointer'>{"<<"}</div>
        ) : (
          <div onClick={() => setToggleControl(!toggleControl)} className='control cursor-pointer'>{">>"}</div>
        )}
      </div>
    </div>
  )
}

export default Dashboard