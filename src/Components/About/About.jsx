import React, { useState } from "react";
import style from "./About.module.css";
import { useEffect } from "react";

export default function Templatename() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="h-screen bg-[#1ABC9C] pt-64 flex justify-center items-center flex-col">
        <div className="about-content">
          <div className="text-white">
            <h1 className="text-center font-bold text-4xl mb-5">
            Fresh cart - Ecommerce project <a href="https://freshcart-lovat.vercel.app/" target="_blank" rel="noopener noreferrer">
  <i class="fa-solid fa-link"></i>
</a>
            </h1>
            
          
            <div className="flex items-center justify-center gap-8 mb-10">
              <div className="bg-white w-[100px] h-[5px]"></div>
              <i className="fa-solid fa-star"></i>
              <div className="bg-white w-[100px] h-[5px]"></div>
            </div>
          </div>

          <div className={`${style.aboutText}grid grid-cols-1 gap-6 sm:grid-cols-2`}>
            <p className="text-white mb-3  dark:text-gray-400 m-5 text-center">
              <h2>Key Features:</h2>
            -User Authentication & Dynamic Shopping Cart & Wishlist  & User Profile.
            </p>
            <p className="text-white mb-3 dark:text-gray-400 m-5 text-center">
            <h2>Technical Highlights:</h2>
            -Built with React 18 for a dynamic and responsive user interface & Styled with Tailwind CSS & Utilized React Router & Integrated React Query & Implemented Context API.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
