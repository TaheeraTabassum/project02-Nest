import React from 'react';
import Button from '../Shared/Button';
import filterImg from '../../assets/fillter-widget-bg.png'

const FillByPrice = () => {
    return (
        <div className='border border-gray-300 rounded-xl   p-3 my-6 shadow-sm'>
            <div className='mb-7'>
                <h1 className='font-bold lg:text-1xl text-2xl text-[#253D4E] ml-2'>Fill By Price</h1>
                <div className='border border-gray-300 h-0.1 my-2'>
                    <div className='border border-[#b9f4d8] w-20'></div>
                </div>
            <div >
                <h1 className='font-bold text-1xl  text-[#253D4E] ml-2 my-2'>Color</h1>
                    
                        <label className="label text-[13px] mr-10 lg:mr-0 mb-4">
                           <input type="checkbox" defaultChecked className="checkbox" />
                            Red (56)
                        </label>
                        <label className="label mr-10 lg:mr-0 text-[13px] mb-4">
                            <input type="checkbox"  defaultChecked className="checkbox" />
                            Green (78)
                        </label>
                        <label className="label mr-10 lg:mr-0 text-[13px] mb-4">
                            <input type="checkbox"  defaultChecked className="checkbox" />
                            Blue (54)
                        </label>
                        <h1 className='font-bold text-1xl text-[#253D4E] ml-2 my-2'>Item Collection</h1>
                    
                        <label className="label mr-10 lg:mr-0 text-[13px] mb-4">
                           <input type="checkbox" defaultChecked className="checkbox" />
                           New (1506)
                        </label>
                        <label className="label mr-10 lg:mr-0 text-[13px] mb-4">
                            <input type="checkbox"  defaultChecked className="checkbox" />
                            Refurbished (27)
                        </label>
                        <label className="label mr-10 lg:mr-0 text-[13px] mb-4">
                            <input type="checkbox"  defaultChecked className="checkbox" />
                            Used (45)
                        </label>
                        <div className='flex justify-between items-center '>
                             <button className="btn text-white w-15 hover:bg-amber-200 hover:-translate-y-1 text-[12px]   bg-[#3BB77E] ">Fillter</button>
                            <img className='w-25' src={filterImg} alt="" srcset="" />
                        </div>
                   
                </div>

            </div>
        </div>
    );
};

export default FillByPrice;