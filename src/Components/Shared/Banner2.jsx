import React from 'react';

import { SiMinutemailer } from 'react-icons/si';


const Banner2 = ({title,subtitle,highlight,bgImage1,image,w,mt,ml}) => {
    return (
        <div className=' px-4 lg:px-3  mx-auto container'>
            <div style={{ backgroundImage: `url(${bgImage1})` }} className="hero  h-[350px] bg-cover rounded-2xl bg-center w-full my-4 ">
                <div className="flex justify-between px-10 ">

                    <div className=' mt-20 lg:ml-10 ml-0 '>
                        <h1 className='lg:text-4xl text-2xl font-bold text-[#253D4E] '>{title} </h1>
                        <p className='text-[#7E7E7E] my-8 lg:text-[19px] text-[15px]'>{subtitle} <span className='text-[#3BB77E]'>{highlight}</span></p>

                         <div className="flex items-center  ml-2 md:ml-0 bg-white rounded-full shadow-sm overflow-hidden mb-9 lg:mb-0 w-[280px] md:w-[400px]">
                                    <div className="flex items-center px-3 md:px-4 text-gray-400">
                                       <p><SiMinutemailer /></p>
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="flex-1 md:py-3 px-2 py-2 text-[10px] md:text-[14px] outline-none text-gray-700 placeholder-gray-400"
                                    />
                                    <button className="bg-[#3BB77E] hover:bg-[#3BB77E] text-white font-medium py-3 md:px-6 px-3 text-sm md:text-[15px] rounded-full transition-all duration-300">
                                        Subscribe
                                    </button>
                                </div>

                    </div>
                    <img className={`${w} ${mt} ${ml} hidden lg:block`} src={image} alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default Banner2;