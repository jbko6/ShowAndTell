import STlogo from '../img/STlogo.png';
import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full h-[80px] bg-white border-b'>
      <div className='max-w-[1400px] m-auto w-full h-full flex justify-between items-center'>

        <img src={STlogo} className="h-[70px]"/>
        <div className="px-4 flex items-center">
          <ul className="flex gap-4">
            <li><a href="./landingpage">Home</a></li>
            <li><a href="./about">About</a></li>
            <li>Team</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className='flex'>
          <button className='px-6 gap-2 flex justify-between items-center rounded-md bg-transparent'>
            Login
          </button>
          <button className='px-8 py-3 rounded-md bg-satGreen text-white font-bold'>
            Sign Up
          </button>
        </div>

      </div>


    </div>
  )
}

export default Navbar