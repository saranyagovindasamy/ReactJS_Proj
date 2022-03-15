import React from 'react'
import BackgroundVideo from '../components/BackgroundVideo'
import Banner from "../components/Banner"
import assets from "../videos/assets.mp4"
function AssetPage() {
  return (
    <div>
      <BackgroundVideo img={assets}/>
        <div className="lg:absolute lg:inset-y-20 lg:inset-x-20 lg:text-white flex flex-col justify-center items-center">
        <div className='md:w-96 md:text-xl'>
        <Banner title="ASSET(OutSourcing)" />
        <Banner desc="Our Asset team is one of the strongest in Vietnam, made up of veteran artists who are among the best in their craft."/>
        <Banner desc="We strive to deliver for our clients the best quality asset possible, technically by deploying a streamlined pipeline design for outsourcing."/>
        <Banner desc="Our team's versatility in skills allows us to interpret and execute a wide range of brief and styles, from ultra-realistic to cartoony."/>

    </div>
    </div>

    </div>
  )
}

export default AssetPage