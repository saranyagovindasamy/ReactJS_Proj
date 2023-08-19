import React from 'react'

function Banner(props) {
  return (
    <div >
        <div className='mx-auto container mt-5 content-center '>
        <h1 className="font-bold text-xl  mb-5 lg:text-2xl">{props.title}</h1>
        <p className="subpixel-antialiased text-sm md:text-base md:text-justify lg:text-justify"><strong>{props.subtitle}</strong>{props.desc}</p>
        </div>
    </div>
  )
}

export default Banner