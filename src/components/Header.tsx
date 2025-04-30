import React from 'react';
import '../assets/header.css';
function Header() {
    return(
        <header className="bg-gray-900 text-white p-4 shadow-m flex justify-between items-center">
            <div className="flex items-center">
            <h3>My Website</h3>
            <nav className="flex gap-6 ml-20">
            <a href="#home" className="hover:text-gray-300">Home</a>
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
            </nav>
            </div>
            <div className="user-info">
                <a href="#logout" className="logout btn-shape bg-blue c-white">Logout</a>
            </div>       
        </header>
    );
}
export default Header;
