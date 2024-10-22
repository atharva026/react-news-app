import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav style={{ backgroundColor: '#181C14' }} className="p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Website name */}
                <div className="text-white font-bold text-3xl hover:cursor-pointer flex items-center space-x-2">
                    <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                    <span>NewsNest</span>
                </div>


                {/* Hamburger menu for small screens */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Navigation links for larger screens */}
                <div className="hidden lg:flex space-x-4">
                    <NavLink to="/" className={({ isActive }) => `${isActive ? 'underline' : ''}  text-white text-lg px-4 py-2`} >
                        Home
                    </NavLink>
                    <NavLink to="/health" className={({ isActive }) => `${isActive ? 'underline' : ''} text-white text-lg px-4 py-2`}>
                        Health
                    </NavLink>
                    <NavLink to="/sports" className={({ isActive }) => `${isActive ? 'underline' : ''} text-white text-lg px-4 py-2`}>
                        Sports
                    </NavLink>
                    <NavLink to="/technology" className={({ isActive }) => `${isActive ? 'underline' : ''} text-white text-lg px-4 py-2`}>
                        Technology
                    </NavLink>
                </div>
            </div>

            {/* Menu for mobile view (appears below the web name) */}
            <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
            <hr className="border-0.5 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
                <div className="flex flex-col items-center">
                    <NavLink to="/" className={({ isActive }) => `${isActive ? 'underline' : ''} text-white px-4 py-2`}>
                        Home
                    </NavLink>
                    <NavLink to="/health" className={({ isActive }) => `${isActive ? 'underline' : ''} text-white px-4 py-2`}>
                        Health
                    </NavLink>
                    <NavLink to="/sports" className={({ isActive }) => `${isActive ? 'underline' : ''} text-white px-4 py-2`}>
                        Sports
                    </NavLink>
                    <NavLink to="/technology" className={({ isActive }) => `${isActive ? 'underline' : ''} text-white px-4 py-2`}>
                        Technology
                    </NavLink>
                </div>
            </div>

            {/* Form for Specific seaarch but not implemented */}
            {/* <div className="relative mt-4 md:mt-0 w-full md:w-auto">
                    <form action="" method="post" className="flex">
                        <input type="text" name="title" placeholder="Search..."
                            className="px-4 py-2 rounded bg-gray-200 text-black focus:outline-none w-full md:w-auto" required />
                        <button type="submit"><i className="fa-solid fa-search absolute right-3 top-3 text-gray-400"></i></button>
                    </form>
                </div> 
            */}
        </nav>
    );
}

export default Navbar;
