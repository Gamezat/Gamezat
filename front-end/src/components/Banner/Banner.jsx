import React from 'react';
import img from '../../../src/components/img/GamezatLogo2.png'

export default function Banner() {
    return (
        <div className='relative' >
            {/* <img src={img} className="w-72 absolute  lg:left-[43%] mt-24 md:left-[40%]  sm:left-[30%] font-bold  text-5xl text-white" alt="" /> */}
            <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  font-bold  bg-gradient-to-r p-3 rounded from-pink-600 to-purple-600   text-3xl '>The home for all gamers, Including you 🎮</span>
            <img className='w-full h-[700px] object-cover object-center' src="https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg" alt="" />

        </div>
    );
}
