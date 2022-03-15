import React from 'react'

function Header(props) {
  return (
    <div>
        <div className=" flex flex-col  items-center my-4 md:flex-row-reverse h-1/4">
             <div className=' md:basis-1/2 flex-col-reverse'>
            <img src={props.img} alt="Locations" className='object-cover h-full w-screen'/> 

        </div>
            <div className="flex flex-col px-10 md:items-center md:basis-1/2 md:justify-center md:space-x-14 space-y-4  ">
              
                <h1 className="text-3xl font-semibold indent-12">{props.title}</h1>
                <p className="text-justify font-light">{props.description}</p>
           
            </div>
       
      </div>
    </div>
  )
}

export default Header