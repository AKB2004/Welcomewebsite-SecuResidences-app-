// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-4 py-8">
      <div className="max-w-7xl mx-auto text-center">
    
        <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-indigo-400">SecuResidences</h2>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 mb-4 flex-wrap">
        <a href="#home" className="hover:text-purple-700">Home</a>
        <a href="#about" className="hover:text-purple-700">About</a>
        <Link to="/contact" className="hover:text-purple-700">Contact</Link>
        <Link to="/survey" className="hover:text-purple-700">Survey</Link>
        <a href="#download" className="hover:text-purple-700">Download App</a>
        </div>

        <div className="mb-2">
          📍 Bengaluru, India
        </div>
        <div className="mb-4">
          📧 securesidences@gmail.com
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          © 2025 SecuResidences. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
