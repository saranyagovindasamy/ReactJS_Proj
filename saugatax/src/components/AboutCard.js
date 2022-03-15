import React from 'react'
export const AboutCardData=[{
    id:"1",
    description:"We are the most sought out consultants for small business in our area and all across Greater Toronto. We help small business with tailor-made solutions for their tax filing requirements."
},{
    id:"2",
    description:"Our thousands of repeat clients are proof of our performance and their trust bestowed upon us."
},{
    id:"3",
    description:"We are known for our competitive prices and quality services."
}
]
function AboutCard() {
  return (
    <div>
        <h1 className="mx-auto text-center font-semibold text-2xl py-10">Why We Stand Out in the Crowd</h1>
    <div className=' grid grid-cols-1 gap-5 md:grid-cols-3 my-4'>
        {AboutCardData.map((data)=>
        <div className='mx-5 text-justify break-words font-normal'key={data.id}>{data.description}</div>)}
</div>
 </div>
  )
        }
       
export default AboutCard