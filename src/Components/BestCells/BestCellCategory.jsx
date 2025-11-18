import React from 'react';
import { FaCartShopping, FaStar } from 'react-icons/fa6';

const BestCellCategory = ({ product }) => {

    return (
        <div>
            <div className="card bg-base-100 relative h-[380px] w-50 transition cursor-pointer  hover:shadow-md border border-gray-200">

                <figure>

                    <span style={{ backgroundColor: `${product.labelColor}` }}
                        className=' absolute top-0  left-0 text-white text-sm font-medium px-3 py-1 rounded-br-lg rounded-tl-lg ' >
                        {product.label}
                    </span>
                    <img className='w-35 mt-9 '
                        src={product.image}
                        alt="Shoes" />

                </figure>
                <div className="card-body">
                    <p className='text-[10px] text-[#B6B6B6] '>{product.category}</p>
                    <h2 className="card-title text-[10px] text-[#253D4E]">
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
                    <p className='text-[#3BB77E] font-bold text-[18px]'>{product.price} <span className='line-through text-gray-400 text-[16px]'>{product.oldPrice}</span></p>

                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                            className="bg-green-500 h-1.5 rounded-full transition-all"
                            style={{ width: `${product.progress}%` }}/>
                    </div>

                    <p className='text-[12px] my-1'>Sold : 90/120</p>

                    <button className=' btn w-30 rounded-md text-[12px]   text-white bg-[#3BB77E] hover:bg-[#FDC040] hover:-translate-y-1 duration-500'> <span className=''><FaCartShopping /></span>Add to cart</button>


                </div>
            </div>
        </div>
    );
};

export default BestCellCategory;