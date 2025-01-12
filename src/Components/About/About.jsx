import React, { useState } from 'react'
import style from './About.module.css'
import { useEffect } from 'react'

export default function Templatename() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <div className='h-screen bg-[#1ABC9C] pt-64'>
        <div className='text-white px-44 relative'>
          <h1 className="text-center font-bold text-4xl mb-10 after:content-[''] after:bg-white after:w-24 after:h-1 after:absolute after:transform after:translate-x-9 after:translate-y-5 before:bg-white before:w-24 before:h-1 before:absolute before:transform before:translate-x-10 before:translate-y-14 ">
            ABOUT COMPONENT <br />
            <i className='fa-solid fa-star text-lg'></i>
          </h1>

          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            <p className='text-white mb-3  dark:text-gray-400'>
              Track work across the enterprise through an open, collaborative
              platform. Link issues across Jira and ingest data from other
              software development tools, so your IT support and operations
              teams have richer contextual information to rapidly respond to
              requests, incidents, and changes.
            </p>
            <p className='text-white mb-3 dark:text-gray-400'>
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.Accelerate critical development work,
              eliminate toil, and deploy changes with ease, with a complete
              audit trail for every change.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
