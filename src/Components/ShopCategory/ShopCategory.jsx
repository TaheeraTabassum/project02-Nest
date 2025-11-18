import React from 'react';
import useData from '../hook/useData';


const ShopCategory = ({handleCategory}) => {
    const {category}=useData();
    return (
        <div className='border border-gray-300 shadow-sm  mt-10 lg:mt-0 p-3   rounded-xl '>
            <div className='mb-4 '>
                <h1 className='font-bold lg:text-1xl text-2xl text-[#253D4E] ml-2'>Category</h1>
                <div className='border border-gray-300 h-0.1 my-2'>
                    <div className='border border-[#b9f4d8] w-20'></div>
                </div>
            </div>
            {
                category.slice(0,5).map(c=>(
                    <div onClick={()=>handleCategory(c.id)} className='cursor-pointer flex items-center justify-between gap-3 hover:shadow-md p-2 my-3 rounded-md border border-gray-300'>
                        <img className='lg:w-6 w-9' src={c.image} alt="" srcset="" />
                        <p className='lg:text-[11px] text-[17px] text-gray-500'>{c.name}</p>
                        <p><span className='bg-[#b3dbc8] px-2 py-1 rounded-full text-gray-500 text-[10px] bottom-3 left-3'>0</span></p>
                    </div>
                ))
            }
        </div>
    );
};

export default ShopCategory;