import STlogo from '../img/STlogo.png';
import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full h-[80px] bg-white border-b'>
      <div className='max-w-[1400px] m-auto w-full h-full flex justify-between items-center'>
        <a href='/'>
          <img src={STlogo} className="h-[70px]"/>
        </a>
        <div className="px-4 flex items-center">
          <ul className="flex gap-4 font-productsans font-bold">
            <li><a href="./landingpage">
              <div className='hover:brightness-90 duration-500 mx-1 my-1 rounded-[1rem] bg-satBlue text-white px-3 py-1 w-fit font-bold'>
                <p>Join</p>
              </div>
            </a></li>
            <li><a href="/">
              <div className='hover:brightness-90 duration-500 mx-1 my-1 rounded-[1rem] bg-satGreen text-white px-3 py-1 w-fit font-bold'>
                <p>Your Feed</p>
              </div>
            </a></li>
            <li><a href="./about">
              <div className='hover:brightness-90 duration-500 mx-1 my-1 rounded-[1rem] bg-satRed text-white px-3 py-1 w-fit font-bold'>
                <p>About</p>
              </div>
            </a></li>
          </ul>
        </div>

        <div className='flex'>
          <button className='hover:brightness-90 duration-500 px-6 gap-2 flex justify-between items-center rounded-md bg-transparent'>
            Login
          </button>
          <button className='hover:brightness-90 duration-500 px-8 py-3 rounded-md bg-satGreen text-white font-bold'>
            Sign Up
          </button>
        </div>

      </div>


    </div>
  )
}

export default Navbar