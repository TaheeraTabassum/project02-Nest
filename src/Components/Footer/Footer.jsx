import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import apple from '../../assets/app-store.jpg'
import google from '../../assets/google-play.jpg'
import visa from '../../assets/payment-method.png'
import logo from '../../assets/logo.svg'
import call from '../../assets/phone-call.svg'

const Footer = () => {
  return (
    <footer className="bg-gray-50  mt-10">
      <div className="  py-12 grid  px-4 lg:px-3  mx-auto container grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 text-gray-700">
        {/* Brand Info */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Nest" className="" />
          
          </div>
          <p className="text-sm mb-4">
            Awesome grocery store website template delivering fresh products
            right to your home.
          </p>

          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-600 text-2xl" />
              <span> <span className="font-semibold ">Addres:</span> 5171 W Campbell Ave, Kent, Utah 53127</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-600 text-2xl" />
              <span className="text-sm"> <span className="font-semibold ">Call Us :</span>+91 540-025-124553</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-green-600 text-2xl" />
              <span className="text-sm"> <span className="font-semibold ">Email:</span>sale@Nest.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaClock className="text-green-600 text-2xl" />
              <span> <span className="font-semibold ">Hours:</span>10:00 – 18:00, Mon – Sat</span>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-900">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-600">About Us</a></li>
            <li><a href="#" className="hover:text-green-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-green-600">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-green-600">Contact Us</a></li>
            <li><a href="#" className="hover:text-green-600">Careers</a></li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-900">Account</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-600">My Account</a></li>
            <li><a href="#" className="hover:text-green-600">My Wishlist</a></li>
            <li><a href="#" className="hover:text-green-600">Track Order</a></li>
            <li><a href="#" className="hover:text-green-600">Shipping Details</a></li>
            <li><a href="#" className="hover:text-green-600">Compare Products</a></li>
          </ul>
        </div>

        {/* Popular */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-900">Popular</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-600">Flavoured Milk</a></li>
            <li><a href="#" className="hover:text-green-600">Butter & Margarine</a></li>
            <li><a href="#" className="hover:text-green-600">Eggs & Cheese</a></li>
            <li><a href="#" className="hover:text-green-600">Marmalades</a></li>
            <li><a href="#" className="hover:text-green-600">Sour Cream</a></li>
          </ul>
        </div>

        {/* App & Payment */}
        <div>
          <h3 className="font-semibold text-lg mb-3 text-gray-900">Install App</h3>
          <p className="text-sm mb-3">From App Store or Google Play</p>
          <div className="flex gap-3 mb-4">
            <img src={apple} alt="App Store" className="w-24 cursor-pointer" />
            <img src={google} alt="Google Play" className="w-24 cursor-pointer" />
          </div>

          <p className="text-sm mb-3">Secured Payment Gateways</p>
          <div className="flex gap-3">
            <img src={visa} alt="Visa" className="h-5" />
          
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 py-4 bg-white">
        <div className=" px-4 lg:px-3  mx-auto container  flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600">
          <p>© 2025 <span className="font-semibold text-green-600">Nest Mart</span>. All rights reserved.</p>

                             <div className="flex items-center my-4 lg:my-0 gap-4">
                                 <div className='flex items-center gap-2'>
                                 <img className="w-8" src={call} alt="" srcset="" />
                                  <div>
                                  <h1 className='text-1xl font-bold text-[#3BB77E]'>1900-888</h1>
                                  <p className='text-[10px] text-gray-500'>Working 8:00 - 22:00</p>
                              </div>
                              </div>
                               <div className='flex items-center gap-2'>
                                 <img className="w-8" src={call} alt="" srcset="" />
                                  <div>
                                  <h1 className='text-1xl font-bold text-[#3BB77E]'>1900-888</h1>
                                  <p className='text-[10px] text-gray-500'>Working 8:00 - 22:00</p>
                              </div>
                              </div>
                             </div>
          <div className="flex gap-2 mt-3 sm:mt-0 items-center">
            <span className="text-gray-900 font-semibold">Follow Us</span>
            {[FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 text-white rounded-full bg-green-600 hover:text-white transition"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
