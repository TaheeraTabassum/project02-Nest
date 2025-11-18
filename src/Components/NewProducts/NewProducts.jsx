import React from 'react';

import { FaStar } from 'react-icons/fa6';
import useData from '../hook/useData';

const NewProducts = () => {
    const { products } = useData();
    return (
        <div className='border border-gray-300 rounded-xl p-3   mt-6 shadow-sm'>
            <h1 className='font-bold lg:text-xl text-2xl text-[#253D4E] ml-2'>New Products</h1>
            <div className='border border-gray-300 h-0.1 my-2'>
                <div className='border border-[#b9f4d8] w-20'></div>
            </div>

            <div className='my-4'>
                {
                    products.slice(0,3).map(product => (
                        <div className=" lg:my-2 my-5 flex items-center hover:-translate-y-1.5 duration-500 gap-3 bg-base-100 relative transition cursor-pointer   ">
                            <img className='lg:w-18 w-25 rounded-1xl '
                                src={product.image1}
                                alt="Shoes" />
                            <div className="">
                                <h2 className="card-title text-[20px] lg:text-[11px] hover:text-orange-300 text-[#3BB77E] ">
                                    {product.category}
                                </h2>
                                  <p className='text-gray-500  mt-2 text-[14px] lg:text-[10px]'>${product.price} </p>
                                <div className='text-[#FDC040] text-[13px] lg:text-[8px] flex items-center'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar className='text-[#B6B6B6]' />
                                </div>

                              


                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default NewProducts;