import React from 'react'
import Button from './Button'
import Reachuscard from "../images/home/Reachuscard.jpg"
function Homebg() {
  return (
    <div>
        <div className="relative h-72 lg:h-96 w-full bg-gradient-to-r from-sky-500 to-indigo-500">
            <img src={Reachuscard} alt="card-bg" className='object-cover w-full h-full'/>
            <div className='absolute inset-y-0 right-0  my-5 text-white font-extrabold text-3xl '>

                <h1 className='mt-10 lg:text-justify lg:mr-10'>Reach Us For Your Tax Filing & Accounting Needs</h1>
                <Button name="Contact Us"/>
                
            </div>
        </div>
    </div>
  )
}

export default Homebg