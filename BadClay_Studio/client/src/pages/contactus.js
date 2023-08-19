import React from 'react'
import Heading from "../components/Heading"
import Form from "../components/Form"
function Contactus() {
  return (
    <div>
      <div className=' bg-gradient-to-r from-gray-200 to-gray-200'>
      <div className='mx-auto container content-center'>
        
       
        <Heading title="CONTACT US"/>
        <p className='my-5 text-sm md:text-base'>You can also contact us directly by emailing us at <a className='underline decoration-red-700 decoration-4'> prod@bad-clay.com</a></p>
       
        </div>
        <div className='mx-auto container content-center mt-5 '>
         <Form />
         </div>
        </div>
    </div>
  )
}

export default Contactus