import { Link } from "react-router";


const Header = () => {
   
    return (
        <div>
            {/* top header */}
            <div className='bg-white text-gray-600 text-sm border-b border-gray-200'>
                <div className="container mx-auto lg:px-3 px-4 py-2 flex flex-col md:flex-row justify-between items-center">

                    {/* Left links */}
                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 md:gap-3 text-gray-400 text-center md:text-left">
                        <Link to="/about" className="hover:text-green-600 transition">About Us</Link>
                        <span>|</span>
                        <Link to="/account" className="hover:text-green-600 transition">My Account</Link>
                        <span>|</span>
                        <Link to="/wishlist" className="hover:text-green-600 transition">Wishlist</Link>
                        <span>|</span>
                        <Link to="/order-tracking" className="hover:text-green-600 transition">Order Tracking</Link>
                        <span className="hidden md:inline text-gray-400">
                            100% Secure delivery without contacting the courier
                        </span>
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-2 md:gap-4 mt-2 md:mt-0 text-gray-400 text-center md:text-left">
                        <p className="text-xs sm:text-sm">
                            Need help? Call Us:{" "}
                            <span className="text-green-600 font-semibold">+1800 900</span>
                        </p>
                        <div className="flex gap-1 sm:gap-2">
                            <select className="text-gray-600 bg-transparent outline-none border border-gray-200 rounded px-1 sm:px-2 py-0.5 text-xs sm:text-sm">
                                <option>English</option>
                                <option>Bangla</option>
                            </select>
                            <select className="text-gray-600 bg-transparent outline-none border border-gray-200 rounded px-1 sm:px-2 py-0.5 text-xs sm:text-sm">
                                <option>USD</option>
                                <option>BDT</option>
                            </select>
                        </div>
                    </div>

                </div>
            </div>

            {/* middle header */}
           
           
        </div>
    );
};

export default Header;