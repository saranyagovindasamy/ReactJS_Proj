import React from 'react'
import BackgroundVideo from '../components/BackgroundVideo'
import Banner from "../components/Banner"
import Founder from "../videos/founder.mp4"
import Vietnam from "../videos/vietnam.mp4"
import Vfx from "../videos/vfx.mp4"

function AboutPage() {
  return (
    <div>
      <BackgroundVideo img={Vfx}/>


  <div className=" text-sm md:z-50 lg:absolute lg:inset-y-20 lg:inset-x-20 text-black md:text-white flex flex-col justify-center items-center">

        <Banner title="BadClay Studio" desc="Your boutique VFX studio for feature Film, television and other media"/>
        <Banner  desc="Made in VietNam, with International quality standards in mind"/>
        <Banner  desc="With more than 30 Feature films done as the main VFX facility, BadClay has the experience and knowledge to rpovide your project with outstanding VFX"/>
        <p className='my-5 text-sm md:text-sm'>You can also contact us directly by emailing us at <a className='underline decoration-red-700 decoration-4'> prod@bad-clay.com</a></p>

    </div>
<div className="h-screen mt-5 grid grid-cols-1 lg:grid-cols-2 ">
  <div className="md:mt-2">
<video className='videoTag w-full h-full object-cover ' autoPlay loop muted>
    <source src={Vietnam} type='video/mp4' />
</video>
</div>

        <div className=' text-left mx-10 '>
        <Banner title="About the Studio" desc="Bad Clay Studio is a VFX, Animation and 3D outsourcing studio based in Ho Chi Minh City(Vietnam)."/>
        <Banner desc="The studio was founded in 2013, it is run by a veteran French VFX artist(Mr.Thierry Nguyen) with 18 years of experience in Hollywood,European and Asian VFX animation industry."/>
        <Banner desc="Since then, Bad Clay has been one of the leading cinematic VFX studios in Vietnam, providing VFX production on over 20 Vietnamese feature films including latest local box office hits such as Furie,Trang Ti, the Immortal, Daddy Issues etc.and 
        been an outsourcing partner for many international studios in Europe, South East Asia and America. Our portfolio of clients includes Westworld, Locus,Mofac,Gsle Studio, Mathmatic, MPC, Blur Studio among others."/>
      <Banner desc="Our team of dedicated artists is assembled to be part of an end to end production pipeline for both animation, live action projects and TV commercials, capable of executing from concept art and visual development to previsualization, character/creature animation, FX, lighting to final compositing. We are also experienced in modeling and surfacing high end CG assets that are either ultra-realistic or cartoony. We have also successfully co-produced full CGI cartoon series that are very popular in Korea such as Stone Age and Journey of Long."/>
        <Banner desc="BadClay also has the ambition to develop their own IPs, and venture into other industries such as games,apps or VR."/>
</div>
</div>

<div className=" h-screen grid grid-cols-1 lg:grid-cols-2 mt-5 mb-5 ">
  <div className="md:order-1"> 
  
<video className='videoTag w-full h-full object-cover ' autoPlay loop muted>
    <source src={Founder} type='video/mp4' />
</video>  
  </div>
        <div className='text-left mx-10 flex justify-center items-center md:flex-col'>
        <Banner title="About the Founder" desc="One of the thigs that makes BadClay Studio unique,is the mix between Western and Eastern influence."/>
        <Banner subtitle="Mr.Thierry" desc=" has made his career in big VFX and animation studios in Europe(DNEG,BUF,etc),working on Hollywood and European blockbusters. In the process, her earned invalues expericence leading and managing teams to Western standards."/>
        <Banner desc="He is from Vietnamese background and that fives him an unique perspective on both cultures."/>
        <Banner desc="His aim is to nurture and find local talents,making BadClay studio one of the most versatile and professional studio in South East Asia."/>
</div>
</div>   </div>
  )
}

export default AboutPage