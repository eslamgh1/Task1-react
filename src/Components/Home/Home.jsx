import React, { useState } from "react";
import style from "./Home.module.css";
import hambozo from "../../Images/avatar.svg";

export default function Templatename() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="h-screen bg-[#1ABC9C] pt-64 flex justify-center items-center flex-col">
        <div className="text-white text-center relative">
          <div class="flex justify-center">
            <img className="w-32" src={hambozo} alt="Orange triangle" />
          </div>

          <div className="home-content">
            <h1 className="font-bold text-4xl mb-1">START FRAMEWORK</h1>
            <div className="flex justify-between gap-5 p-4">
              <div className="bg-white w-[100px] h-[5px]"></div>
              <i className="fa-solid fa-star"></i>
              <div className="bg-white w-[100px] h-[5px]"></div>
            </div>
          </div>
          <h2 className="mt-6">
            Graphic Artist - Web Designer - Illustrator Eslam
          </h2>
        </div>
      </div>
    </>
  );
}
