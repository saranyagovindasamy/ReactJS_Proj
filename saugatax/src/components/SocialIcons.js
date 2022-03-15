import React from "react";
import { Outlet,NavLink} from "react-router-dom"


export default function SocialIcons() {
  return (
    <>
      <div>
            <ul className=" list-none ">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="https://www.facebook.com/BadClayVFX/" target="_blank"
                >
                  <i className="fab fa-facebook text-lg leading-lg text-white opacity-75"></i><span className="ml-2">FaceBook</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="https://www.youtube.com/channel/UCLxBdD_IVKSwtt33etaw-5g" target="_blank"
                >
                  <i className="fab fa-youtube text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Youtube</span>
                </a>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Twitter</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  to="/"
                >
                  <i className="fab fa-wpforms text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Instagram</span>
                </NavLink>
              </li>
            
            </ul>
          </div>
       
    </>
  );
}