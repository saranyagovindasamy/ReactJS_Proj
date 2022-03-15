import React, {useState} from "react";
import { Outlet,NavLink } from "react-router-dom";
import Logo from "../images/Saugatax.jpg"
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {GoLocation} from "react-icons/go"
import {IoIosArrowDropdownCircle} from "react-icons/io"

export default function Navbar({ fixed }) {

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [topbarOpen,setTopbarOpen] = useState(false);
  const [dropdownOpen,setDropdownOpen] = useState(false)
  return (
    <>
    <div className="w-full relative flex  md:mx-2 md:flex-row md:flex-grow px-2 lg:w-auto lg:static lg:block lg:justify-end"  >
        <div className="flex justify-between">
                <div className="flex justify-between items-center ">
                                    <div className=" mr-4 py-2 text-sm font-bold uppercase text-white">
                                        <img src={Logo} alt="Tax-logo" />
                                    </div>
                                    <div>
                                    <button
                                            className=" text-black cursor-pointer mx-1 text-xl px-3 py-2 rounded  md:hidden focus:outline "
                                            type="button"
                                            onClick={() => setTopbarOpen(!topbarOpen)}>
                                            
                                            <i className="fas fa-bars"></i>
                                    </button>
                                </div>
                    </div>
                <div
                        className={
                        "md:flex md:flex-row md:justify-end md:items-center" +
                        (navbarOpen ? " flex" : " hidden")
                        }>
                        
                    
                        <div className="flex md:shrink-0 items-center">
                        
                            <BsFillTelephoneFill  className="w-7 h-7 text-red-500"/>
                            <h1 className="pr-8 font-bold">416-428-0404</h1>
                            
                            <AiOutlineMail className=" w-7 h-7 text-red-500 " />
                            <h1 className="pr-5 font-bold">info@saugatax.ca</h1>
                            <GoLocation  className="w-7 h-7 text-red-500"/>
                            <h1 className="font-bold">Scarborough</h1>
                    </div>
                  </div>
                  </div>
                    </div>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 bg-gray-300 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
  
            </div>
            {/* <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden  focus:outline"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
            
              <i className="fas fa-bars"></i>
            </button> */}
          </div>
          <div
            className={
              " lg:flex flex-grow items-center " +
              (topbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:mx-auto">
              <li className="nav-item px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
                <NavLink to="/" style={({ isActive }) =>
              isActive
                ? {
                  padding:'5px',
                   textDecoration:'underline',
                   textDecorationColor:'red',
                   textDecorationThickness:'4px'
                   
                  }
                : { color: 'black', }
            }>
                  
                  
               
                <span className="ml-2">Home</span>
                </NavLink>
              </li>
              <li className="nav-item px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                <NavLink to="/about" style={({ isActive }) =>
              isActive
                ? {
                   padding:'5px',
                   textDecoration:'underline',
                   textDecorationColor:'red',
                   textDecorationThickness:'4px'
                  }
                : { color: 'black',  }
            }>
                
                 
                
                  <span className="ml-2">About Us</span>
                </NavLink>
              </li>

              <li className="nav-item px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                <NavLink to="/services" style={({ isActive }) =>
              isActive
                ? {
                   padding:'5px',
                   textDecoration:'underline',
                   textDecorationColor:'red',
                   textDecorationThickness:'4px'
                  }
                : { color: 'black',  }
            }>
                  <span className="ml-2">Services  
                  
                   {/* <button  className=" text-black cursor-pointer text-xl px-2 py-2 rounded ">
                  <IoIosArrowDropdownCircle  onClick={() => setDropdownOpen(!dropdownOpen)}/>
                  </button>   */}
                  </span>
                  </NavLink>
                  
       {/* <div
            className={
             
              (dropdownOpen ? " flex flex-col" : " hidden")
            }>
              <div className="lg:absolute top-30 left-0">
            <ul className=" rounded-md shadow-lg  z-20 text-black list-none">
              <li className="nav-item px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
                <NavLink to="/personaltax" style={({ isActive }) =>
              isActive
                ? {
                  padding:'5px',
                   textDecoration:'underline',
                   textDecorationColor:'red',
                   textDecorationThickness:'4px'
                   
                  }
                : { color: 'black', }
            }>
                  
                  
               
                <span className="ml-2">Personal Tax</span>
                </NavLink>
              </li>
                            <li className="nav-item px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
                <NavLink to="/" style={({ isActive }) =>
              isActive
                ? {
                  padding:'5px',
                   textDecoration:'underline',
                   textDecorationColor:'red',
                   textDecorationThickness:'4px'
                   
                  }
                : { color: 'black', }
            }>
                  
                  
               
                <span className="ml-2">Income Tax</span>
                </NavLink>
              </li>
              </ul>
            
              </div>
          </div> */}
               </li> 
              <li className="nav-item  px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
                <NavLink to ="/customer"  style={({ isActive }) =>
              isActive
                ? {
                     padding:'5px',
                   textDecoration:'underline',
                   textDecorationColor:'red',
                   textDecorationThickness:'4px',
                  }
                : { color: 'black',  }
            }>               
                  <span>Customers</span>
                </NavLink>
              </li>
              <li className="nav-item  px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">       
                <NavLink to ="/location"  style={({ isActive }) =>
              isActive
                ? {
                   padding:'5px',
                   textDecoration:'underline',
                   textDecorationColor:'red',
                   textDecorationThickness:'4px'
                  }
                : { color: 'black',  }
            }>               
   <span className="ml-2">Locations</span>
                </NavLink>
              </li>
                             {/* <li className="nav-item  px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">
                <NavLink to ="/blogs"  style={({ isActive }) =>
              isActive
                ? {
                    
                    padding:'5px',
                   textDecoration:'underline',
                   textDecorationColor:'red',
                   textDecorationThickness:'4px'
                  }
                : { color: 'black',  }
            }>               
   <span className="ml-2">Blogs</span>
                </NavLink> 
              </li> */}


              <li className="nav-item  px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">
                <NavLink to ="/contact"  style={({ isActive }) =>isActive? { color: 'black',textDecoration:'underline', textDecorationColor:'red',
                   textDecorationThickness:'4px'}: { color: 'black',  }}>               
                  <span className="ml-2">Contact Us</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
       
      <Outlet />
    </>
  );
}
