import React,{useEffect} from 'react'
import ContactForm from '../../components/ContactForm'
import Header from "../../components/Header"
import Service from "../../images/service.jpg"
import Serviceimg3 from "../../images/serviceimg3.jpg"
import Rqc from "../../components/Rqc"
import ServiceCards from '../../components/ServiceCards'
function Services() {
          useEffect(() => {
    document.title = "SaugaTax/Services"
  }, [])
  return (
    <div>
      
    <Header img={Service} 
    title="Business Advisory Sercive"
    description="Successfully starting a business is easily said than done. The risk appitite of individuals vary and we deal with every individual in their perspective in its totality"/>
    
<ServiceCards />

<Rqc />
    </div>
  )
}

export default Services