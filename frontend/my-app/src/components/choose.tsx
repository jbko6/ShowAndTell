import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { GroupData, UserData } from '../interfaces';
import { ListCategories } from './ListCategories';
import Navbar from '../landing/navbar';

export default function Choose() {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<UserData|null>(null);
    const [cookies] = useCookies(['XSRF-TOKEN']);
    const [group, setGroup] = useState<Array<GroupData>|null>(null);

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
                    setLoading(false);
                }
            });

        setLoading(true);
        fetch('/api/groups')
            .then(response => response.text())
            .then(body => {
                if (body == '') {
                    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
                } else {
                    console.log(JSON.parse(body));
                    setGroup(JSON.parse(body));
                    setLoading(false);
                }

            });
    }, [setAuthenticated, setLoading, setUser, setGroup]);

    return(
        <div>
            <Navbar />
            <div className="h-screen w-screen grid grid-cols-3 grid-rows-1 gap-3 justify-items-center outline">
                {/* Left Column */}
                <div className="outline w-full">
                    <a href='/'>
                        <div className='flex text-3xl font-bold mx-2 my-3'>
                            <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                            </svg>
                            <p className='ml-2 font-productsans font-bold'>Show & Tell</p>
                            <a className='ml-auto' href='/'>
                            <svg className='text-black-100' xmlns="http://www.w3.org/2000/svg" width='40' height='40' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </a>
                        </div>
                    </a>
                </div>

                {/* Middle Column */}
                <div className="w-full outline">
                    <div>
                        <p className='text-3xl font-bold mx-2 mt-2'>Join Groups</p>
                        <p className='mx-2 text-gray-700 text-sm'>You're not in any groups yet! Select up to 5 below.</p>
                    </div>
                    <div className='mb-10'>

                    </div>
                    <div className='flex flex-wrap w-full'>
                        {<ListCategories categoryList={group}/>}
                    </div>
                </div>

                {/* Right Column */}
                <div className="w-full outline">

                </div>
            </div>
        </div>
    )
}