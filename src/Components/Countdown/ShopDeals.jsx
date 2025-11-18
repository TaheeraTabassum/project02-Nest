import React, { useEffect, useState } from 'react';

import { FaStar, FaShoppingCart } from "react-icons/fa";

import { IoIosArrowForward } from 'react-icons/io';

const ShopDeals = ({products}) => {
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
        },[targetDate]);
    return (
        <div className='mx-auto container  mt-16  mb-15 lg:block hidden'>
                 
                  <div className='flex items-center justify-between'>
                      <h1 className='text-2xl font-bold text-[#18181B]'>Deals Of The Day</h1>
                      <div className='flex items-center gap-2 hover:text-[#3BB77E] cursor-pointer hover:-translate-y-1 duration-300 '>
                          <p className='text-[15px]  '>All Deals</p>
                          <p><IoIosArrowForward /></p>
                      </div>
                  </div>
                  <div>
                      {/* first */}
      
                      <div className='grid grid-cols-4 gap-4 mb-30 mt-5'>
                          {
                              products?.slice(0,4).map(product => (
                                  <div className='relative'>
                                      <div className=''>
                                          <img  className='w-70 rounded-lg relative' src={product?.bgImg} alt="" srcset="" />
                                      </div>
                                     
                                          <div className="grid grid-flow-col absolute top-23   gap-2 ml-5 text-center auto-cols-max">
                                              <div className="flex flex-col   bg-[#FFFFFF]  rounded-md shadow-md   text-[#97A3A7] text-sm p-2 text-center items-center">
                                                  <span className="countdown font-mono  text-[#3BB77E]">
                                                      <span style={{ "--value": timeLeft.days }}></span>
                                                  </span>
                                                 <p>Days</p>
                                              </div>
                                              <div className="flex flex-col  bg-[#FFFFFF]  rounded-md shadow-md text-[#97A3A7] items-center  p-2 text-sm">
                                                  <span className="countdown font-mono text-[#3BB77E]">
                                                      <span style={{ "--value": timeLeft.hours }}></span>
                                                  </span>
                                                  hours
                                              </div>
                                              <div className="flex flex-col  bg-[#FFFFFF]  rounded-md shadow-md text-[#97A3A7] text-sm items-center p-2">
                                                  <span className="countdown font-mono t text-[#3BB77E]">
                                                      <span style={{ "--value": timeLeft.minutes }}></span>
                                                  </span>
                                                  <p className='text-sm'>min</p>
                                              </div>
                                              <div className="flex flex-col  bg-[#FFFFFF] rounded-md shadow-md  text-[#97A3A7] text-sm items-center p-2">
                                                  <span className="countdown font-mono  text-[#3BB77E]">
                                                      <span style={{ "--value": timeLeft.seconds }}></span>
                                                  </span>
                                                  sec
                                              </div>
                                          </div>
                                         
      
                                      
                                      <div className=" p-4 shadow-md absolute rounded-md w-53 ml-3 top-43 bg-white ">
                                          
                                          <h2 className="card-title text-xs text-[#253D4E]">
                                              {product.name}
                                          </h2>
                                          <div className='text-[#FDC040] flex items-center text-sm'>
                                              <FaStar />
                                              <FaStar />
                                              <FaStar />
                                              <FaStar />
                                              <FaStar className='text-[#B6B6B6]' />
                                              <p className='text-[#B6B6B6] ml-2'>({product.rating})</p>
                                          </div>
                                          <p className='text-[#B6B6B6] text-sm'>By : <span className='text-[#3BB77E] '>{product.brand}</span> </p>
                                          <div className='flex justify-between items-center'>
                                          <div className="flex items-center gap-2  mt-2">
                                                <span className="text-sm font-bold text-green-600">${product.price}</span>
                                                  <span className="text-sm text-gray-500 line-through">${product.oldPrice}</span>
                                              
                                              </div>
                                              <button className=" bg-green-100 text-green-700 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-green-200 transition text-xs font-medium px-2">
                                                <FaShoppingCart />
                                                <p>Add</p>
                                               
                                              </button>
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

export default ShopDeals;