import React from 'react'
import SingleCard from '../components/SingleCard'
import Card1 from "../images/vfximg1.jpg"
import Card2 from "../images/vfximg2.jpg"
import Card4 from "../images/vfximg4.jpg"
import Card3 from "../images/vfximg3.jpg"

export const DivisionData =[{
id:1,
title:"VFX ",
desc :"Full VFX pipeline for feature films,commercials,etc.",
imgSrc:Card3,
link:"vfx"
},
{
id:2,
title:"Pre-Production",
desc :"From 2d to 3d concept art, creature, character or environment Previz animatic for film",
imgSrc:Card2,
link:"preproduction"

},
{
id:3,
title:"Asset",
desc :"Outsourcing for other VFX vendors:3D assets of any styles and projects, such as high end VFX,VR-AR,games cinematics,etc.",
imgSrc:Card1,
link:"asset"

},{
id:4,
title:"Animation ",
desc :"Full VFX pipeline for feature films,commercials,etc.",
imgSrc:Card4,
link:"animation"

},]
function DivisionPage() {
  return (
    <div>
        <div className='mt-10 mx-10'>
         <h1 className='text-3xl font-bold '>Divisions</h1>
        <div className='flex flex-col md:flex-row md:space-x-10 mt-10 justify-center items-center space-y-5'>
       
     {DivisionData.map((job)=> <SingleCard key={job.id} title={job.title}  img={job.imgSrc} desc={job.desc}
     link={job.link}/>)}

        </div>
    </div>
    </div>
  )
}

export default DivisionPage