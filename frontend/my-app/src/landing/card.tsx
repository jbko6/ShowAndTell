import React from 'react'
import T_Block from '../img/T_Block.png'

const Card = () => {
  return (
    <div className='bg-white drop-shadow-md overflow-hidden round-2xl'>
        <img src={T_Block} className='h-11 w-full object-cover'/>
    </div>

  ) 
}

export default Card