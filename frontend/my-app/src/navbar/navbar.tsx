import ShowAndTell_Logo from '../img/ShowAndTell_Logo.png';
import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[80px] bg-white border-b'>
      <div className='max-w-[1480px] m-auto w-full h-full flex justify-between items-center'>

        <img src={ShowAndTell_Logo} className="h-[100px]"/>
        <div className="flex items-center">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Team</li>
            <li>Pricing</li>
          </ul>
        </div>
        
        <div className='flex'>
          <button className=''>Login</button>
          <button className='px-8 py-3 rounded-md bg-[#20B486]'>Sign Up</button>
        </div>

      </div>


    </div>
  )
}

export default Navbar