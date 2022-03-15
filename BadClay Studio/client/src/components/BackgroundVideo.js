import React from 'react'
function BackgroundVideo(props) {
  return (
    <div>
        <div className='max-h-screen w-full bg-center lg:relative '>
         <video className='videoTag w-full h-full object-cover ' autoPlay loop muted>
    <source src={props.img} type='video/mp4' />
</video>
       
    </div>
    </div>
  )
}

export default BackgroundVideo