import React, { useState } from "react";
import style from "./Home.module.css";
import hambozo from "../../Images/avatar.svg";

export default function Templatename() {
  const [counter, setCounter] = useState(0);

  

  return (
    <>
      <div className="h-screen bg-[#1ABC9C] pt-64">
        <div className="text-white text-center px-44 relative">
          <div class="flex justify-center">
            <img
              className="w-32"
              src={hambozo}
              alt="Orange triangle"
            />
          </div>
          <h1 className="font-bold text-4xl mb-1 after:content-[''] after:bg-white after:w-24 after:h-1 after:absolute after:top-48 after:-translate-x-36 before:content-[''] before:bg-white before:w-24 before:h-1 before:absolute before:transform before:translate-x-10 before:translate-y-14">START FRAMEWORK</h1>

            <i className='fa-solid fa-star'></i>
          <h2 className="mt-6">Graphic Artist - Web Designer - Illustrator</h2>
        </div>
      </div>
    </>
  );
}

