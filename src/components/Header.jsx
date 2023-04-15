import React, { useState } from 'react'

const Header = () => {
  const [sortPrice, setSortPrice] = useState("Any Price");
  const [bedAmount, setBedAmount] = useState("1 Bed");
  const [roomType, setRoomType] = useState("Delux");
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div>
        <h4 className='text-2xl font-semibold'>156 Results <span className='text-gray-400'>in {"New York, US"}</span></h4>
      </div>
      {/* header filters */}
      <div className='mt-12'>
        <div className='flex items-center flex-wrap'>
          <div className="dropdown">
            <label tabIndex={0} className="hover:text-[#0F9429] hover:bg-[#47a6365d] btn bg-white text-gray-400 active:bg-[#061E4F] hover:border-transparent border-gray-300 m-1">
            {sortPrice}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
              </svg>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-52">
              <li onClick={() => setSortPrice("All Price")} className='active:bg-[#061E4F] active:text-white rounded-md pl-4 py-3 hover:bg-slate-200 cursor-pointer '>All Price</li>
              <li onClick={() => setSortPrice("Highest Price")} className='active:bg-[#061E4F] active:text-white rounded-md pl-4 py-3 hover:bg-slate-200 cursor-pointer '>Highest Price</li>
              <li onClick={() => setSortPrice("Lowest Price")} className='active:bg-[#061E4F] active:text-white rounded-md pl-4 py-3 hover:bg-slate-200 cursor-pointer '>Lowest Price</li>
            </ul>
          </div>
          <div className="dropdown">
            <label tabIndex={0} className="hover:text-[#0F9429] hover:bg-[#47a6365d] btn bg-white text-gray-400 active:bg-[#061E4F] hover:border-transparent border-gray-300 m-1">
              {bedAmount}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
              </svg>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-52">
              <li onClick={() => setBedAmount("All Beds")} className='active:bg-[#061E4F] active:text-white rounded-md pl-4 py-3 hover:bg-slate-200 cursor-pointer '>All Beds</li>
              <li onClick={() => setBedAmount("2-4 Beds")} className='active:bg-[#061E4F] active:text-white rounded-md pl-4 py-3 hover:bg-slate-200 cursor-pointer '>2-4 Beds</li>
              <li onClick={() => setBedAmount("4-6 Beds")} className='active:bg-[#061E4F] active:text-white rounded-md pl-4 py-3 hover:bg-slate-200 cursor-pointer '>4-6 Beds</li>
            </ul>
          </div>
          <div className="dropdown">
            <label tabIndex={0} className="hover:text-[#0F9429] hover:bg-[#47a6365d] btn bg-white text-gray-400 active:bg-[#061E4F] hover:border-transparent border-gray-300 m-1">
              {roomType}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
              </svg>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-md w-52">
              <li onClick={() => setRoomType("All Rooms")} className='active:bg-[#061E4F] active:text-white rounded-md pl-4 py-3 hover:bg-slate-200 cursor-pointer '>All Rooms</li>
              <li onClick={() => setRoomType("Standard Room")} className='active:bg-[#061E4F] active:text-white rounded-md pl-4 py-3 hover:bg-slate-200 cursor-pointer '>Standard Room</li>
              <li onClick={() => setRoomType("Deluxe Room")} className='active:bg-[#061E4F] active:text-white rounded-md pl-4 py-3 hover:bg-slate-200 cursor-pointer '>Deluxe Room</li>
              <li onClick={() => setRoomType("Executive Room")} className='active:bg-[#061E4F] active:text-white rounded-md pl-4 py-3 hover:bg-slate-200 cursor-pointer '>Executive Room</li>
              <li onClick={() => setRoomType("Business Suite")} className='active:bg-[#061E4F] active:text-white rounded-md pl-4 py-3 hover:bg-slate-200 cursor-pointer '>Business Suite</li>
              <li onClick={() => setRoomType("Ambassador Suite")} className='active:bg-[#061E4F] active:text-white rounded-md pl-4 py-3 hover:bg-slate-200 cursor-pointer '>Ambassador Suite</li>
              <li onClick={() => setRoomType("Presidential Suite")} className='active:bg-[#061E4F] active:text-white rounded-md pl-4 py-3 hover:bg-slate-200 cursor-pointer '>Presidential Suite</li>
              <li onClick={() => setRoomType("Junior Suite")} className='active:bg-[#061E4F] active:text-white rounded-md pl-4 py-3 hover:bg-slate-200 cursor-pointer '>Junior Suite</li>
              <li onClick={() => setRoomType("Family Room")} className='active:bg-[#061E4F] active:text-white rounded-md pl-4 py-3 hover:bg-slate-200 cursor-pointer '>Family Room</li>
              <li onClick={() => setRoomType("Twin Room")} className='active:bg-[#061E4F] active:text-white rounded-md pl-4 py-3 hover:bg-slate-200 cursor-pointer '>Twin Room</li>
              <li onClick={() => setRoomType("Interconnected Rooms")} className='active:bg-[#061E4F] active:text-white rounded-md pl-4 py-3 hover:bg-slate-200 cursor-pointer'>Interconnected Rooms</li>
            </ul>
          </div>
          {/* more */}
          <label htmlFor="my-modal-3" className='ml-2 flex items-center cursor-pointer hover:text-[#0F9429] hover:bg-[#47a6365d] active:bg-[#47a6362c] p-3 rounded-md'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
            <div  className='undeline ml-2'>More</div>
          </label>
        </div>
        <div>

        </div>


        <>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="text-lg font-bold">Search Filter</h3>
              <div className='mt-6'>
                <h1 className='font-semibold italic text-xl'>Location</h1>
                <div className='flex items-center mt-5'>
                  <div>
                    <div className='flex w-fit items-center'>
                      <h1 className='text-xl'>Near Me</h1>
                      <input type="checkbox" className="toggle ml-3" checked={checked} onClick={() => setChecked(!checked)} />
                    </div>
                  </div>
                  <select className="ml-3 select w-fit max-w-xs select-xs">
                    <option disabled selected>Choose State</option>
                    <option>Edo</option>
                    <option>Delta</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  )
}

export default Header;