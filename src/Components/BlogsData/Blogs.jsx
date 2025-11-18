import React, { useEffect, useState } from 'react';



const Blogs = () => {
        const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('/BlogsData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 '>
            {
                blogs.map(blog => (
                    <div className="card bg-base-100  shadow-sm">
                        
                            <img 
                                src={blog.image}
                                alt="Shoes"
                                className="rounded-xl w-90" />
                       
                        <div className=" items-center text-center">
                            <p className='text-gray-500 text-sm mt-2'>{blog.category}</p>
                            <h2 className="text-1xl font-bold text-[#253D4E]  my-2 text-center">{blog.title}</h2>
                          <div className='flex   mb-4  mx-auto  items-center ml-13 lg:ml-9 gap-3 text-gray-500 text-[12px]'>
                            <p>{blog.date}</p>
                            <p className='w-1.5 h-1.5 rounded-full bg-gray-300'></p>
                            <p>{blog.views}</p>
                             <p className='w-1.5 h-1.5 rounded-full bg-gray-300'></p>
                            <p>{blog.readTime}</p>
                          </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Blogs;