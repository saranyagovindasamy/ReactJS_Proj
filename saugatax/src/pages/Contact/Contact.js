import React,{useEffect} from 'react'
import ContactDetails from '../../components/ContactDetails'
import ContactForm from '../../components/ContactForm'
import Header from "../../components/Header"
import contacthero from "../../images/contacthero.jpg"


function Contact() {
          useEffect(() => {
    document.title = "SaugaTax/Contact"
  }, [])
  return (
    <div>

    <Header img={contacthero} title="CONTACT US"
    description="Reach Us For Your Tax Filing & Accounting Needs"/> 
   <div className="grid grid-cols-1 lg:grid-cols-2 mt-5">
   <ContactForm />
    <ContactDetails/>
     </div>

    </div>
  )
}

export default Contact