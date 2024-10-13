import React from 'react'
import T_Block from '../img/T_Block.png';
import P_Ex from '../img/post.png';
import P_Ex2 from '../img/post2.png';
import Join from '../img/join.png';

const Examples = () => {
  return (
    <div className='bg-[#bfd7eb63] py-24 m-auto'>
            <div className='text-center text-2xl font-semibold text-[#9c1229] pb-20'>
                Share your progress and find inspiration
            </div>

            <div className='drop-shadow-md overflow-hidden max-w-[1280px] w-full m-auto
                            grid justify-center gap-8 grid-cols-3 grid-rows-1'>
                <div> 
                    <img src={P_Ex} className='bg-white rounded-[0.5rem] object-cover'/>
                </div>
                <div>
                    <img src={P_Ex2} className='bg-white rounded-[0.5rem] object-cover'/>
                </div>
                <div>
                    <img src={Join} className='bg-white rounded-[0.5rem] object-cover'/>
                </div>
            </div>

    </div>
  )
}

export default Examples