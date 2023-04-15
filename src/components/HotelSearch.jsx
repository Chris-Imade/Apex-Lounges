import React from 'react';
import Header from './Header';
import Hotel from './Hotel';
import { hotels } from "./data";


const HotelSearch = () => {


  return (
    <div className='px-[20px] scrollY py-[3rem]'>
        <Header />

        {/* Filter components */}
        {/* Search Results */}
        <div className='flex flex-wrap my-[30px] justify-start items-center '>
          {hotels.map((hotel) => (
            <div className={`my-9 mx-[10px]`} key={hotel.id}>
              <Hotel hotel={hotel} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default HotelSearch;