import React from 'react';
import tmpImg from '../img/beans.jpg';
// import './App.css';

export default function Home() {
    return(
        <div className="h-screen w-screen grid grid-cols-3 grid-rows-1 gap-3 justify-items-center outline">
            {/* Left Column */}
            <div className="outline w-full">
                <div className='flex text-3xl font-bold mx-2 my-3'>
                    <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    <a href='/'>Logo & Name</a>   
                </div>
            </div>

            {/* Middle Column */}
            <div className="outline w-full justify-center">
                <div className="w-auto bg-gray-200 rounded-[1rem] mx-2 my-4 px-3 py-2 h-fit outline">
                    <div className='flex justify-between'>
                        <p className=''>Title Goes Here</p>
                        <p className=''>MM/DD/YYYY</p>
                    </div>
                    <div className='flex w-full'>
                        <p>user</p>
                    </div>
                    <img src={tmpImg} className="my-2 rounded-[2rem]" alt=""></img>
                    <div>
                        <p>Comments</p>
                        <div className='outline bg-gray-400 h-[1rem]'>

                        </div>
                    </div>
                </div>
                <div className="w-auto bg-gray-200 rounded-[1rem] mx-2 my-4 px-3 py-2 h-fit outline">
                    <div className='flex justify-between'>
                        <p className=''>Title Goes Here</p>
                        <p className=''>MM/DD/YYYY</p>
                    </div>
                    <div className='flex w-full'>
                        <p>user</p>
                    </div>
                    <img src={tmpImg} className="my-2 rounded-[2rem]" alt=""></img>
                    <div>
                        <p>Comments</p>
                        <div className='outline bg-gray-400 h-[1rem]'>

                        </div>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="outline w-full"> 

                <label className='ml-[8rem] mr-[2rem] mt-3 mb-1 flex text-lg font-bold'>You</label>
                <div className='flex outline justify-start ml-[8rem] mr-[2rem] mb-[3rem]'>
                    <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    <p>User Name & pfp</p>
                </div>

                <div className='flex justify-between ml-[8rem] mr-[2rem] mt-3 items-baseline'>
                    <label className='text-lg font-bold'>Groups</label>
                    <label> + Add Groups</label>
                </div>

                <div className='flex outline justify-start ml-[8rem] mr-[2rem] my-[1rem]'>
                    <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    <a href='/group'>Group 1</a>
                </div>
                <div className='flex outline justify-start ml-[8rem] mr-[2rem] my=[1rem]'>
                    <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    <p>Group 2</p>
                </div>



                {/* PAIN BELOW */}
                {/* <div>
                    <label htmlFor="modal" className='cursor-pointer'>Test</label>
                </div>

                <input type="checkbox" id="modal" className="peer appearance-none"/>

                <label htmlFor="modal" className='invisible opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100'>
                    <label>
                    <div className="absolute transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-gray-200 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
                            </div>
                        </div>
                        </div>
                    </div>
                    </label>
                </label> */}
            </div>
        </div>
    )
}