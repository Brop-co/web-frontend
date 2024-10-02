'use client'

import { projects } from '@/utils/constants'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function OurProjects({ }) {
  return (
    <div
      id='projects'
      className='w-full p-5  text-[var(--white)] h-auto flex flex-col items-center pl-10 pr-10'
    >
      <Image
        src={'/svg/projects_text.svg'}
        width={300}
        height={300}
        alt='Our Amazing Projects'
      />
      <div className='mt-5 w-full grid md:grid-cols-2 grid-cols-1  gap-5 sm:p-16 '>
        {
          projects.map((project, index) => (
            <div key={index} className='w-full mr-0 md:mr-5 group'>
              <div className='w-[100%] relative cursor-pointer  mr-0 md:mr-5 group duration-200 rounded-3xl overflow-hidden group-hover:mb-2'>
                <h1 className='absolute bg-[var(--color-2)] text-[2em] top-5 left-5 rounded-full text-[var(--color-1)] w-[100px] text-center z-30'>
                  {project.category}
                </h1>
                <Image
                  src={project.image}
                  width={200}
                  height={200}
                  alt={`Brop Inc, Brop's ${project.name}`}
                  className='w-[100%] h-[550px] object-cover group-hover:scale-105 duration-500'
                />
                <div className='absolute top-0 w-full h-full bg-transparent transition-all duration-300 hover:bg-[rgba(0,0,0,0.8)] left-0 hidden items-center justify-center text-center z-10 group-hover:flex flex-col gap-5 group'>
                  <p className='text-[1.1rem] font-bold transition-opacity delay-100 duration-300 opacity-0 group-hover:opacity-100 '>
                    {project.description}
                  </p>
                  <button className='btn btn--unusual flex items-center justify-center gap-2'>
                    Check it out <span><ArrowUpRight /> </span>
                  </button>
                </div>
              </div>
              <div className='w-full left-0 group bottom-0 p-5 relative font-extrabold uppercase'>
                <h1 className='text-[2.2em] items-center justify-start gap-3 flex transition-all duration-300 transform group-hover:-translate-y-10 group-hover:opacity-0'>
                  {project.name}
                </h1>
                <h1 className='text-[2.2em] items-center justify-start gap-3 flex transition-all duration-300 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible invisible absolute top-0'>
                  {project.name} <ArrowUpRight className="hidden group-hover:block font-extrabold size-10" fontSize={20}/>
                </h1>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default OurProjects