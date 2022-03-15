import React from 'react';
import LocationCard from './LocationCard'
import Mencalcul from "../images/Mencal.jpg"
import Usflag from "../images/us-tax/US20Flag.jpg"
import selfemptax from "../images/SelfEmpTax/selfemptax.jpg"
import corporatetax from "../images/corporate-tax/Accountant.jpg"
import Busincorpserv from "../images/BusIncorpServices/Busincorpserv.jpg"
import addcorp from "../images/personal-tax/addcorp.jpg"
import busadvise from "../images/personal-tax/busadvise.jpg"
import otherserv from "../images/personal-tax/otherserv.jpg"
import accbook from "../images/personal-tax/Accounting.jpeg"
export const ServiceData = [
  {id:1,
  servicetitle:"Personal Tax",
  imgSrc:Mencalcul,
  sdesc:"Tax situations vary with individuals.  We work closely with our clients to figure out their specific needs and adopt customised approach with each client."
},
  {id:2,
    servicetitle:"Self Employment Tax",
      imgSrc:selfemptax,
sdesc:"Small Business Taxes are unique to every business, our experts will help you choose the best options compliant under the Income Tax Act and Rules."
},
  {id:3,
    servicetitle:"Corporate Tax",
  imgSrc:corporatetax,
sdesc:"We offer a single window solution for the end-to-end needs of Corporate in their Tax and Accounting Situations, With streamline practical approaches."
},
  {id:4,
    servicetitle:"Business Incorporation Services",
  imgSrc:Busincorpserv,
sdesc:"Saugatax helps our clients to get incorporation of business in Canada and be a support to improve their credibility and growth potential."
},
  {id:5,
    servicetitle:"Additional Corporation Services",
  imgSrc:addcorp,
sdesc:"We provide services for a wide variety of clients, from pre-financing to multi-billion dollar public companies. and help them to do the best."
},
  {id:6,
    servicetitle:"Business Advisory Services",
  imgSrc:busadvise,
sdesc:"Starting a business is easily said than done. The risk appetite of individuals vary and we deal with every individual in their perspective in its totality"
},
  {id:7,
    servicetitle:"US Taxes",
  imgSrc:Usflag,
sdesc:"We make sure the expatriation tax accurate and complete through our expert methodology to minimize you taxes"
},
  {id:8,
    servicetitle:"Accounting & Book Keeping",
  imgSrc:accbook,
    sdesc:"SaugaTax offers timely, cost-effective, scalable accounting and book keeping solutions customized for requirements."
},
  {id:9,
    servicetitle:"Other Services",
  imgSrc:otherserv,
sdesc:"SaugaTax holds a team of analytical, experienced & Subject Matter Experts to solve any complicated business problems."
},

]
function ServiceCards() {
  return <div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-12 mt-10 mx-20">
        
        {ServiceData.map((data) => <LocationCard key={data.id} id={data.id} servicetitle={data.servicetitle} img={data.imgSrc}
        sdesc={data.sdesc}/>)}

      </div>
  </div>
}

export default ServiceCards;




