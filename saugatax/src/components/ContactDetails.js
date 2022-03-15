import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {GoLocation} from "react-icons/go"
function ContactDetails() {
  return (
    <div >
        <div className='flex flex-col mx-11 space-y-10'>
<h1 className="text-2xl text-left mt-28  mb-10">Reach Us Through</h1>

<div className='flex flex-1 '>
<BsFillTelephoneFill  className=" text-gray-500"/>
<span className="font-bold ml-5 items-center underline">416-428-0404</span>
 </div>   
 <div className='flex flex-1'>                      
 <AiOutlineMail className=" w-7 h-7 text-gray-500 " />
<h1 className=" font-bold ml-5 items-center">info@saugatax.ca</h1></div>
<div className='flex flex-1'>
<GoLocation  className="w-7 h-7 text-gray-500"/>
<div className='flex flex-col'>
<h1 className="font-bold ml-5 items-start text-left">Our Locations</h1> 

<p>Malvern Town Center, Scarborough<br/>21 Dagwell Cresent, Ajax</p></div>  
 </div>
 </div>
</div>
  )
}

export default ContactDetails