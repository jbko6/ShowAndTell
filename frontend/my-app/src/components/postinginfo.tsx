import React from 'react';
// import './App.css';
import sBlock from '../img/S_Block.png';
import tBlock from '../img/T_Block.png';

export default function Postinginfo() {
    return(
        <div>
            <div className="h-screen w-screen grid grid-cols-3 grid-rows-3 gap-3 justify-items-center">
                <div className="w-full">
                    <a href='/'>
                        <div className='flex text-3xl font-bold mx-2 my-3'>
                            <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                            </svg>
                            <p className='ml-2 font-productsans font-bold'>Show & Tell</p>   
                        </div>
                    </a>
                </div>

                <div className='w-full h-fit grid grid-cols-1 grid-rows-2 justify-items-center'>
                    <div className='w-full text-center'>
                        <p className='font-productsans font-bold text-3xl my-10'>Welcome to Show & Tell!</p>
                        <p className='text-1xl'>You are set to share on the following days!</p>
                        <p className='text-xs text-gray-500'>(Don't worry, you don't have to remember these, we'll give a head's up on the day.)</p>
                    </div>

                    {/* Grid of Groups */}
                    <div className='w-full grid grid-cols-1 grid-rows-5 justify-items-center px-2 -mt-3'>
                        <div className='flex my-1 rounded-[0.5rem] bg-satBlue text-white px-3 py-1 w-full h-fit'>
                            <div className='flex justify-between w-full'>
                                <p className='font-productsans font-bold'>Photography</p>
                                <p className=''>MM/DD</p>
                            </div>
                        </div>
                        <div className='flex my-1 rounded-[0.5rem] bg-satBlue text-white px-3 py-1 w-full h-fit'>
                            <div className='flex justify-between w-full'>
                                <p className='font-productsans font-bold'>Photography</p>
                                <p className=''>MM/DD</p>
                            </div>
                        </div>
                        <div className='flex my-1 rounded-[0.5rem] bg-satBlue text-white px-3 py-1 w-full h-fit'>
                            <div className='flex justify-between w-full'>
                                <p className='font-productsans font-bold'>Photography</p>
                                <p className=''>MM/DD</p>
                            </div>
                        </div>
                        <div className='flex my-1 rounded-[0.5rem] bg-satBlue text-white px-3 py-1 w-full h-fit'>
                            <div className='flex justify-between w-full'>
                                <p className='font-productsans font-bold'>Photography</p>
                                <p className=''>MM/DD</p>
                            </div>
                        </div>
                        <div className='flex my-1 rounded-[0.5rem] bg-satBlue text-white px-3 py-1 w-full h-fit'>
                            <div className='flex justify-between w-full'>
                                <p className='font-productsans font-bold'>Photography</p>
                                <p className=''>MM/DD</p>
                            </div>
                        </div>
                    </div>
                    {/* End Grid of Groups */}
                    <div className='w-full flex justify-center'>
                        <a href='/'>
                            <div className='mx-1 my-1 rounded-[1rem] bg-satRed text-white px-3 py-1 mt-14 w-fit font-bold items-center'>
                                <p>Next</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div></div>
                <div>
                    <img src={sBlock} alt="Show And Tell S Block" width="320" className=""></img>
                </div>
                <div className="w-full">
                </div>
                <div>
                    <img src={tBlock} alt="Show And Tell T Block" width="350" className=""></img>
                </div>
                <div></div>
            </div>
        </div>
        
    )
}