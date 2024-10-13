import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import tmpImg from '../img/beans.jpg';
// import './App.css';

export default function Home() {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState(undefined);
    const [cookies] = useCookies(['XSRF-TOKEN']);

    useEffect(() => {
        setLoading(true);
        fetch('/api/user', {credentials: 'include'})
            .then(response => response.text())
            .then(body => {
                if (body == '') {
                    setAuthenticated(false);
                    let port = (window.location.port ? ':' + window.location.port : '');
                    if (port === ':3000') {
                        port = ':8080';
                    }
                    // redirect to a protected URL to trigger authentication
                    window.location.href = `//${window.location.hostname}${port}/api/private`;
                } else {
                    console.log(body)
                    setUser(JSON.parse(body));
                    setAuthenticated(true);
                }
            });
    }, [setAuthenticated, setLoading, setUser]);

    const logout = () => {
        fetch('/api/logout', {
            method: 'POST', credentials: 'include',
            headers: { 'X-XSRF-TOKEN': cookies['XSRF-TOKEN'] }
        })
            .then(res => res.json())
            .then(response => {
            window.location.href = `${response.logoutUrl}?id_token_hint=${response.idToken}`
                + `&post_logout_redirect_uri=${window.location.origin}`;
            });
    }

    return(
        <div className="h-screen w-screen grid grid-cols-3 grid-rows-1 gap-3 justify-items-center">
            {/* Left Column */}
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

            {/* Middle Column */}
            <div className="w-full justify-center">

                {/* The post as seen on the FEED */}
                <label htmlFor='postModal' className='cursor-pointer'>
                    <div className="w-auto bg-white rounded-[0.5rem] mx-2 my-4 px-3 pt-2 pb-3 h-fit outline-2 outline-satBlue outline">
                        <div className='flex justify-between'>
                            <p className='font-productsans font-bold'>Title Goes Here</p>
                            <p className='text-xs text-gray-400'>MM/DD/YYYY</p>
                        </div>
                        <div className='flex w-full text-sm -mt-2 text-gray-400'>
                            <p>user</p>
                        </div>
                        <div className='mt-1 flex w-full leading-tight text-sm'>
                            <p>Description asdfjlsakfdlkfdsajlksa lkjsa lksaj flkjsa lkjsafd lkjfdsa salkdjdsalkjf lsa klsa slka llkas as sa s </p>
                        </div>
                        <img src={tmpImg} className="my-2 rounded-[0.5rem]" alt=""></img>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center'>
                                <svg className='text-yellow-500' xmlns="http://www.w3.org/2000/svg" width='20' height='20' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/>
                                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
                                </svg>
                                <p className='ml-2 text-xs font-bold '>14</p>
                            </div>
                            <div className='flex items-center'>
                                <p className='mr-2 text-xs font-bold '>123</p>
                                <svg className='text-satBlue' xmlns="http://www.w3.org/2000/svg" width='20' height='20' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </label>
                
                <input type='checkbox' id='postModal' className='peer fixed appearance-none opacity-0' />

                {/* The post in ISOLATED view */}
                <label htmlFor='postModal' className='
                    pointer-events-none invisible fixed inset-0 flex cursor-pointer items-start justify-center overflow-hidden backdrop-blur-md bg-opacity-20 bg-white 
                    overscroll-contain opacity-0 transition-all duration-300 ease-in-out 
                    peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100'>
                    <label className='outline outline-satGreen max-h-lg bg-white h-fit max-w-lg w-auto mx-2 my-[12rem] px-3 pt-2 pb-3 rounded-[1rem]' htmlFor=''>
                            <div className='flex justify-between'>
                                <p className='font-productsans font-bold'>Title Goes Here</p>
                                <p className='text-xs text-gray-400'>MM/DD/YYYY</p>
                            </div>
                            <div className='flex w-full text-sm -mt-2 text-gray-400'>
                                <p>user</p>
                            </div>
                            <img src={tmpImg} className="my-2 rounded-[1rem]" alt=""></img>
                            <div className='mt-1 flex w-full leading-tight text-sm'>
                                <p>Description asdlkj asdlkfsadlk dsalklas kalks lksa lksalkdsa jadslaskjaslsalksadlkjdf salkasla l alla la al al al </p>
                            </div>
                    </label>
                    <label className='outline outline-satBlue max-h-lg bg-white h-fit max-w-lg w-1/2 mx-2 my-[12rem] px-3 py-2 rounded-[1rem]' htmlFor=''>
                            <div className='flex justify-between mb-1'>
                                <p className='font-bold text-lg'>Comments</p>
                                <div className='flex items-center'>
                                    <p className='mr-2 text-xs font-bold'>123</p>
                                    <svg className='text-satBlue' xmlns="http://www.w3.org/2000/svg" width='20' height='20' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                    </svg>
                                </div>
                            </div>
                            <hr className="h-0.5 my-1 bg-gray-300 border-0 dark:bg-gray-700 mb-3"></hr>
                            {/* POST COMMENTS */}
                            <div>
                                {/* Start Comment */}
                                <div>
                                    <div className='bg-white items-center h-fit flex'>
                                        <div className='w-fit mr-2 self-start'>
                                            <svg className='text-gray-500' xmlns="http://www.w3.org/2000/svg" width='35' height='35' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/>
                                            </svg>
                                        </div>
                                        <div className=''>
                                            <p className='text-md font-bold'>User</p>
                                            <p className='text-sm -mt-1'>A comment asdlk lksa lksalkdsalka dslka dslksa lksa laal lal al l la la al alkdsf l isiosa o aoidsa oix xoi</p>
                                        </div>
                                    </div>
                                    <hr className="h-px my-1 bg-gray-500 border-0 dark:bg-gray-700"></hr>
                                </div>
                                {/* End Comment */}

                                <div>
                                    <div className='bg-white items-center h-fit flex'>
                                        <div className='w-fit mr-2 self-start'>
                                            <svg className='text-gray-500' xmlns="http://www.w3.org/2000/svg" width='35' height='35' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/>
                                            </svg>
                                        </div>
                                        <div className=''>
                                            <p className='text-md font-bold'>User</p>
                                            <p className='text-sm -mt-1'>A comment asdlk lksa lksalkdsalka dslka dslksa lksa laal lal al l la la al alkdsf l isiosa o aoidsa oix xoi</p>
                                        </div>
                                    </div>
                                    <hr className="h-px my-1 bg-gray-500 border-0 dark:bg-gray-700"></hr>
                                </div>

                            </div>
                    </label>
                </label>
            </div>

            {/* Right Column */}
            <div className="w-full"> 

                <label className='ml-[8rem] mr-[2rem] mt-3 mb-1 flex text-lg font-bold'>You</label>
                <div className='flex justify-start ml-[8rem] mr-[2rem] mb-[1rem]'>
                    <a href='/404'>
                        <div className='bg-white items-center h-fit flex'>
                            <div className='w-fit mr-2 self-start'>
                                <svg className='text-gray-500' xmlns="http://www.w3.org/2000/svg" width='42' height='42' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/>
                                </svg>
                            </div>
                            <div className=''>
                                <p className='text-xl'>Aiden</p>
                            </div>
                        </div>
                    </a>
                </div>

                <div className='flex justify-between ml-[8rem] mr-[2rem] mt-[2rem] mb-[0.5rem] items-baseline'>
                    <label className='text-lg font-bold'>Groups</label>
                    <label> + Add Groups</label>
                </div>

                <div className='flex justify-start ml-[8rem] mr-[2rem] mb-[1rem]'>
                    <a href='/group'>
                        <div className='bg-white items-center h-fit flex'>
                            <div className='w-fit mr-2 self-start'>
                                <svg className='text-gray-500' xmlns="http://www.w3.org/2000/svg" width='42' height='42' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/>
                                </svg>
                            </div>
                            <div className=''>
                                <p className='text-xl'>Painting</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className='flex justify-start ml-[8rem] mr-[2rem] mb-[1rem]'>
                    <a href='/group'>
                        <div className='bg-white items-center h-fit flex'>
                            <div className='w-fit mr-2 self-start'>
                                <svg className='text-gray-500' xmlns="http://www.w3.org/2000/svg" width='42' height='42' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/>
                                </svg>
                            </div>
                            <div className=''>
                                <p className='text-xl'>Landscape Photography</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}