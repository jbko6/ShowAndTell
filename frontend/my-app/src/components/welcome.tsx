import React from 'react';
//import './App.css';
import Navbar from '../landing/navbar';

export default function Welcome() {
    return (
        <div>
        <Navbar />
        <div className="h-screen w-screen grid grid-cols-3 grid-rows-3 gap-3 justify-items-center">
            <div className="w-full">
            </div> 

            <div className='w-full h-fit grid grid-cols-1 grid-rows-2 justify-items-center'>
                    <div className='w-full text-center px-5'>
                        <p className='font-productsans font-bold text-3xl my-10'>Welcome!</p>
                        <div className='flex my-1 rounded-[1rem] bg-satBlue text-white px-3 py-5 w-full h-fit'>
                            <div className='flex justify-between w-full'>
                                <p className='text-1xl font-bold'>
                                    EEEEEEEEEEEEEEEEEEEE
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-center -mt-6'>
                        <a href='/choose'>
                            <div className='mx-1 my-1 rounded-[1rem] bg-satRed text-white px-3 py-1 mt-14 w-fit font-bold items-center flex justify-between'>
                                <p>Choose Your Interests&nbsp;</p>
                                <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width='20' height='20' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h13M12 5l7 7-7 7"/>
                                </svg>
                            </div>
                        </a>
                    </div>
            </div>
        </div>
        </div>
    )
    
}