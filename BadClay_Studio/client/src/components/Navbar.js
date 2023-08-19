import React, {useState} from "react";
import { Outlet,NavLink } from "react-router-dom";
import logo from "../images/badClay_logo.png"

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-800 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
            <NavLink to="/"><img src={logo} alt="Logo" className="h-10 w-26 bg-cover" />
            </NavLink>
            </div>
            <button
              className="text-white cursor-pointer text-xl leading-none p-2 border border-solid border-transparent rounded bg-transparent block lg:hidden  "
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}>
            
              <i className="fa fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center " +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:mx-auto">
              <li className="nav-item px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                <NavLink to="/" style={({ isActive }) =>
              isActive
                ? {
                    color: 'white',
                   textDecoration:'underline',
                   
                  }
                : { color: 'white', }
            }>
                  
                  
               
                  <span className="ml-2">ABOUT</span>
                </NavLink>
              </li>
              {/* <li className="nav-item px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                <NavLink to="/about" style={({ isActive }) =>
              isActive
                ? {
                    color: 'white',
                   textDecoration:'underline',
                  }
                : { color: 'white',  }
            }>
                
                 
                
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">About</span>
                </NavLink>
              </li> */}
              <li className="nav-item px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                <NavLink to="/division" style={({ isActive }) =>
              isActive
                ? {
                    color: 'white',
                   textDecoration:'underline',
                  }
                : { color: 'white',  }
            }>
                  <span className="ml-2">DIVISION</span>
                </NavLink>
              </li>
              <li className="nav-item  px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                 
                >
                <NavLink to ="/reels"  style={({ isActive }) =>
              isActive
                ? {
                    color: 'white',
                   textDecoration:'underline',
                  }
                : { color: 'white',  }
            }>               
                  <span className="ml-2">REELS</span>
                </NavLink>
              </li>
              <li className="nav-item  px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                 
                >
                <NavLink to ="/careers"  style={({ isActive }) =>
              isActive
                ? {
                    color: 'white',
                   textDecoration:'underline',
                  }
                : { color: 'white',  }
            }>               
                  <span className="ml-2">CAREERS</span>
                </NavLink>
              </li>
              
              <li className="nav-item  px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                 
                >
                <NavLink to ="/contact"  style={({ isActive }) =>
              isActive
                ? {
                    color: 'white',
                   textDecoration:'underline',
                  }
                : { color: 'white',  }
            }>               
                  <span className="ml-2">CONTACT US</span>
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
