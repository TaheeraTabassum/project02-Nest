import React from 'react';
import image from '../../assets/about-1 (1).png'
import image1 from '../../assets/about-2 (1).png'
import image2 from '../../assets/about-2.png'
import image3 from '../../assets/about-3.png'
import image4 from '../../assets/about-4 (1).png'
import image5 from '../../assets/about-4.png'
import category1 from '../../assets/category-1.svg'
import category2 from '../../assets/category-2.svg'
import category3 from '../../assets/category-3.svg'
import category4 from '../../assets/category-4.svg'
import category5 from '../../assets/category-5.svg'
import category6 from '../../assets/category-1.svg'
import line from '../../assets/wave.png'
import girl from '../../assets/about-5.png'
import Banner2 from '../Shared/Banner2';
import bgImage1 from '../../assets/banner-10.png';
import image9 from '../../assets/banner-13.png';
import men1 from '../../assets/about-6.png'
import men2 from '../../assets/about-8 (1).png'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';
import SmallCart from '../SmallCart/SmallCart';

const About = () => {
    return (
        <div className="overflow-hidden mx-auto container lg:px-3 px-4">
            {/* first part */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:ml-20 my-8 px-6 lg:px-0">
                <div className="flex justify-center">
                    <img className="w-full max-w-md rounded-lg" src={image} alt="" />
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-[#253D4E] text-3xl lg:text-4xl font-bold mb-6">
                        Welcome to the Nest
                    </h1>
                    <p className="text-[14px] text-gray-400 max-w-xl mx-auto lg:mx-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div className="carousel carousel-end rounded-box w-120 h-[220px] mt-5"> <div className="carousel-item mr-3 "> <img className='rounded-md' src={image1} alt="Drink" /> </div> <div className="carousel-item mr-3 "> <img className='rounded-md' src={image2} alt="Drink" /> </div> <div className="carousel-item mr-3 "> <img className='rounded-md' src={image3} alt="Drink" /> </div> <div className="carousel-item mr-3 "> <img className='rounded-md' src={image4} alt="Drink" /> </div> <div className="carousel-item mr-3 "> <img className='rounded-md' src={image5} alt="Drink" /> </div> </div>
                </div>
            </div>

            {/* second section */}
            <div>
                <div className="text-center my-4">
                    <h1 className="text-2xl sm:text-3xl font-bold mt-4">What We Provide?</h1>
                    <img src={line} className="mx-auto my-2 w-40 sm:w-52" alt="" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-5 px-6 lg:px-20">
                    {[category1, category2, category3, category4, category5, category6].map((cat, i) => (
                        <div
                            key={i}
                            className="card bg-base-100 border border-gray-200 pt-6 hover:shadow-md transition-all"
                        >
                            <img src={cat} alt="icon" className="rounded-xl w-20 mx-auto" />
                            <div className="card-body items-center text-center">
                                <h2 className="card-title my-2 mx-auto">{
                                    ['Best Prices & Offers', 'Wide Assortment', 'Free Delivery', 'Easy Returns', '100% Satisfaction', 'Great Daily Deal'][i]
                                }</h2>
                                <p className="text-[#7E7E7E] text-sm">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
                                </p>
                                <p className="text-[#3BB77E] hover:text-orange-300 hover:-translate-y-1 duration-500 cursor-pointer">
                                    Read More
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* third section */}
            <div className="flex flex-col lg:flex-row items-center gap-7 px-6 lg:px-20 my-8">
                <img className="w-full max-w-md" src={girl} alt="" />
                <div className="w-full lg:w-[400px] mt-6 lg:mt-0 text-center lg:text-left">
                    <p className="text-[#B6B6B6] font-medium my-4">Our performance</p>
                    <h1 className="text-2xl sm:text-3xl text-[#253D4E] font-bold">
                        Your Partner for e-commerce grocery solution
                    </h1>
                    <p className="text-[#7E7E7E] text-sm my-4">
                        Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                    </p>
                    <p className="text-[#7E7E7E] text-sm">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.
                    </p>
                </div>
            </div>

            {/* four section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 px-6 lg:px-20 text-center lg:text-left">
                {[
                    { title: 'Who we are', text: 'Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.' },
                    { title: 'Our history', text: 'Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.' },
                    { title: 'Our mission', text: 'Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.' },
                ].map((item, i) => (
                    <div key={i}>
                        <h1 className="text-xl sm:text-2xl text-[#253D4E] font-bold my-3">{item.title}</h1>
                        <p className="text-[#7E7E7E] text-[12px]">{item.text}</p>
                    </div>
                ))}
            </div>

            {/* five stats */}
            <div className="mx-auto container lg:px-3 px-4">
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#667C70] to-[#667C70] p-10 sm:p-12 text-white">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-30"
                        style={{
                            backgroundImage: `url('https://nest-frontend-v6.vercel.app/assets/imgs/page/about-9.png')`,
                        }}
                    />
                    <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
                        {['Glorious years', 'Happy clients', 'Projects complete', 'Team advisor', 'Products Sale'].map(
                            (label, i) => (
                                <div key={i}>
                                    <h2 className="text-3xl sm:text-5xl font-bold">
                                        0<span className="text-xl sm:text-3xl">+</span>
                                    </h2>
                                    <p className="mt-2 text-sm sm:text-lg">{label}</p>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>

            {/* six: team section */}
            <div className="mb-20 px-6 lg:px-20">
                <div className="text-center my-4">
                    <h1 className="text-2xl sm:text-3xl font-bold mt-8">Our Team</h1>
                    <img src={line} className="mx-auto my-2 w-40 sm:w-52" alt="" />
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-10 bg-white">
                    <div className="lg:w-[400px] text-center lg:text-left">
                        <p className="text-green-600 font-semibold uppercase tracking-wide">Our Team</p>
                        <h2 className="text-2xl sm:text-3xl my-5 text-[#253D4E] font-bold">
                            Meet Our Expert Team
                        </h2>
                        <p className="mt-2 text-[#7E7E7E] text-[11px]">
                            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet.
                            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
                            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
                        </p>
                        <button className="btn text-white w-40 mt-4 hover:bg-amber-200 hover:-translate-y-1 text-[12px] bg-[#3BB77E]">
                            View All Members
                        </button>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        {[{ img: men1, name: 'H. Merinda', role: 'CEO & Co-Founder' },
                        { img: men2, name: 'Dilan Specter', role: 'Head Engineer' }].map((member, i) => (
                            <div key={i} className="relative">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="rounded-md mt-8 w-full sm:w-[270px] h-80 object-cover"
                                />
                                <div className="p-6 absolute top-70 left-1/2 -translate-x-1/2 w-[220px] sm:w-[220px] rounded-md bg-white text-center shadow-md">
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{member.name}</h3>
                                    <p className="text-gray-500 text-sm mt-1">{member.role}</p>
                                    <div className="text-sm mt-2 text-[#3BB77E] flex justify-center gap-3">
                                        <FaFacebookF />
                                        <FaTwitter />
                                        <FaInstagram />
                                        <FaYoutube />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



            <Banner2 bgImage1={bgImage1} w="w-100" mt="mt-17" ml="ml-20" image={image9} title={`Stay home & get your daily needs from our shop`} highlight="Nest Mart" subtitle="Start You'r Daily Shopping with " ></Banner2>
            <SmallCart></SmallCart>
        </div>
    );
};

export default About;