import React from 'react'
import bacCard from "../images/home/test.jpg"
import LocationCard from '../components/LocationCard'
export const BacCardData = [{
    id:1,
    title:"Stephanie Cole",
    description:"Super Great Experience"
},{
    id:2,
    title:"Stephanie Cole",
    description:"Super Great Experience"
},{
    id:3,
    title:"Stephanie Cole",
    description:"Super Great Experience"
},]
function BacCard() {
  return (
    <div>
        <div className="relative w-full max-h-full my-10 mb-20">
            <img src={bacCard} alt="background-image" className='w-full object-cover max-h-full  '/>
               <div className=' absolute mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-5 overflow-auto'>
                 

              {BacCardData.map((data)=> 
              <div className="text-black  bg-white text-xl font-bold p-16 " key={data.id}>
                  <h1 className="pb-5 ">{data.title}</h1>
             <p> {data.description}</p></div>)}  
             </div>

            </div>
               
     </div>
  )
}

export default BacCard