


import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.png';
import { NavLink, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const currentPath = location.pathname;
    setActiveLink(currentPath);
  }, [location.pathname]);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="bg-white-800 h-[4%] shadow-2xl w-full">
      <div className="container mx-auto flex justify-between items-center px-4 md:p-1">
        <div className="w-3/4 md:w-1/2 h-20">
          <img src={Logo} alt="Flamencotech logo" className="h-full object-contain" />
        </div>

        <button className="focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        <div className={`absolute top-20 right-2 lg:right-10 bg-white p-4 md:p-1 mt-1 shadow-2xl ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex  flex-col items-center md:space-y-1">
             <li className="border-b border-gray-300 pb-1 mb-1">
              <NavLink
                to="/device-health"
                className={`text-black font-semibold hover:text-gray-600 ${activeLink === '/device-health' ? 'underline' : ''
                  }  sm:text-sm`}
              >
                Device Health
              </NavLink>
            </li>
            <li className="border-b border-gray-300 pb-1 mb-1">
              <NavLink
                to="/network-traffic"
                className={`text-black font-semibold hover:text-gray-600 ${activeLink === '/network-traffic' ? 'underline' : ''
                  } sm:text-sm`}
              >
                Network Traffic
              </NavLink>
            </li>
            <li className="border-b border-gray-300 pb-1 mb-1">
              <NavLink
                to="/device-traffic"
                className={`text-black font-semibold hover:text-gray-600 ${activeLink === '/device-traffic' ? 'underline' : ''
                  } sm:text-sm`}
              >
                Device Traffic
              </NavLink>
            </li>
            <li className="border-b border-gray-300 pb-1 mb-1">
              <NavLink
                to="/telemetry-data"
                className={`text-black font-semibold hover:text-gray-600 ${activeLink === '/telemetry-data' ? 'underline' : ''
                  } sm:text-sm`}
              >
                Telemetry Data
              </NavLink>
            </li>
            <li className="border-b border-gray-300 pb-1 mb-1">
              <NavLink
                to="/config"
                className={`text-black font-semibold hover:text-gray-600 ${activeLink === '/config' ? 'underline' : ''
                  } sm:text-sm`}
              >
                Configuration
              </NavLink>
            </li>
            <li className="border-b border-gray-300 pb-1 mb-1">
              <button className="text-black font-semibold" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

