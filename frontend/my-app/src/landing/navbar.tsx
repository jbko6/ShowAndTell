
import STlogo from '../img/STlogo.png';
import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full h-[80px] bg-white border-b'>
      <div className='max-w-[1480px] m-auto w-full h-full flex justify-between items-center'>

        <img src={STlogo} className="px-4 h-[70px]"/>
        <div className="flex items-center">
          <ul className="flex gap-5">
            <li>Home</li>
            <li><a href="./about">About</a></li>
            <li>Team</li>
            <li>Pricing</li>
          </ul>
        </div>

        <div className='flex'>
          <button className='flex justify-between items-center bg-transparent px-6 gap-2'>Login</button>
          <button className='m-6 px-8 py-3 rounded-md bg-satGreen text-white font-bold'>Sign Up</button>
        </div>

      </div>


    </div>
  )
}

export default Navbar