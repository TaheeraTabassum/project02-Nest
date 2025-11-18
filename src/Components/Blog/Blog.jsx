import React from 'react';
import SmallBanner from '../Shared/SmallBanner';
import Blogs from '../BlogsData/Blogs';
import { FaAngleDown } from 'react-icons/fa6';
import image from '../../assets/category-1.svg'
import ShopCategory from '../ShopCategory/ShopCategory';
import FillByPrice from '../FillByPrice/FillByPrice';
import NewProducts from '../NewProducts/NewProducts';
import Banner2 from '../Shared/Banner2';
import bgImage1 from '../../assets/banner-10.png';
import image1 from '../../assets/banner-13.png'
import SmallCart from '../SmallCart/SmallCart';

const Blog = () => {
    return (
        <div>
            <SmallBanner title="Blog & News" P1="Blog " P2="News" btn1="Shopping" btn2="Recips" btn3="KItchen" btn4="News" btn5="Food"></SmallBanner>
            <div className='lg:flex flex-row mx-auto container lg:px-3 px-4 items-center justify-between  my-2'>
                <div className='flex items-center gap-5'>
                    <img className='lg:w-10 w-9' src={image} alt="" srcset="" />
                    <p className='font-bold lg:text-2xl text-[24px] '>Recips Articles</p>
                </div>
                <div className='flex items-center gap-2 text-[12px] text-gray-400'>
                    <p className='cursor-pointer flex items-center gap-3 hover:shadow-md p-2 my-3 rounded-md border border-gray-300'>
                        Show : 50 <span><FaAngleDown /></span>
                    </p>
                    <p className='cursor-pointer flex items-center gap-3 hover:shadow-md p-2 my-3 rounded-md border border-gray-300'>
                        Sort Bt : Featured <span><FaAngleDown /></span>
                    </p>
                </div>
            </div>
            <div className='grid lg:grid-cols-12 grid-cols-1 mx-auto container lg:px-3 px-4 gap-3 '>
                <div className='col-span-10'>
                <Blogs></Blogs>
                  </div>
               <div className='col-span-2'>
                 <ShopCategory></ShopCategory>
                 <FillByPrice></FillByPrice>
                 <NewProducts></NewProducts>
               </div>
            </div>
            <Banner2 bgImage1={bgImage1} image={image1} w="w-100" mt="mt-17" ml="ml-20" title={`Stay home & get your daily needs from our shop`} highlight="Nest Mart" subtitle="Start You'r Daily Shopping with " ></Banner2>
            <SmallCart></SmallCart>
        </div>
    );
};

export default Blog;