import React from 'react'
import { NavLink} from "react-router-dom"
import SocialIcons from './SocialIcons';
import Logo from "../images/Saugatax.jpg"
import ScrollButton from './ScrollTop';

function Footer() {
    return (
        <>
         <ScrollButton />
        <div className="bg-sky-900 grid grid-cols-1 justify-items-center md:grid-cols-4 w-full mt-12 mb-0 ">
        <div  className="ml-10 my-10">
            <img src={Logo} alt="Logo"className="bg-white"/>   
        </div>
                <div className="ml-10 my-10">
            <h1 className="text-white font-bold">Quick Links</h1>
           <li className="nav-item list-none">
                <NavLink
                  className="px-3 py-2 flex items-center text-xs font-normal leading-snug text-white hover:opacity-75"
                  to="/">
                  <h1 className='font-bold '>Home</h1>
                </NavLink>
              </li> 
                         <li className="nav-item list-none">
                <NavLink
                  className="px-3 py-2 flex items-center text-xs font-normal leading-snug text-white hover:opacity-75"
                  to="/about">
                  <h1 className='font-bold '>About</h1>
                </NavLink>
              </li>
                         <li className="nav-item list-none">
                <NavLink
                  className="px-3 py-2 flex items-center text-xs font-normal leading-snug text-white hover:opacity-75"
                  to="/services">
                  <h1 className='font-bold '>Service</h1>
                </NavLink>
              </li>
                         <li className="nav-item list-none">
                <NavLink
                  className="px-3 py-2 flex items-center text-xs font-normal leading-snug text-white hover:opacity-75"
                  to="/location">
                  <h1 className='font-bold '>Location</h1>
                </NavLink>
              </li>
                         <li className="nav-item list-none">
                <NavLink
                  className="px-3 py-2 flex items-center text-xs font-normal leading-snug text-white hover:opacity-75"
                  to="/blogs">
                  <h1 className='font-bold '>Blogs</h1>
                </NavLink>
              </li>
                         <li className="nav-item list-none ">
                <NavLink
                  className="px-3 py-2 flex items-center text-xs font-normal leading-snug text-white hover:opacity-75"
                  to="/contact">
                  <h1 className='font-bold '>Contact Us</h1>
                </NavLink>
              </li>
        </div>
        <div className="ml-10 my-10">
            <h1 className="text-white font-bold">Follow Us ON</h1>
            <SocialIcons/>
        </div>
        <div className="ml-10 my-10">
            <h1 className="text-white font-bold">Quick Contact</h1>
            <ul className=" list-none ">
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-xs font-normal leading-snug text-white hover:opacity-75"
                  to="/"
                >
                  <i className="fas fa-phone text-lg leading-lg text-white opacity-75"></i><span className="ml-2 underline">Phone- 416-428-0404</span>
                </NavLink>
              </li>
               <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-xs  font-normal leading-snug text-white hover:opacity-75"
                  to="/"
                >
                  <i className="fas fa-envelope-open-text text-lg leading-lg text-white opacity-75"></i><span className="ml-2 underline">Fax- 416-848-0669</span>
                </NavLink>
              </li>
                             <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-xs  font-normal leading-snug text-white hover:opacity-75"
                  to="/"
                >
                  <i className="fas fa-envelope-open-text text-lg leading-lg text-white opacity-75"></i><span className="ml-2 underline">info@saugatax.ca</span>
                </NavLink>
              </li>
               <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/"
                >
                  <i className="fas fa-address-book text-lg leading-lg text-white opacity-75"></i><span className="ml-2 underline ">Malvern Town Center,<br/> Scarborough<br/>
                   21 Dagwell Cresent,<br/>Ajax</span>
                </NavLink>
              </li>

              </ul>
        </div>
           </div> 
       
        <div className=" bg-sky-900 flex flex-col justify-center items-center text-white ">
            
            <p>Copyright &copy;2022 by Saugatax.</p>
        
        </div>
      

        </>
    )
}

export default Footer