import React from 'react';
import tmpImg from '../img/beans.jpg';
// import './App.css';

export default function Home() {
    return(
        <div className="h-screen w-screen grid grid-cols-3 grid-rows-1 gap-3 justify-items-center outline">
            <div className="outline w-full">
                <p>left</p>
            </div>
            <div className="outline w-full flex justify-center">
                <div className="w-full bg-gray-200 rounded-[1rem] mx-2 my-2 px-3 py-2 h-fit outline">
                    <p>TITLE GOES HERE</p>
                    <img src={tmpImg} className="my-2 rounded-[2rem]" alt=""></img>
                    <div>
                        <p>Comments</p>
                        <div className='outline bg-gray-400 h-[1rem]'>

                        </div>
                    </div>
                </div>
            </div>
            <div className="outline w-full">
                <p>RIGHT</p>

                <label htmlFor="modal" className='cursor-pointer'>Test</label>

                <input type="checkbox" id="tw-modal" className="peer fixed appearance-none"/>

                <label htmlFor="modal" className='invisible opacity-0 transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 peer-checked:[&>*]:translate-y-0 peer-checked:[&>*]:scale-100'>
                    <label className='transition' htmlFor="">
                        <p>Opened</p>
                    </label>
                </label>

                {/* <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <h3 id="modal-title">Deactivate account</h3>
                                <div>
                                    <p className="">EEE</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div> */}

            </div>
        </div>
    )
}