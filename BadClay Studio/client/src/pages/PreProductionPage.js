import React from 'react'
import Banner from '../components/Banner'
import sample from "../videos/founder.mp4"
import news from "../videos/news.mp4"
import BackgroundVideo from "../components/BackgroundVideo"
function PreProductionPage() {
  return (
    <div>
        
      <BackgroundVideo img={news}/>

        <div className="relative z-50 min-h-screen lg:absolute lg:text-white lg:inset-y-20 lg:inset-x-20 flex flex-col justify-center items-center ">
        <div className=' md:text-2xl text-white mx-10'>
        <Banner title="Pre-Production" />
        <Banner desc="Our pre-production team will accompoany your project through the following phases:"/>
        <Banner desc="-Concept Art: Character and environment(2D and 3D). We have done extensive character concept development for Disney, Marvel and other Hollywood big budgets."/>
        <Banner desc="-Previz: planning a heavy VFX sequence? We can help you plan our a sequence from storyboard to previx animatic."/>

    </div>
   

</div>
    </div>
  )
}

export default PreProductionPage