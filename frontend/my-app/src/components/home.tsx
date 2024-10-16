import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { UserData, GroupData } from '../interfaces'
import { GroupList } from './GroupList';
import PostList from './PostList';
import Navbar from '../landing/navbar';


export default function Home() {
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
                    let port = (window.location.port ? ':' + window.location.port : '');
                    if (port === ':3000') {
                        port = ':8080';
                    }
                    // redirect to a protected URL to trigger authentication
                    window.location.href = `//${window.location.hostname}${port}/api/private`;
                } else {
                    console.log(body)
                    setUser(JSON.parse(body));
                    let curUser = JSON.parse(body);
                    if (curUser!.groups == null) {
                        window.location.href = `${window.location.origin}/welcome`
                    }
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
    }, [setLoading, setUser, setGroup]);

    const logout = () => {
        fetch('http://localhost:8080/api/logout', {
            method: 'POST', credentials: 'include', 
            headers: { 'X-XSRF-TOKEN': cookies['XSRF-TOKEN']}//, 'Access-Control-Allow-Origin': 'http://localhost:8080/api/logout' , 'Access-Control-Allow-Headers': 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization', 'Access-Control-Allow-Methods': 'POST, PUT, PATCH, GET, DELETE, OPTIONS'}
        })
            .then(res => res.json())
            .then(response => {
            window.location.href = `${response.logoutUrl}`
                + `&post_logout_redirect_uri=${window.location.origin}`;
            });
    }

    if (loading) {
        return <p>Loading...</p>
    }

    return(
        <div>
            <Navbar showJoin={false} showLogout={true} logout={logout} />
            <div className="h-screen w-screen grid grid-cols-3 grid-rows-1 gap-3 justify-items-center">
                {/* Left Column */}
                <div className="w-full">
                </div>

                {/* Middle Column */}
                <div className="w-full justify-center">
                    {/* Displays posts from all groups */}
                    {group ? <PostList groupData={group} /> : <></>}
                </div>

                {/* Right Column */}
                <div className="w-full"> 

                    <label className='ml-[8rem] mr-[2rem] mt-3 mb-1 flex text-lg font-bold'>You</label>
                    <div className='flex justify-start ml-[8rem] mr-[2rem] mb-[1rem]'>
                        <a href='/404'>
                            <div className='bg-white items-center h-fit flex'>
                                <div className='w-fit mr-2 self-start'>
                                    {user ? <div><img className='rounded-[2rem] h-11 w-11' src={user.picture}/></div> :
                                    <svg className='text-gray-500' xmlns="http://www.w3.org/2000/svg" width='42' height='42' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/>
                                    </svg>}
                                </div>
                                <div className='mb-1.5'>
                                    <p className='text-xl'>{user ? user.name : ""}</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className='flex justify-between ml-[8rem] mr-[2rem] mt-[2rem] mb-[0.5rem] items-baseline'>
                        <label className='text-lg font-bold'>Groups</label>
                        <label> + Add Groups</label>
                    </div>

                    <GroupList groupList={group} />
                </div>
            </div>
        </div>
    )
}