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

                <label htmlFor='postModal' className='cursor-pointer'>
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
                </label>
                
                <input type='checkbox' id='postModal' className='peer fixed appearance-none opacity-0' />

                <label htmlFor='postModal' className='
                    pointer-events-none invisible fixed inset-0 flex cursor-pointer items-start justify-center overflow-hidden backdrop-blur-md bg-opacity-20 bg-white 
                    overscroll-contain opacity-0 transition-all duration-300 ease-in-out 
                    peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100'>
                    <label className='max-h-lg bg-white h-fit max-w-lg w-auto mx-2 my-[12rem] px-3 py-2 rounded-[1rem]' htmlFor=''>
                            <div className='flex justify-between'>
                                <p className=''>Title Goes Here</p>
                                <p className=''>MM/DD/YYYY</p>
                            </div>
                            <div className='flex w-full'>
                                <p>user</p>
                            </div>
                            <img src={tmpImg} className="my-2 rounded-[2rem]" alt=""></img>
                            <div>
                                <p>Description</p>
                                <div className='outline bg-gray-400 h-fit'>
                                    <p>pointer-events-none invisible fixed inset-0 flex cursor-pointer items-center justify-center overflow-hidden backdrop-blur-md bg-opacity-20 bg-white 
                    overscroll-contain opacity-0 transition-all duration-200 ease-in-out 
                    peer-checked:pointer-events-auto</p>
                                </div>
                            </div>
                    </label>
                    <label className='max-h-lg bg-white h-fit max-w-lg w-auto mx-2 my-[12rem] px-3 py-2 rounded-[1rem]' htmlFor=''>
                            <div className='flex justify-between'>
                                <p className=''>Comments</p>
                                <p className=''># of Comments</p>
                            </div>
                            <div>
                                <div className='outline bg-gray-400 h-fit'>
                                    <p>pointer-events-none invisible fixed inset-0 flex cursor-pointer items-center justify-center overflow-hidden backdrop-blur-md bg-opacity-20 bg-white 
                    overscroll-contain opacity-0 transition-all duration-200 ease-in-out 
                    peer-checked:pointer-events-auto</p>
                                </div>
                            </div>
                    </label>
                </label>
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
            </div>
        </div>
    )
}