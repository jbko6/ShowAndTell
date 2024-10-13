import { PostData } from '../interfaces'
import { ObjectId } from 'bson'

const Post = (postData : PostData) => {
    return <>
        <label htmlFor='postModal' className='cursor-pointer'>
            <div className="w-auto bg-white rounded-[0.5rem] mx-2 my-4 px-3 pt-2 pb-3 h-fit outline-2 outline-satBlue outline">
                <div className='flex justify-between'>
                    <p className='font-productsans font-bold'>{postData.title}</p>
                    <p className='text-xs text-gray-400'>{new ObjectId(postData.id).getTimestamp().toString()}</p>
                </div>
                <div className='flex w-full text-sm -mt-2 text-gray-400'>
                    <p>{postData.author}</p>
                </div>
                <div className='mt-1 flex w-full leading-tight text-sm'>
                    <p>{postData.markdown}</p>
                </div>
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
    </>
};

export default Post;