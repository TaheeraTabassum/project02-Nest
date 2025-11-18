
import { FaAngleDown, FaCartShopping, FaStar } from 'react-icons/fa6';
import useData from '../hook/useData';
import { Link } from 'react-router';




const ShopCard = ({select}) => {
    const {products} = useData();
      const filter = select?products.filter(product=>product.id==select):products
    
    return (
        <div className='grid lg:grid-cols-5 grid-cols-1  px-1 lg:px-3  mx-auto container gap-3 '>
           
            {
                filter.slice(0,10).map(product => (
                   <Link to={`/products/${product.id}`}> <div>
                        <div className="card bg-base-100 h-[400px] relative transition cursor-pointer  mb-4 hover:shadow-md border border-gray-200">

                            <figure>

                                <span style={{ backgroundColor: `${product.labelColor}` }}
                                    className=' absolute top-0  left-0 text-white text-sm font-medium px-3 py-1 rounded-br-lg rounded-tl-lg ' >
                                    {product.label}
                                </span>
                                <img className='lg:w-35 w-45 '
                                    src={product.image}
                                    alt="Shoes" />

                            </figure>
                            <div className="card-body">
                                <p className='text-[10px] text-[#B6B6B6] '>{product.category}</p>
                                <h2 className="card-title text-[13px] text-[#253D4E]">
                                    {product.name}
                                </h2>
                                <div className='text-[#FDC040] flex items-center'>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar className='text-[#B6B6B6]' />
                                    <p className='text-[#B6B6B6] ml-2'>({product.rating})</p>
                                </div>
                                <p className='text-[#B6B6B6]'>By : <span className='text-[#3BB77E] '>{product.brand}</span> </p>
                                <div className='flex items-center justify-between mt-3'>
                                    <p className='text-[#3BB77E] font-bold text-[14px]'>{product.price} <span className='line-through text-gray-400 text-[12px]'>{product.oldPrice}</span></p>
                                    <button className='text-[#3BB77E] btn w-20 rounded-md   hover:text-white bg-[#e3fff2] hover:bg-[#3BB77E] hover:-translate-y-1 duration-500'> <span className=''><FaCartShopping /></span>Add</button>
                                </div>

                            </div>
                        </div>
                    </div>
                   </Link>
                ))
            }
        </div>
    );
};

export default ShopCard;