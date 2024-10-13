import React from 'react';
//import './App.css';
import logo from '../img/Show_and_Tell_Logo.png';
import Navbar from '../landing/navbar';

export default function About() {
    return (
        <div>
        <Navbar />
        <div className="h-screen w-screen grid grid-cols-3 grid-rows-3 gap-3 justify-items-center">
            <div className="w-full">
                {/* <a href='/'>
                    <div className='flex text-3xl font-bold mx-2 my-3'>
                        <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                        </svg>
                        <p className='ml-2 font-productsans font-bold'>Show & Tell</p>
                        <a className='ml-auto' href='/'>
                    </a>
                    </div>
                </a> */}
            </div> 

            <div className='w-full h-fit grid grid-cols-1 grid-rows-2 justify-items-center'>
                    <div className='w-full text-center px-5'>
                        <p className='font-productsans font-bold text-3xl my-10'>About Us</p>
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
                        <a href='/landingpage'>
                            <div className='mx-1 my-1 rounded-[1rem] bg-satRed text-white px-3 py-1 mt-14 w-fit font-bold items-center'>
                                <p>Join the Community!</p>
                            </div>
                        </a>
                    </div>
            </div>
        </div>
        </div>
    )
    
}