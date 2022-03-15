import React from 'react'
import LocationCard from './LocationCard'
import mail from "../images/home/mail2.png"
import building from "../images/home/office-building.png"

import contract from "../images/home/online-contract.png"

function Hprovide() {
      const HprovideData = [{
    id:"1",
    ptitle:"In Person/Office",
    pdesc:"Meet with a Tax Expert to discuss and file your return in person.",
    imgSrc:mail,
  },
{
    id:"2",
    ptitle:"Remote Filing",
    pdesc:"Upload your documents remotely and a Tax Expert will help file your tax retuns...Send us an email to info@saugatax.ca and we will get back to you",
  imgSrc:contract,
  },
{
    id:"3",
    ptitle:"Drop Box",
    pdesc:"You need not wait! No appointment needed! Drop in to our premises at the Malvern Mall and drop off your documents during office hours and a Tax Expert will get back to you to discuss next steps and complete your tax return.",
    imgSrc:building,
  },
]
  return (
    <div>
        <div className=" mx-5 ease-in duration-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {HprovideData.map((data) => 
            <div className='p-5  bg-gray-100 transition ease-in-out delay-150  hover:translate-y-1 hover:scale-75  duration-300 ' key={data.id}>
            <img src={data.imgSrc} alt="audit" className='ml-40 h-16 w-16 '/>

<ul key={data.id}> 

  <li className="mt-2 font-bold">  {data.ptitle} </li>
  <p>{data.pdesc}</p>
  </ul> 
            </div>)}
        </div>

   
    </div>
  )
}

export default Hprovide