 import React from 'react'
 import ShowAndTell_Logo from '../img/ShowAndTell_Logo.png';
 
 const Hero = () => {
   return (
     <div className='w-full bg-white py-24'>
        <div className='max-w-[1280px] m-auto grid grid-cols-2'>

            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-2xl text-satBlue font-semibold'>
                    FEEL THE SPOTLIGHT
                </p>
                <h1 className='py-2 md:text-6xl font-medium'>
                    Stay <span className='text-satRed'>Motivated</span> &<br/>
                    Be <span className='text-satGreen'>Inspired</span> by<br/>
                    Your <span className='text-satBlue'>Interest</span> Groups
                </h1>
                <p className='py-2 text-lg text-gray-600'>
                    Hold Accountability for Your Goals
                </p>
            </div>

            <img src={ShowAndTell_Logo} className='h-[400px]'/>
        </div>
     </div>
   )
 }
 
 export default Hero