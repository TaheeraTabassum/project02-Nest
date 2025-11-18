import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import map from '../../assets/map.png'
import contact from '../../assets/contact-2.png'
import Banner2 from '../Shared/Banner2';
import SmallCart from '../SmallCart/SmallCart';
import bgImage1 from '../../assets/banner-10.png';
import image1 from '../../assets/banner-13.png'

const Contact = () => {
    return (
        <div>
            {/* first */}
            <div className="space-y-16 mx-auto container lg:px-3 px-4">

                {/* How can we help section */}
                <div className="flex flex-col lg:flex-row items-start gap-8 px-6 md:px-10 my-5">
                    <div className="lg:w-1/3">
                        <p className="text-[#3BB77E] font-semibold uppercase tracking-wide">
                            How can we help you?
                        </p>
                        <h2 className="text-3xl md:text-4xl my-2 text-[#253D4E] font-bold mt-4">
                            Let us know how we can help you
                        </h2>
                        <p className="mt-4 text-[#7E7E7E] lg:text-[13px] text-sm leading-relaxed">
                            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor
                            imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
                        </p>
                        <p className="mt-4 text-[#7E7E7E] lg:text-[13px] text-sm leading-relaxed">
                            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor
                            imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.
                        </p>
                    </div>

                    <div className="lg:w-1/3 mt-0 lg:mt-20">
                        <h2 className="text-lg font-bold text-[#253D4E] mt-4">01. Visit Feedback</h2>
                        <p className="mt-2 text-[#7E7E7E] lg:text-[13px] text-sm">
                            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem.
                        </p>

                        <h2 className="text-lg font-bold text-[#3BB77E] mt-6">03. Billing Inquiries</h2>
                        <p className="mt-2 text-[#7E7E7E] lg:text-[13px] text-sm">
                            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem.
                        </p>
                    </div>

                    <div className="lg:w-1/3 mt-0 lg:mt-20">
                        <h2 className="text-lg font-bold text-[#253D4E] mt-4">02. Employer Services</h2>
                        <p className="mt-2 text-[#7E7E7E] lg:text-[13px] text-sm">
                            Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem.
                        </p>

                        <h2 className="text-lg font-bold text-[#253D4E] mt-6">04. General Inquiries</h2>
                        <p className="mt-2 text-[#7E7E7E] lg:text-[13px] text-sm">
                            Proin ullamcorper pretium oeri. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem.
                        </p>
                    </div>
                </div>

                {/* Map section */}
                <div className="px-6 md:px-10 my-8">
                    <img className="rounded-md w-full  mx-auto h-[250px] object-cover" src={map} alt="Map" />
                </div>

                {/* Office/Studio/Shop section */}
                <div className="flex flex-col md:flex-row items-start justify-between gap-8 px-6 md:px-20 my-10">
                    {["Office", "Studio", "Shop"].map((title, i) => (
                        <div key={i} className="flex-1">
                            <h1 className="text-[#3BB77E] font-bold text-lg">{title}</h1>
                            <p className="mt-4 text-[#7E7E7E] text-sm leading-relaxed">
                                205 North Michigan Avenue, Suite 810 <br />
                                Chicago, 60601, USA <br />
                                Phone: (123) 456-7890 <br />
                                Email: contact@Evara.com
                            </p>
                            <button className="flex items-center gap-2 text-white px-3 py-2 mt-4 bg-[#3BB77E] hover:bg-amber-200 hover:-translate-y-1 transition-all duration-300 text-sm rounded-md">
                                <CiLocationOn /> View Map
                            </button>
                        </div>
                    ))}
                </div>

                {/* Contact form */}
                <div className="flex flex-col lg:flex-row items-start gap-10 px-3 md:px-20 my-10">
                    <div className="flex-1">
                        <p className="text-[#3BB77E] font-semibold uppercase tracking-wide">Contact form</p>
                        <h2 className="text-3xl md:text-4xl my-2 text-[#253D4E] font-bold mt-4">Drop Us a Line</h2>
                        <p className="mt-4 text-[#7E7E7E] text-sm my-3">
                            Your email address will not be published. Required fields are marked *
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 my-5">
                            <input type="text" placeholder="First Name" className="input input-sm w-full border-gray-300" />
                            <input type="text" placeholder="Your Email" className="input input-sm w-full border-gray-300" />
                            <input type="text" placeholder="Your Phone" className="input input-sm w-full border-gray-300" />
                            <input type="text" placeholder="Subject" className="input input-sm w-full border-gray-300" />
                        </div>

                        <textarea className="textarea textarea-bordered w-full h-32 border-gray-300" placeholder="Message"></textarea>
                        <button className="text-white my-4 bg-[#253D4E] px-6 py-3 rounded-md hover:bg-[#3BB77E] transition-all duration-300">
                            Send message
                        </button>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <img src={contact} alt="Contact" className="w-full max-w-sm rounded-md" />
                    </div>
                </div>
            </div>

            <Banner2 bgImage1={bgImage1} image={image1} w="w-100" mt="mt-17" ml="ml-20" title={`Stay home & get your daily needs from our shop`} highlight="Nest Mart" subtitle="Start You'r Daily Shopping with " ></Banner2>
            <SmallCart></SmallCart>
        </div>
    );
};

export default Contact;