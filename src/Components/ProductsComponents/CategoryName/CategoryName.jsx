import React from 'react';
import { NavLink } from 'react-router';

const CategoryName = ({ category,select, handleCategory }) => {
    return (
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* All Category */}
            <NavLink
                to="#"
                className="[&.active]:text-[#3BB77E]"
            >
                <p
                    onClick={() => handleCategory(null)}
                      className={`text-[14px] sm:text-[15px] ${!select ? 'hover:text-[#3BB77E] font-bold  hover:-translate-y-1  transition-transform duration-500' : 'text-gray-800'}  cursor-pointer  `}
                >
                    All
                </p>
            </NavLink>

            {/* Other Categories */}
            {category.map((c) => (
                <p
                    key={c.id}
                    onClick={() => handleCategory(c.id)}
                    className={`text-[14px] sm:text-[15px] ${c.id === select ? 'text-[#3BB77E] font-bold  hover:-translate-y-1  transition-transform duration-500' : ''}  cursor-pointer `}
                >
                    {c.name}
                </p>
            ))}
        </div>

    );
};

export default CategoryName;