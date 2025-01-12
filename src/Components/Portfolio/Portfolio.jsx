import React, { useState } from 'react'
import style from './Portfolio.module.css'
import pic1 from '../../Images/poert1.png'
import pic2 from '../../Images/port2.png'
import pic3 from '../../Images/port3.png'

export default function ImagePortfolio() {
  const [images, setImages] = useState([pic1, pic2, pic3, pic1, pic2, pic3]);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className='container pt-44 px-16 relative'>
      <h1 className='text-center text-slate-800 text-5xl font-bold pb-16 after:content-[""] after:bg-slate-700 after:w-28 after:h-1 after:absolute after:top-[15.25rem] after:right-[35.25rem] before:content-[""] before:bg-slate-700 before:w-24 before:h-1 before:absolute before:top-[15.25rem] before:left-[35.25rem]'>
        PORTFOLIO COMPONENT 
        <div className='text-center my-0 py-0'><i className='fa-solid fa-star'></i></div>
      </h1>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-4'>
        {images.map((image, index) => (
          <div key={index} onClick={() => setSelectedImage(image)}>
            <img className='h-auto max-w-full rounded-2xl' src={image} alt='image' />
          </div>
        ))}
      </div>

    {/* comment:

    If selectedImage is truthy (not null, undefined, false), React will render the <div>Image is selected!</div>.
    If selectedImage is falsy (like null or false), React will render nothing.
    
    */}
      {selectedImage && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center' onClick={() => setSelectedImage(null)}>
          <img className='max-w-[250rem] max-h-[25rem]' src={selectedImage} alt='selectedImage' />
        </div>
      )}
    </div>
  );
}
