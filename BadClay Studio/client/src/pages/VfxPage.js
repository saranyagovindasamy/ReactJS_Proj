import React from 'react'
import BackgroundVideo from '../components/BackgroundVideo'
import Banner from '../components/Banner'
import vfxvideo from "../videos/vfxvideo.mp4"

function VfxPage() {
  return (
    <div>
  <BackgroundVideo img={vfxvideo} />
              <div className=" relative z-40 lg:absolute lg:text-white lg:inset-y-20 lg:inset-x-20 text-black flex flex-col justify-center items-center ">
<div className='md:w-3/6 md:text-xl mx-5'>
        
        <Banner title="VFX" desc="Since 2013,Badclay Studio has worked on over 20 feature films as the main vendor for VFX, majorly for the Vietnamese industry."/>
        <Banner desc="Once committed, we are often deeply involved, offering technical consultation as early as script stage in order to devise shooting techniques,concept are and pre-visualisation to ensure the most through and creative planning process that will satisfy the storytelling aspect of the project."/>
        <Banner desc="Our primary working language is English, French, Vietnamese with Korean as secondary."/>
    </div>
    </div>
    </div>
  )
}

export default VfxPage