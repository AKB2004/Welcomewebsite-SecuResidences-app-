import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Survey from "./components/Survey";
import Footer from "./components/Footer";
// import About from "./components/About";
// import ScrollToSection from './components/ScrollToSection';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/survey" element={<Survey />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;



//     <nav className='flex justify-between items-center px-8 py-4'>
//       <img src={logo} alt="SecuResidences Logo"
//       className='h-16 w-auto ml-2 ' />
//       {/* <ul className='text-green-700 flex ml-10 mr-6'>
//         <li className=' text-purple-700 hover:underline text-purple-400 cursor-pointer mr-8 text-xl '>Home</li>
//         <li className='text-purple-700 hover:text-purple-400 cursor-pointer mr-8 text-xl'>About</li>
//         <li className='text-purple-700 hover:text-purple-400 cursor-pointer mr-8 text-xl'>Features</li>
//         <li className='text-purple-700 hover:text-purple-400 cursor-pointer mr-8 text-xl'>Contact</li>
//         <li className='text-purple-700 hover:text-purple-400 cursor-pointer mr-8 text-xl'>Survey</li>
//       </ul> */}
//       <ul className="flex ml-10 mr-6 space-x-8">
//   {["Home", "About", "Features", "Contact", "Survey"].map((item) => (
//     <li
//       key={item}
//       className="relative group text-purple-700 cursor-pointer text-xl"
//     >
//       <span className="group-hover:text-purple-400 transition-colors duration-200">
//         {item}
//       </span>
//       <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
//     </li>
//   ))}
// </ul>
//       <button className='bg-purple-700 hover:bg-purple-600 text-white px-4 py-2 rounded-xl transition-all text-base'>Download App</button>
//     </nav>