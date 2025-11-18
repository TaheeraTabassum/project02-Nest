import React from 'react';

const SmallCategory = ({fc}) => {
    return (
        <div style={{  backgroundColor:`${fc.color}`}} className='rounded-lg hover:scale-103 hover:border hover:border-[#3BB77E] hover:shadow-sm hover:text-[#3BB77E] duration-300   p-2 pb-2'>
             <img className='w-30 ml-5 lg:ml-0' src={fc.image} alt="" />
             <p className='text-center font-semibold text-[15px] text-[#253D4E] '>{fc.name}</p>
             <p className='text-center text-gray-500 text-sm'>{fc.item} items</p>
        </div>
    );
};

export default SmallCategory;