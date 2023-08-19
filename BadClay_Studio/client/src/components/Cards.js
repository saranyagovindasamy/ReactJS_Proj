import React from 'react'
import SingleCard from './SingleCard'
import Card1 from "../images/careercard1.jpg"
import Card2 from "../images/careercard2.jpg"

  export  const  CareerCardData =[{
      id:1,
      title:"VFX Supervisor",
      imgSrc:Card1,
  },{
      id:2,
      title:"ART Director",
        imgSrc:Card2,

  }]

function Cards() {

  return (
    <div>
       
    <div className=" flex flex-col md:flex-row md:space-x-5 justify-center mt-5">
            {CareerCardData.map((job)=> <SingleCard key={job.id} title={job.title} img={job.imgSrc} />)}
        </div>
        </div>
   
  )
}

export default Cards