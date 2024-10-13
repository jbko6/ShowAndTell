import { ObjectId } from 'bson';
import Markdown from 'react-markdown';
import { PostData } from '../interfaces';
import { CommentList } from './CommentList';
import { useEffect, useState } from 'react';

const countComments = (postData: PostData): number => {
    let count: number = 0;
    for (const comment in postData.comments) {
        count++;
    }
    
    return count;
};

const colorOptions = [
    "text-satGreen",
    "text-satBlue",
    "text-satRed"
]

export const Post = (postData : PostData) => {
    const [categoryColor, setCategoryColor] = useState<string>("");

    useEffect(() => {
        setCategoryColor(colorOptions[Math.floor(Math.random() * colorOptions.length)])
    }, [setCategoryColor])

    return <>
        <label htmlFor='postModal' className='cursor-pointer'>
            <div className="w-auto bg-white rounded-[0.5rem] mx-2 my-4 px-3 pt-2 pb-3 h-fit outline-2 outline-satBlue outline">
                <div className='flex justify-between'>
                    <p className='font-productsans font-bold'>{postData.title}</p>
                    <p className={'font-productsans italic font-bold text-s ' + categoryColor}>{postData.parentCategoryName ? postData.parentCategoryName : ""}</p>
                    <p className='text-xs text-gray-400'>{new ObjectId(postData.id).getTimestamp().toString().substring(0, 15)}</p>
                </div>
                <div className='flex w-full text-sm -mt-2 text-gray-400 py-1'>
                    <p>{postData.author}</p>
                </div>
                <div className='mt-1 flex w-full leading-tight text-sm pb-3 leading-10'>
                    <Markdown>{postData.markdown}</Markdown>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <svg className='text-yellow-500' xmlns="http://www.w3.org/2000/svg" width='20' height='20' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/>
                            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
                        </svg>
                        <p className='ml-2 text-xs font-bold '>14</p>
                    </div>
                    <div className='flex items-center'>
                        <p className='mr-2 text-xs font-bold '>{countComments(postData)}</p>
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
            <label className='outline outline-satGreen max-h-lg bg-white h-fit max-w-lg w-1/2 mx-2 my-[12rem] px-3 pt-2 pb-3 rounded-[1rem]' htmlFor=''>
                    <div className='flex justify-between'>
                        <p className='font-productsans font-bold'>{postData.title}</p>
                        <p className='text-xs text-gray-400'>{new ObjectId(postData.id).getTimestamp().toString()}</p>
                    </div>
                    <div className='flex w-full text-sm -mt-2 text-gray-400'>
                        <p>{postData.author}</p>
                    </div>
                    {/* <img src={tmpImg} className="my-2 rounded-[1rem]" alt=""></img> */}
                    <div className='mt-1 flex w-full leading-tight text-sm'>
                        <p>{postData.markdown}</p>
                    </div>
            </label>
            <label className='outline outline-satBlue max-h-lg bg-white h-fit max-w-lg w-1/2 mx-2 my-[12rem] px-3 py-2 rounded-[1rem]' htmlFor=''>
                    <div className='flex justify-between mb-1'>
                        <p className='font-bold text-lg'>Comments</p>
                        <div className='flex items-center'>
                            <p className='mr-2 text-xs font-bold'>{countComments(postData)}</p>
                            <svg className='text-satBlue' xmlns="http://www.w3.org/2000/svg" width='20' height='20' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                            </svg>
                        </div>
                    </div>
                    <hr className="h-0.5 my-1 bg-gray-300 border-0 dark:bg-gray-700 mb-3"></hr>
                    {/* POST COMMENTS */}
                    <div>
                        <CommentList commentList={postData.comments} />
                    </div>
            </label>
        </label>
    </>
};

export default Post;