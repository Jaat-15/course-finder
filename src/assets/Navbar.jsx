import React, { useState } from 'react';
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <nav className="bg-[#121212] text-white px-6 py-4 rounded-lg shadow-md m-1">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-xl font-semibold">
                        <span>Course Finder</span>{" "}
                        <span className="text-gray-400 text-sm hidden sm:inline">- Learning made Easy</span>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex gap-6 text-sm font-medium">
                        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
                        <Link to="/about" className="hover:text-blue-400 transition">About</Link>
                        <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
                    </div>
                </div>

                {/* Mobile Dropdown */}
                {isOpen && (
                    <div className="flex flex-col mt-4 gap-4 text-sm font-medium md:hidden">
                        <input
                            type="text"
                            placeholder="Search courses..."
                            className="w-full px-4 py-2 rounded-md bg-[#1f1f1f] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Link to="/" className="hover:text-blue-400 transition">Home</Link>
                        <Link to="/about" className="hover:text-blue-400 transition">About</Link>
                        <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar
