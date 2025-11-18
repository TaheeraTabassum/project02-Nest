import React from 'react';
import { IoIosArrowForward, IoIosHome, IoMdHome } from 'react-icons/io';
import { Link, NavLink } from 'react-router';
import smallBg from '../../assets/header-bg.png'
import { RxCross2 } from 'react-icons/rx';

const SmallBanner = ({title,P1,P2,btn1,btn2,btn3,btn4,btn5}) => {
    return (
        <div style={{ backgroundImage: `url(${smallBg})` }} className='h-50  px-4 lg:px-3  mx-auto container flex items-center justify-between  bg-cover rounded-3xl my-8'>
            <div className='text-sm pl-5'>
                <h1 className='text-3xl font-bold text-[#253D4E] my-3 '>{title}</h1>
                <div className='flex gap-4 items-center'>
                  <div className='flex items-center gap-1 '>
                        <span className='text-[#3BB77E] '><IoMdHome /></span>           
                         <NavLink  className="font-semibold text-[#3BB77E] " to="/">Home</NavLink>
                        
                    </div>
                      <IoIosArrowForward className='text-gray-400' />
                      <p className='text-gray-400'>{P1}  </p>
                        <IoIosArrowForward className='text-gray-400'/>
                        <p className='text-gray-400'>{P2}</p>
                </div>
            </div>

            <div className='lg:flex hidden gap-3 items-center pr-4'>
                <button className='bg-gray-100 btn shadow-md p-3 rounded-full hover:-translate-y-1 duration-500'><RxCross2 /> <span className='text-[#3BB77E] hover:text-orange-200 '>{btn1}</span></button>
                <button className='bg-gray-100 shadow-md btn p-3 rounded-full hover:-translate-y-1 duration-500'><RxCross2 /> <span className=' '>{btn2}</span></button>
                <button className='bg-gray-100 shadow-md btn p-3 rounded-full hover:-translate-y-1 duration-500'><RxCross2 /> <span className='text-[#3BB77E] hover:text-orange-200 '>{btn3}</span></button>
                <button className='bg-gray-100 shadow-md btn p-3 rounded-full hover:-translate-y-1 duration-500'><RxCross2 /> <span className='text-[#3BB77E] hover:text-orange-200 '>{btn4} </span></button>
                <button className='bg-gray-100 btn p-3 shadow-md rounded-full hover:-translate-y-1 duration-500'><RxCross2 /> <span className='text-[#3BB77E] hover:text-orange-200 '>{btn5}</span></button>
            </div>
        </div>
    );
};

export default SmallBanner;