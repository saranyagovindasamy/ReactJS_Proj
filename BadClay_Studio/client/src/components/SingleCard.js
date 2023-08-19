import React from 'react'
import {  NavLink } from 'react-router-dom'
 import { useLocation } from "react-router-dom"

function SingleCard(job) {
const sampleLocation = useLocation();
console.log(sampleLocation.pathname)
const pathname = sampleLocation.pathname
if(pathname=="/careers"){
console.log("yes")
}
  return (
   
    <div>
     
  <NavLink to={`/${job.link}` }>
 <div className={"mx-auto mb-10 max-w-sm rounded overflow-hidden shadow-lg " + ( pathname == "/careers"  ?  'cursor-none' : 'cursor-pointer')}>
  <img className="w-full" src={job.img} alt={job.title} />
  <div className="px-6 py-4">

    <div className="font-bold text-xl mb-2"> 
    {job.title}
    </div>
    <p className="text-gray-700 text-base">
{job.desc}   </p>

  </div>

</div>
 </NavLink>
</div>


    
  )
}

export default SingleCard;