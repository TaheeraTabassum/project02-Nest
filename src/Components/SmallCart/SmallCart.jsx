import React from 'react';
import cartImg1 from '../../assets/icon-1.svg'
import cartImg2 from '../../assets/icon-2.svg'
import cartImg3 from '../../assets/icon-3.svg'
import cartImg4 from '../../assets/icon-4.svg'
import cartImg5 from '../../assets/category-5.svg'

const SmallCart = () => {
    return (
        <div>
            <div className='mx-auto container lg:px-1 px-6'>
                <div className="bg-white py-4">
                    <div className="container mx-auto grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 ">


                        <div className="flex items-center gap-3 bg-[#f7f9fc] rounded-md px-5 py-2 shadow-sm hover:shadow-md ">
                            <img src={cartImg1} alt="Best prices" className="w-15 h-15 transition-transform hover:-translate-y-2 duration-300" />
                            <div>
                                <h3 className="font-semibold text-sm text-gray-900">Best prices & offers</h3>
                                <p className="text-gray-500 text-sm">Orders $50 or more</p>
                            </div>
                        </div>


                        <div className="flex items-center gap-3 bg-[#f7f9fc] rounded-md px-5 py-2 shadow-sm hover:shadow-md ">
                            <img src={cartImg2} alt="Best prices" className="w-15 h-15 transition-transform hover:-translate-y-2 duration-300" />
                            <div>
                                <h3 className="font-semibold text-sm text-gray-900">Free Delivery</h3>
                                <p className="text-gray-500 text-sm">24/7 amazing services</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-[#f7f9fc] rounded-md px-5 py-2 shadow-sm hover:shadow-md ">
                            <img src={cartImg3} alt="Best prices" className="w-15 h-15 transition-transform hover:-translate-y-2 duration-300" />
                            <div>
                                <h3 className="font-semibold text-sm text-gray-900">Great daily deal</h3>
                                <p className="text-gray-500 text-sm">When you sign up</p>
                            </div>
                        </div>


                        <div className="flex items-center justify-center gap-3  bg-[#f7f9fc] rounded-md lg:px-5 lg:pr-0 pr-20 py-2 shadow-sm hover:shadow-md">
                            <img src={cartImg4} alt="Best prices" className="w-15 h-15 transition-transform hover:-translate-y-2 duration-300" />
                            <div>
                                <h3 className="font-semibold text-sm text-gray-900">Wide assortment</h3>
                                <p className="text-gray-500 text-sm">Mega Discounts</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 bg-[#f7f9fc] rounded-md px-5 py-2 shadow-sm hover:shadow-md ">
                            <img src={cartImg5} alt="Best prices" className="w-15 h-15 transition-transform hover:-translate-y-2 duration-300" />
                            <div>
                                <h3 className="font-semibold text-sm text-gray-900">Easy returns</h3>
                                <p className="text-gray-500 text-sm">Within 30 days</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallCart;