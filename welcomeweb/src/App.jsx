import React from 'react'

function App() {
  return (
    <nav className='flex bg-black text-white'>
      <p>SecuResidences</p>
      <ul className='text-green-700 flex ml-10'>
        <li>Home</li>
        <li>Features</li>
        <li>About</li>
        <li>Contact</li>
        <li>Survey</li>
      </ul>
      <button className='btn'>Download App</button>
    </nav>
  )
}

export default App