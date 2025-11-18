import React from 'react';
import bg1 from '../../assets/banner-1.png'
import bg2 from '../../assets/banner-2.png'
import bg3 from '../../assets/banner-3.png'

import Button from '../Shared/Button';


const MediumBanner = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  px-4 lg:px-3  mx-auto container sm:gap-6 my-8">
            {/* Card 1 */}
            <div
                style={{ backgroundImage: `url(${bg1})` }}
                className="bg-cover bg-center bg-no-repeat rounded-2xl h-[220px] sm:h-[240px] lg:h-[260px] flex items-center shadow-md hover:shadow-lg transition-all duration-300"
            >
                <div className="px-6 sm:px-8">
                    <p className="font-semibold text-xl sm:text-2xl text-[#253D4E] leading-snug mb-4">
                        Everyday Fresh & <br /> Clean with Our <br /> Products
                    </p>
                    <Button title={"Shop Now"} />
                </div>
            </div>

            {/* Card 2 */}
            <div
                style={{ backgroundImage: `url(${bg2})` }}
                className="bg-cover bg-center bg-no-repeat rounded-2xl h-[220px] sm:h-[240px] lg:h-[260px] flex items-center shadow-md hover:shadow-lg transition-all duration-300"
            >
                <div className="px-6 sm:px-8">
                    <p className="font-semibold text-xl sm:text-2xl text-[#253D4E] leading-snug mb-4">
                        Make your Breakfast <br /> Healthy and Easy
                    </p>
                    <Button title={"Shop Now"} />
                </div>
            </div>

            {/* Card 3 */}
            <div
                style={{ backgroundImage: `url(${bg3})` }}
                className="bg-cover bg-center bg-no-repeat rounded-2xl h-[220px] sm:h-[240px] lg:h-[260px] flex items-center shadow-md hover:shadow-lg transition-all duration-300"
            >
                <div className="px-6 sm:px-8">
                    <p className="font-semibold text-xl sm:text-2xl text-[#253D4E] leading-snug mb-4">
                        The Best Organic <br /> Products Online
                    </p>
                    <Button title={"Shop Now"} />
                </div>
            </div>
        </div>

    );
};

export default MediumBanner;