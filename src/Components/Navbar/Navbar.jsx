import React from 'react'

function Navbar() {
  return (
    <div className=' bg-black  '>
      <nav >
        <div className=' items-center p-5 ml-7 '>
        <a className='text-white m-2 hover:text-red-900 cursor-pointer ' href='#'>Home</a>
        <a className='text-white m-2 hover:text-red-900 cursor-pointer  ' href='#'>About</a>
        <a className='text-white m-2 hover:text-red-900 cursor-pointer  ' href='#'>Portfolio</a>
        <a className='text-white m-2 hover:text-red-900 cursor-pointer  ' href='#'>Contact</a>
        </div>
      </nav>
  </div>
  )
}

export default Navbar