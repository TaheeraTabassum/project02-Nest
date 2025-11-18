import React from 'react';
import pataImg from '../../assets/banner-4.png'
import Button from '../Shared/Button';
import BestCellCategory from './BestCellCategory';

const BestCells = ({ products }) => {
    return (
        <div className=" md:px-8  px-4 lg:px-3  mx-auto container">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <h1 className="text-2xl md:text-3xl font-bold text-[#18181B]">
                    Daily Best Cells
                </h1>

                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                    <p className="text-[15px] text-[#3BB77E] cursor-pointer hover:-translate-y-1 transition duration-300">
                        Featured
                    </p>
                    <p className="text-[15px] hover:text-[#3BB77E] cursor-pointer hover:-translate-y-1 transition duration-300">
                        Popular
                    </p>
                    <p className="text-[15px] hover:text-[#3BB77E] cursor-pointer hover:-translate-y-1 transition duration-300">
                        New Added
                    </p>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="mt-5">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5">

                    {/* Left Banner */}
                    <div
                        style={{ backgroundImage: `url(${pataImg})` }}
                        className="w-full lg:w-[350px] bg-cover bg-center card-border bg-base-100 h-[300px] sm:h-[350px] lg:h-[380px] rounded-lg flex items-center"
                    >
                        <div className="card-body ml-5 my-5">
                            <p className="font-semibold text-3xl md:text-4xl text-[#253D4E] mb-4 leading-snug">
                                Bring <br /> nature into <br /> your home
                            </p>
                            <Button title={"Shop Now"} />
                        </div>
                    </div>

                    {/* Product Carousel */}
                    <div className="w-full overflow-x-auto">
                        <div className="flex gap-4 sm:gap-5">
                            {products.map((product) => (
                                <BestCellCategory key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default BestCells;