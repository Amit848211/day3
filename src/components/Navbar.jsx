import React from 'react'



function Navbar() {
  return (
    <>
       <div className='mt-5 px-10'>
            <h1 className='text-3xl text-pink-700'>Family Wellness</h1>
            <p className='text-[14px] text-gray-600  px-1 mt-2'>MESSAGE THERAPY</p>
            <div className='w-full h-10 bg-gray-500 flex items-center justify-between mt-5 text-white font-semibold pr-4'>
              <p className='w-40 h-full bg-pink-700 flex items-center justify-center'>HOME</p>
              <p>ABOUT</p>
              <p>MESSAGE</p>
              <p>FAQ</p>
              <p>CONTACT</p>
            </div>
       </div>
    </>
  )
}

export default Navbar