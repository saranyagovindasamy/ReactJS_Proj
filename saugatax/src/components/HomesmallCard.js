import React from 'react'
import audit from "../images/home/Audit.png"
import filling from "../images/home/Filing.png"
import location from "../images/home/location.png"
import mail from "../images/home/mail.png"
import refund from "../images/home/refund.png"
import review from "../images/home/Review.png"
import transaction from "../images/home/transaction.png"

function HomesmallCard() {
  const smallCardData = [{
    id:"1",
    title:"Max Refund",
    imgSrc:refund, 
    
  },
{
    id:"2",
    title:"Instant Cash Back",
    imgSrc:transaction,
  },
{
    id:"3",
    title:"Permanent Location",
    imgSrc:location,
  },
{
    id:"4",
    title:"Year Round Filing",
    imgSrc:filling,
    
  },
{
    id:"5",
    title:"CRA Review",
    imgSrc:review,
  },
{
    id:"6",
    title:"Audit & Adjustments",
    imgSrc:audit,
  }]
  return (
    <div>
      <div className="mx-auto container mt-10">
        <h1 className='text-2xl font-bold py-10'>The SaugaTax Advantages</h1>
           </div>
        <div className="ml-2 mr-2 justify-items-center grid grid-cols-3 lg:grid-cols-6 gap-3">
          
{smallCardData.map((e)=> 
<div className="bg-white-500 rounded-lg p-7 hover:bg-indigo-800 hover:text-white text-center">
    <img src={e.imgSrc} alt="audit" className='ml-4 h-16 w-16 '/>

<ul key={e.id}> 

  <li className="mt-2 font-bold">  {e.title} </li>
  </ul> </div> ) }
       </div>
     
       
    </div>
  )
}

export default HomesmallCard