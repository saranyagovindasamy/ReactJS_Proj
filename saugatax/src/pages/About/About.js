import React,{useEffect} from 'react'
import Header from "../../components/Header"
import abouthero from "../../images/about/abouthero.jpg"
import AboutCard from "../../components/AboutCard"
import BacCard from "../../components/BacCard"
import Rqc from '../../components/Rqc'
function About() {
          useEffect(() => {
    document.title = "SaugaTax/About"
  }, [])
  return (
    <div>
      <Header img={abouthero} title="About Us"
      description="Saugatax is a Canadian owned Tax and Accounting firm in Toronto, with dedicated services for Individuals and Businesses.

Ever-Changing Tax laws determine Individuals Tax Obligations and their benefits. We are geared up with the state-of-the-art technology and the updated software as per the specifications of CRA. Hence, we deliver satisfactory results by optimizing the parameters to attain the maximum returns from the Tax filing. Our expertise in various Industry verticals and the tax obligations have clearly given us a cutting edge for enhanced and effective results."/>
    <AboutCard />
    {/* <BacCard/> */}
    <Rqc />
    </div>
  )
}

export default About