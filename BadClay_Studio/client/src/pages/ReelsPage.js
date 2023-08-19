import React from 'react'
import BackgroundVideo from '../components/BackgroundVideo'
import Reels from "../videos/reels.mp4"
import  vfx from "../videos/vfx.mp4"
import news from "../videos/news.mp4"
function ReelsPage() {
  return (
    <div>
        <BackgroundVideo img={Reels}/>

        <div className='block mt-10  max-w-screen-md lg:absolute  lg:top-52 lg:right-52 '>
        <h1 className='text-black font-bold font-sm my-10 lg:text-white '>VFX Reel Compilation 2013-2019</h1>

<iframe className=" aspect-video object-cover w-full h-full " src={vfx}></iframe>  


</div>

        <div className='block mt-10 max-w-screen-md  lg:absolute lg:top-52 lg:left-36 '>
        <h1 className='text-black font-sm my-10  font-bold lg:text-white'>VFX Reel Compilation 2019</h1>

<iframe className=" aspect-video object-cover w-full h-full" src={news}></iframe>  

</div> 
</div>
  )
}

export default ReelsPage