import React from 'react';

export default function Group() {
    return(
        <div className="h-screen w-screen grid grid-cols-3 grid-rows-1 gap-3 justify-items-center outline">
            {/* Left Column */}
            <div className="outline w-full">
                <div className='flex text-3xl font-bold mx-2 my-3'>
                    <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    <a href='/'>Logo & Name</a>
                    <a className='ml-auto' href='/'>
                        <svg className='text-black-100' xmlns="http://www.w3.org/2000/svg" width='40' height='40' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </a>
                </div>
            </div>

            {/* Middle Column */}
            <div className="outline w-full justify-center">
                <div className='outline flex justify-between w-auto mx-2 my-4 items-end'>
                    <label className='text-2xl font-bold'>[Group Name]</label>
                    <label className='text-sm'>[# of members]</label>
                </div>
                <div className="w-auto flex bg-gray-200 rounded-[1rem] mx-2 my-4 px-3 py-2 h-fit outline items-center">
                    <svg className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    <label className='font-bold text-2xl'>&nbsp; Member Name</label>
                </div>
                <div className="w-auto flex bg-gray-200 rounded-[1rem] mx-2 my-4 px-3 py-2 h-fit outline items-center">
                    <svg className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                    </svg>
                    <label className='font-bold text-2xl'>&nbsp; Anonymous</label>
                </div>
            </div>

            {/* Right Column */}
            <div className="outline w-full">
            </div>
        </div>
    )
}