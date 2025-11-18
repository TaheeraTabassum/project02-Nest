import React from 'react';
import { FaCartShopping, FaStar } from 'react-icons/fa6';
import { Link } from 'react-router';

const Product = ({ product }) => {

    return (

        <Link to={`/products/${product.id}`}>
            <div className="card bg-white relative transition-transform cursor-pointer hover:shadow-lg border pt-7 lg:pt-0 border-gray-200 rounded-2xl overflow-hidden">

            
                <figure className="relative p-3">
                    {product.label && (
                        <span
                            style={{ backgroundColor: product.labelColor }}
                            className="absolute top-0 left-4 lg:left-0 text-white text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 rounded-br-lg rounded-tl-lg z-1"
                        >
                            {product.label}
                        </span>
                    )}
                    <img
                        className="w-full h-44 sm:h-28 object-cover"
                        src={product.image}
                        alt={product.name}
                    />
                </figure>

               
                <div className="card-body px-3 sm:px-4 py-2 sm:py-3">
                    {/* Category */}
                    <p className="text-[10px] sm:text-xs text-gray-400">{product.category}</p>

                    {/* Product Name */}
                    <h2 className="card-title text-[13px] sm:text-sm text-gray-800 font-semibold mt-1 line-clamp-2">
                        {product.name}
                    </h2>

                    {/* Rating */}
                    <div className="flex items-center text-yellow-400 mt-1">
                        {Array.from({ length: 5 }, (_, i) => (
                            <FaStar key={i} className={i < product.rating ? '' : 'text-gray-300'} />
                        ))}
                        <p className="text-gray-400 text-xs sm:text-sm ml-2">({product.rating})</p>
                    </div>

                    {/* Brand */}
                    <p className="text-gray-400 text-xs sm:text-sm mt-1">
                        By: <span className="text-green-600">{product.brand}</span>
                    </p>

                    {/* Price & Add Button */}
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-green-600 font-bold text-sm sm:text-base">
                            {product.price} <span className="line-through text-gray-400 text-xs sm:text-sm">{product.oldPrice}</span>
                        </p>
                        <button className="flex items-center justify-center gap-1 text-green-600 bg-green-100 hover:bg-green-600 hover:text-white transition-all duration-300 py-1 px-3 sm:px-4 rounded-md text-xs sm:text-sm">
                            <FaCartShopping /> Add
                        </button>
                    </div>
                </div>
            </div>
        </Link>


    );
};

export default Product;