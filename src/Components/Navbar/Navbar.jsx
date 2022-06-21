import React from 'react'

function Navbar() {
  return (
    <div className=' bg-[#1b242f] border-b-4 border-solid border-[#04c2c9] '>
      <nav className='' >
        <div className=' items-center p-4 ml-7 '>
        <a className='text-white m-2 p-5 hover:text-[#d62038] cursor-pointer ' href='#'>HOME</a>
        <a className='text-white m-2 p-5 hover:text-[#d62038] cursor-pointer  ' href='#'>ABOUT</a>
        <a className='text-white m-2 p-5 hover:text-[#d62038] cursor-pointer  ' href='#'>PORTFOLIO</a>
        <a className='text-white m-2 p-5 hover:text-[#d62038] cursor-pointer  ' href='#'>CONTACT</a>
        </div>
      </nav>
  </div>
  )
}

export default Navbar