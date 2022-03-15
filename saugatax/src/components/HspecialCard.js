import React from 'react'
import Bicycle from "../images/home/Bicycle20Repair20Shop.jpg"
import corpServ from "../images/home/addcorpserv.jpg"
import Calculator from "../images/home/Calculator.jpg"
import corporatetax from "../images/home/corporatetax.jpg"
import Hadshanke from "../images/home/Handshake.jpg"
import personal from "../images/home/personal.jpg"
import Professional from "../images/home/Professionals.jpg"
import otherservice from "../images/home/otherservice.jpg"

export const HspecialData = [{
id:"1",
hstitle:"Personal Tax",
img:personal,
},
{
id:"2",
hstitle:"Self Employment Tax",
img:Bicycle,
},
{
id:"3",
hstitle:"Corporate Tax",
img:corporatetax,
},
{
id:"4",
hstitle:"US Taxes",
img:otherservice,
},
{
id:"5",
hstitle:"Business Incorporation Tax",
img:Professional,
},
{
id:"6",
hstitle:"Corporation Services",
img:corpServ,
},
{
id:"7",
hstitle:"Accounting & BookKeeping",
img:Calculator,
},
{
id:"8",
hstitle:"Business Advisory",
img:Hadshanke,
},
{
id:"9",
hstitle:"Other Services",
img:otherservice,
},]
function HspecialCard() {
  return (
    <div>
      <div className='space-y-5 mt-5 mb-10'>
        <h1 className='font-bold text-xl'>We Specialise</h1>
        <p> We provide Tax and Accounting Services to Individuals and Business</p>
       <div className='overflow-hidden mx-10  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-20 mt-20 '>
                {HspecialData.map((data) =>
                  <div className="relative p-5 mt-5 bg-indigo-900 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 " key={data.id}>
            <div className='absolute -mt-10 bg-gradient-to-r translate-x-14 '>
                  
                  <img src={data.img } className='h-52 w-56 object-cover ' />
   </div>
            <h1 className="mt-48 font-semibold text-xl text-white ">{data.hstitle}</h1>
           
              
    </div>)}
        </div>
        </div>
  
    </div>
  )
}

export default HspecialCard