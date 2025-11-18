import React from 'react';
import { FaStar } from 'react-icons/fa6';

const TopCelling = ({ products }) => {
    return (
        <div>
            <div className=" md:px-8  px-4 lg:px-3  mx-auto container  lg:mt-10 mt-9">
                {/* Header Titles */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-between items-start text-center sm:text-left">
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-[#18181B]">
                            Top Selling
                        </h1>
                        <p className="border-b-2 w-16 md:w-20 mt-2 border-[#BCE3C9] mx-auto sm:mx-0"></p>
                    </div>

                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-[#18181B]">
                            Trending Products
                        </h1>
                        <p className="border-b-2 w-16 md:w-20 mt-2 border-[#BCE3C9] mx-auto sm:mx-0"></p>
                    </div>

                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-[#18181B]">
                            Recently
                        </h1>
                        <p className="border-b-2 w-16 md:w-20 mt-2 border-[#BCE3C9] mx-auto sm:mx-0"></p>
                    </div>

                    <div>
                        <h1 className="text-xl md:text-2xl font-bold text-[#18181B]">
                            Top Rated
                        </h1>
                        <p className="border-b-2 w-16 md:w-20 mt-2 border-[#BCE3C9] mx-auto sm:mx-0"></p>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 p-3 bg-white rounded-lg   hover:-translate-y-1.5 transition-all duration-500 cursor-pointer"
                        >
                            {/* Product Image */}
                            <img
                                className="w-20 h-20 object-cover rounded-lg"
                                src={product.image1}
                                alt={product.name}
                            />

                            {/* Product Info */}
                            <div>
                                <h2 className="text-[13px] md:text-[14px] font-medium text-[#253D4E] hover:text-[#3BB77E] transition">
                                    {product.name}
                                </h2>

                                {/* Rating */}
                                <div className="text-[#FDC040] flex items-center text-sm mt-1">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar className="text-[#B6B6B6]" />
                                    <p className="text-[#B6B6B6] ml-2 text-xs">
                                        ({product.rating})
                                    </p>
                                </div>

                                {/* Price */}
                                <p className="text-[#3BB77E] font-bold mt-2 text-[16px] md:text-[18px]">
                                    {product.price}{" "}
                                    <span className="line-through text-gray-400 text-[14px] md:text-[16px]">
                                        {product.oldPrice}
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default TopCelling;