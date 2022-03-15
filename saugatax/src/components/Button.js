import React from 'react'
import { useNavigate } from 'react-router-dom'
function Button(props) {

  let navigate = useNavigate();
  const routerChange = () =>{
    //console.log(`${props.name}`)
    if(props.name === "All Service"){
    let path="/services"
    navigate(path);
    }
    if(props.name === "Contact Us"){
    let path="/contact"
    navigate(path);
    }
  }
  
  return (
    <div>
        <div className='flex justify-center items-center w-full mt-1 h-40'>
        <button type="button" className='border-none text-white  bg-blue-900 p-4 font-bold text-lg hover:bg-red-500'
        onClick={routerChange}>{props.name}</button>
        
        </div>

    </div>
  )
}

export default Button