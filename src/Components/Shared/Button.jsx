import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const Button = ({title}) => {
    return (
        <div>
            <button className="btn text-white w-30 text-[12px]  my-3 bg-[#3BB77E] ">{title} <span><FaArrowRight /></span></button>
        </div>
    );
};

export default Button;