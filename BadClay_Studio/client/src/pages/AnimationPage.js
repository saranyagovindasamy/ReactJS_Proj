import React from 'react'
import Banner from "../components/Banner"
import BackgroundVideo from '../components/BackgroundVideo'
import animation from "../videos/animation.mp4"
function AnimationPage() {
  return (
    <div>  
  
 <BackgroundVideo img={animation}/>   
        <div className="min-h-screen z-50 relative flex flex-col lg:absolute lg:text-white lg:inset-y-20 lg:inset-x-20 justify-center items-center  ">
        <div className='md:w-96 md:text-xl'>
        <Banner title="ANIMATION" desc="BadClay Studio has extensive experience producing a wide range of animation style, both realistic and cartoony for TV series(Korea), commercial and feature films from layout to final output."/>
        <Banner desc="Development of our own IPs is alos underway."/>
    </div>
    </div>
</div>
  )
}

export default AnimationPage