import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { LoadingScreen } from './LoadingScreen';
import logo from '../assets/logo2.png';

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}

      {!loading && (
        <>
          <nav
            className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full  bg-[#ffffff] border border-[#2e1042]-200 z-50 transition-opacity duration-300 ${
              scrolling ? 'opacity-80' : 'opacity-100'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                {/* Logo */}
                <div className="flex items-center">
                  <Link to="/" className="flex items-center">
                    <img
            src={logo} // Use local hero image
            alt="Mother and baby"
            className="w-[11rem] h-full object-cover opacity-90"
          />
                  </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6 font-serif">
                  <Link to="/services" className="text-[#2e1042]-800 hover:text-[#2e1042]-600">Services</Link>
                  <Link to="/community" className="text-[#2e1042]-800 hover:text-[#2e1042]-600">Community</Link>
                  <Link to="/education" className="text-[#2e1042]-800 hover:text-[#2e1042]-600">Education</Link>
                  <Link to="/register" className=" text-white px-4 py-2 rounded-sm bg-[#8fc4f5]
hover:bg-[#2e1042]">
                    Register
                  </Link>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden flex items-center">
                  <button
                    className="text-[#2e1042]-800"
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Open menu"
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </nav>

          {/* Sidebar overlay */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Sidebar menu */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-[#fff] border-l border-[#2e1042]-200 z-50 transform transition-transform duration-300
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
          >
            <div className="flex justify-between items-center p-4 border-b border-[#2e1042]-200">
              {/* <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            
                <span className="ml-2 text-2xl font-normal text-[#2e1042]-800">Mother</span>
              </Link> */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-[#2e1042]-800"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />

              </button>
                                <img
            src={logo} // Use local hero image
            alt="Mother and baby"
            className="w-[11rem] h-full object-cover opacity-90"
          />
            </div>
            <nav className="flex flex-col mt-6 px-6 space-y-4 font-serif">
              <Link to="/services" className="text-[#2e1042]-800 hover:text-[#2e1042]-600" onClick={() => setIsMenuOpen(false)}>Services</Link>
              <Link to="/community" className="text-[#2e1042]-800 hover:text-[#2e1042]-600" onClick={() => setIsMenuOpen(false)}>Community</Link>
              <Link to="/education" className="text-[#2e1042]-800 hover:text-[#2e1042]-600" onClick={() => setIsMenuOpen(false)}>Education</Link>
              <Link
                to="/register"
                className="bg-[#8fc4f5] text-[#2e1042] rounded-sm px-4 py-2 roundedhover:bg-[#2e1042]-700 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  );
};
