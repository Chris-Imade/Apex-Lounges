import React, { useEffect, useState } from 'react';

const Hotel = ({ hotel }) => {
  const [hotelLoaded, setHotelLoaded] = useState();
  useEffect(() => setHotelLoaded(hotel), []);

  if(!hotelLoaded) {
    return (
        <div className='w-[215px] overflow-hidden'>
            <div className='img w-[100%] h-[150px]'></div>
            <div className='img detail w-[70%] h-[20px] mt-6'></div>
            <div className='img detail w-[40%] h-[20px] mt-2'></div>
        </div>
    )
  } else {
    return (
        <div className='group max-w-[315px]'>
          <div className='border-[3px] border-white group-hover:border-[#0F9429] p-[4px] relative rounded-[5px]'>
            <div className=' overflow-hidden rounded-[5px]'>
              <img className=' w-[100%] h-[200px] rounded-[5px] object-cover cursor-pointer group-hover:scale-150 transition group-hover:skew-y-6' src={hotel.preview} alt="hotel" />
            </div>
            <div className="text-red-600 absolute top-1 left-4 text-[3rem]">♥</div>
          </div>
          
            <div className='detail h-[20px] mt-6 text-2xl font-semibold mb-5'>{hotel.name}</div>
            <div className='detail text-[1rem] mt-2 text-gray-400'>{hotel.detailedAddr}</div>
            <div className='text-[#29b178] font-bold text-[1.5rem] my-1'>N{hotel.nightPrice}</div>
            <div className="text-gray-400 flex justify-start items-center">
              <div className='flex justify-between items-center mr-6 my-4'>
                <span>💒</span>
                <span>4</span>
              </div>
              <div className='flex justify-between items-center mr-6 my-4'>
                <span>🐱‍💻</span>
                <span>4</span>
              </div>
              <div className='flex justify-between items-center mr-6 my-4'>
                <span>🐲</span>
                <span>{hotel.distance} ft</span>
              </div>
            </div>
        </div>
      )
  }

}

export default Hotel;