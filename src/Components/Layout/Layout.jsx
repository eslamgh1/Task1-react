import React, { useState } from "react";
import style from "./Layout.module.css";

import { Outlet } from "react-router-dom";

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Templatename() {
  const [counter, setCounter] = useState(0);


  return (

    <>
      <Navbar />

      <div className="">
        <Outlet/>
      </div>

      <Footer />
    </>

  );
}
