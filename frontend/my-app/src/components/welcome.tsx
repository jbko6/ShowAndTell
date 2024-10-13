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
                                    Welcome to <span className='text-gray-300'>Show & Tell</span>! We're a website dedicated towards giving people a place to share and be 
                                    inspired by projects of all kinds.
                                    <br></br>
                                    <br></br>
                                    Have you ever had a project you wanted to share? Tired of your posts getting lost in the aether of the internet? Well, look no further! We connect people to a group of 50 others who share your hobbies. From art and writing, to coding and cooking, you can contribute to it all. You can even get into the nitty gritty of it, categories such as art giving you spaces specific to oil painting or pen and ink if you so choose.
                                    <br></br>
                                    <br></br>
                                    Share your progress on your projects every ten days, you and four others taking up the spotlight for the day. Never again will your works be lost to the masses.
                                    <br></br>
                                    <br></br>
                                    Challenge yourself! Make progress on your works! Get inspiration!
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