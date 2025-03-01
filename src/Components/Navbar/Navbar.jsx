import React, { useState } from "react";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";


export default function Templatename() {
   const[counter,setCounter]=useState(0);

  return <>


<nav className="bg-[#2C3E50] fixed  top-0 right-0 left-0 py-5 z-50">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
  
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">START FRAMEWORK
        </span>
    </Link>

    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link  to="About" className="block py-2 px-3 text-white rounded-md md:p-3 focus:bg-teal-500" aria-current="page">About</Link>
        </li>
        <li>
          <Link to="Portfolio" className="block py-2 px-3 text-white rounded-md md:p-3 focus:bg-teal-500">Portfolio</Link>
        </li>
        <li>
          <Link to="Contact" className="block py-2 px-3 text-white rounded-md md:p-3 focus:bg-teal-500">Contact...</Link>
        </li>
  
      </ul>
    </div>
  </div>
</nav>

      
    </>
  ;
}
