import React, { useEffect, useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { FaCartShopping, FaStar } from 'react-icons/fa6';
import useData from '../hook/useData';




const Countdown = ({ ml1, ml2, weidth, p, text, top ,t}) => {
    const { products } = useData();
    const targetDate = new Date("2025-12-31T23:59:59").getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);


    return (
          <div className=' px-4 lg:px-3  mx-auto container'>
            <div className='flex items-center justify-between mt-4'>
                <h1 className='text-2xl font-bold text-[#18181B]'>Deals Of The Day</h1>
                <div className='flex items-center gap-2 hover:text-[#3BB77E] cursor-pointer hover:-translate-y-1 duration-300 '>
                    <p className='text-[15px]  '>All Deals</p>
                    <p><IoIosArrowForward /></p>
                </div>
            </div>
            <div>
                {/* first */}

                <div className='grid lg:grid-cols-4 grid-cols-1 gap-4 lg:mb-30 mt-5'>
                    {
                        products.slice(0,4).map(product => (
                            <div className='relative'>
                                <div className=''>
                                    <img  className='lg:w-80 w-90 rounded-lg relative' src={product.bgImg} alt="" srcset="" />
                                </div>
                               
                                    <div className={`grid gap-3 grid-flow-col absolute ${t}  lg:gap-2 ${ml1} text-center auto-cols-max`}>
                                        <div className={`flex flex-col ${p}  bg-[#FFFFFF]  rounded-md shadow-md   text-[#97A3A7]`}>
                                            <span className={`countdown font-mono ${text} text-[#3BB77E]`}>
                                                <span style={{ "--value": timeLeft.days }}></span>
                                            </span>
                                            days
                                        </div>
                                        <div className={`flex flex-col ${p}  bg-[#FFFFFF]  rounded-md shadow-md   text-[#97A3A7]`}>
                                            <span className={`countdown font-mono ${text} text-[#3BB77E]`}>
                                                <span style={{ "--value": timeLeft.hours }}></span>
                                            </span>
                                            hours
                                        </div>
                                        <div className={`flex flex-col ${p}  bg-[#FFFFFF]  rounded-md shadow-md   text-[#97A3A7]`}>
                                            <span className={`countdown font-mono ${text} text-[#3BB77E]`}>
                                                <span style={{ "--value": timeLeft.minutes }}></span>
                                            </span>
                                            min
                                        </div>
                                        <div className={`flex flex-col ${p}  bg-[#FFFFFF]  rounded-md shadow-md   text-[#97A3A7]`}>
                                            <span className={`countdown font-mono ${text} text-[#3BB77E]`}>
                                                <span style={{ "--value": timeLeft.seconds }}></span>
                                            </span>
                                            sec
                                        </div>
                                    </div>
                                   

                                
                                <div className={`lg:p-4 p-4 ${ml2} shadow-md absolute rounded-md ${weidth}  ${top} bg-white`}>
                                    
                                    <h2 className="card-title text-[13px] text-[#253D4E]">
                                        {product.name}
                                    </h2>
                                    <div className='text-[#FDC040] flex items-center'>
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar className='text-[#B6B6B6]' />
                                        <p className='text-[#B6B6B6] ml-2'>({product.rating})</p>
                                    </div>
                                    <p className='text-[#B6B6B6] text-sm'>By : <span className='text-[#3BB77E] '>{product.brand}</span> </p>
                                    <div className='flex items-center justify-between mt-3'>
                                        <p className='text-[#3BB77E] font-bold text-[18px]'>{product.price} <span className='line-through text-gray-400 text-[16px]'>{product.oldPrice}</span></p>
                                        <button className='text-[#3BB77E] btn w-20 rounded-md   hover:text-white bg-[#e3fff2] hover:bg-[#3BB77E] hover:-translate-y-1 duration-500'> <span className=''><FaCartShopping /></span>Add</button>
                                    </div>

                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    );
};

export default Countdown;