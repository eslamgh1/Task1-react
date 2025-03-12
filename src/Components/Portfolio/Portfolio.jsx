import React, { useState } from "react";
import style from "./Portfolio.module.css";
import pic1 from "../../Images/poert1.png";
import pic2 from "../../Images/port2.png";
import pic3 from "../../Images/port3.png";
import pic7 from "../../Images/1-design.png";
import pic8 from "../../Images/2-design.png";
import pic9 from "../../Images/3-design.png";
import pic10 from "../../Images/4-design.png";
import pic11 from "../../Images/5-design.png";
import pic12 from "../../Images/6-design.png";

export default function ImagePortfolio() {
  const [images, setImages] = useState([pic7, pic8, pic9, pic10, pic11, pic12]);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container pt-44 px-16">
<div className="portfolio-content">
<h1 className="text-center text-slate-800 text-4xl font-bold pb-5 uppercase">projects components</h1>
      <div className="flex items-center justify-center gap-8 pb-5">
          <div className="bg-slate-500 w-[100px] h-[5px]"></div>
          <i className="fa-solid fa-star"></i>
          <div className="bg-slate-500 w-[100px] h-[5px]"></div>
      </div>
</div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        {images.map((image, index) => (
          <div key={index} onClick={() => setSelectedImage(image)}>
            <img
              className="h-auto max-w-full rounded-3xl border border-solid border-black"
              src={image}
              alt="image"
            />
          </div>
        ))}
      </div>

      {/* comment:

    If selectedImage is truthy (not null, undefined, false), React will render the <div>Image is selected!</div>.
    If selectedImage is falsy (like null or false), React will render nothing.
    
    */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setSelectedImage(null)}
        >
          <img
            className="max-w-[250rem] max-h-[25rem]"
            src={selectedImage}
            alt="selectedImage"
          />
        </div>
      )}
    </div>
  );
}
