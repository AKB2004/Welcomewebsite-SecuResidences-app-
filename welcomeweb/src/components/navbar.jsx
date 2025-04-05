import React from 'react'
import logo from '../assets/img/image.png'
function Navbar() {
  return (
     <nav className='flex justify-between items-center px-8 py-4'>
          <img src={logo} alt="SecuResidences Logo"
          className='h-16 w-auto ml-2 ' />
          
          <ul className="flex ml-10 mr-6 space-x-8">
      {["Home", "About", "Features", "Contact", "Survey"].map((item) => (
        <li
          key={item}
          className="relative group text-purple-700 cursor-pointer text-xl px-4"
        >
          <span className="group-hover:text-purple-400 transition-colors duration-200">
            {item}
          </span>
          <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
      ))}
    </ul>
   

          <button className='bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-xl transition-all text-base'>Download App</button>
        </nav>
  )
}

export default Navbar