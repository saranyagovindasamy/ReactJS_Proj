import React from 'react';
import {useLocation} from "react-router-dom"
import Button from './Button';
 const LocationCard = (data) => {
   const location = useLocation()
    return <div>
   
      <div className="lg:h-max relative ">
        <div className='transition ease-in-out delay-150  hover:translate-y-1 hover:scale-75  duration-300'>
        <img  src={data.img} alt="Loading Image... " className=" w-full h-full opacity-90 object-cover "/>
    <div className="absolute font-bold text-xl bottom-0 text-black">{data.title}</div>

 <h1 className="text-red-600 font-bold text-2xl m-5"> {data.servicetitle} {data.ptitle}</h1>
 <p className="font-normal text-justify break-words m-5"> {data.sdesc}{data.pdesc}</p>
 {(location.pathname === "/services") && <Button name="Read More"/> }
</div>
</div>

  </div>;
};
export default LocationCard;