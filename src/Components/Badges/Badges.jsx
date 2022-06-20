import React from 'react'
import fast from '../../Assets/fast.png'
import responsive from '../../Assets/responsive.png'
import intuitive from "../../Assets/intuitive.png"
import dynamic from "../../Assets/dynamic.png"

function Badges() {
  return (
      <>
      <div className='text-3xl  m-4 top-5 font-semibold text-center'><u>About</u></div>
   
   

   <div className='flex justify-around m-2 gap-6'>
    <img src={fast} />
    <img src={responsive} />
    <img src={intuitive} />
    <img src={dynamic} />



    </div>
      </>
  )
}

export default Badges