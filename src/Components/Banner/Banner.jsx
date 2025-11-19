import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

import SendImg from '../../assets/icon-email-2.svg';

const Banner = () => {
  return (
    <div className="mx-auto container px-1 my-6">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        className="rounded-lg"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="
https://i.ibb.co.com/BVkpHsWh/360-F-138994417-z9zjy-I1oy-S2o-Ggi-JOl-NOkt25-Wwj4-Uhc-K.jpg" 
              alt=""
              className="w-full object-cover rounded-lg hidden sm:block"
            />

            {/* ✅ Mobile version */}
            <div className="sm:hidden bg-cover rounded-xl p-5 flex flex-col items-center text-center"  style={{ backgroundImage: `url("https://i.ibb.co.com/23KHz3tH/360-F-335745675-Max-Yx-Ssadrvi-Zd-Th-ITu-HB2o-Coh-YOiw-Eu.jpg")` }}>
              <h1 className="text-[#253D4E] text-lg font-semibold">
                Don’t Miss Amazing <br /> Grocery Deals
              </h1>
              <p className="text-gray-600 text-xs mt-2">
                Sign up for daily newsletter
              </p>

              <div className="flex items-center bg-white rounded-full mt-4 pl-3 w-full max-w-[260px] shadow">
                <img src={SendImg} alt="" className="w-4" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full text-xs py-2 px-2 outline-none"
                />
                <button className="bg-[#3BB77E] text-white text-xs px-4 py-2 rounded-full">
                  Subscribe
                </button>
              </div>
            </div>

            {/* ✅ Desktop / Tablet version (unchanged) */}
            <div className="absolute top-10 sm:top-20 left-6 sm:left-12 hidden sm:block">
              <h1 className="text-2xl sm:text-4xl lg:mt-10 md:text-[50px] text-[#253D4E] font-semibold leading-tight">
                Don’t Miss Amazing <br /> Grocery Deals
              </h1>
              <p className="text-gray-500 text-sm sm:text-lg mt-3">
                Sign up for daily newsletter
              </p>
              <div className="flex flex-col sm:flex-row bg-white pl-4 mt-4 justify-between rounded-full sm:w-[400px] w-[90%] max-w-[400px]">
                <div className="flex items-center gap-4 py-2 sm:py-0">
                  <img src={SendImg} alt="" className="w-5 sm:w-6 rounded-xl" />
                  <input
                    className="outline-none text-sm sm:text-base w-full"
                    placeholder="your email address"
                    type="email"
                  />
                </div>
                <button className="bg-[#3BB77E] rounded-full mt-2 sm:mt-0 sm:ml-2 px-4 py-2 text-sm sm:text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://i.ibb.co.com/23KHz3tH/360-F-335745675-Max-Yx-Ssadrvi-Zd-Th-ITu-HB2o-Coh-YOiw-Eu.jpg"
              alt=""
              className="w-full object-cover rounded-md hidden sm:block"
            />

            {/* ✅ Mobile version */}
            <div className="sm:hidden  bg-cover rounded-xl p-5 flex flex-col items-center text-center"  style={{backgroundImage : `url("
https://i.ibb.co.com/BVkpHsWh/360-F-138994417-z9zjy-I1oy-S2o-Ggi-JOl-NOkt25-Wwj4-Uhc-K.jpg")`}}>
              <h1 className="text-[#253D4E] text-lg font-semibold">
                Fresh Vegetables <br /> Big discount
              </h1>
              <p className="text-gray-600 text-xs mt-2">
                Save up to 50% off on your first order
              </p>

              <div className="flex items-center bg-white rounded-full mt-4 pl-3 w-full max-w-[260px] shadow">
                <img src={SendImg} alt="" className="w-4" />
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full text-xs py-2 px-2 outline-none"
                />
                <button className="bg-[#3BB77E] text-white text-xs px-4 py-2 rounded-full">
                  Subscribe
                </button>
              </div>
            </div>

            {/* ✅ Desktop / Tablet version (unchanged) */}
            <div className="absolute top-10 sm:top-20 left-6 sm:left-12 hidden sm:block">
              <h1 className="text-2xl sm:text-4xl lg:mt-10 md:text-[50px] text-[#253D4E] font-semibold leading-tight">
                Fresh Vegetables <br /> Big Discount
              </h1>
              <p className="text-gray-500 text-sm sm:text-lg mt-3">
                Save up to 50% off on your first order
              </p>
              <div className="flex flex-col sm:flex-row bg-white pl-4 mt-4 justify-between rounded-full sm:w-[400px] w-[90%] max-w-[400px]">
                <div className="flex items-center gap-4 py-2 sm:py-0">
                  <img src={SendImg} alt="" className="w-5 sm:w-6 rounded-xl" />
                  <input
                    className="outline-none text-sm sm:text-base w-full"
                    placeholder="your email address"
                    type="email"
                  />
                </div>
                <button className="bg-[#3BB77E] rounded-full mt-2 sm:mt-0 sm:ml-2 px-4 py-2 text-sm sm:text-white">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;