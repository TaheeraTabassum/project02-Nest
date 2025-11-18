import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import SmallCategory from './SmallCategory';

const FeatureCategory = () => {

  const [featureCategory, setFeatureCategory] = useState([])
  useEffect(() => {
    fetch('/SmallCategory.json')
      .then(res => res.json())
      .then(data => setFeatureCategory(data))
  }, [])

  const [feCategoryName, setFeCategoryName] = useState([])
  useEffect(() => {
    fetch('/FeatureCategory.json')
      .then(res => res.json())
      .then(data => setFeCategoryName(data))
  }, [])


  return (
    <div >
      <div className="flex flex-col container mx-auto px-3 sm:flex-row items-start sm:items-center justify-between text-gray-800 flex-wrap gap-4">
        {/* Left Side - Title & Category Names */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-3 sm:gap-5">
          <h1 className="text-xl sm:text-2xl font-bold text-[#18181B]">
            Featured Categories
          </h1>

          <div className="flex flex-wrap items-center gap-3 sm:gap-5 mt-2 sm:mt-0">
            {feCategoryName.map((fcName, i) => (
              <p
                key={i}
                className="text-[14px] sm:text-[15px] font-medium text-gray-600 hover:text-[#3BB77E] cursor-pointer hover:-translate-y-1 transition-all duration-300"
              >
                {fcName.name}
              </p>
            ))}
          </div>
        </div>

        {/* Right Side - Arrows */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button className="hover:bg-[#3BB77E] hover:text-white bg-gray-200 p-2 sm:p-3 rounded-full text-gray-500 text-sm shadow-sm transition-all duration-300">
            <FaArrowLeft />
          </button>
          <button className="hover:bg-[#3BB77E] hover:text-white bg-gray-200 p-2 sm:p-3 rounded-full text-gray-500 text-sm shadow-sm transition-all duration-300">
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 gap-3 sm:gap-4 md:gap-5 my-6  px-4 lg:px-3  mx-auto container">
        {featureCategory.map((fc, i) => (
          <SmallCategory key={i} fc={fc} />
        ))}
      </div>

    </div>
  );
};

export default FeatureCategory;