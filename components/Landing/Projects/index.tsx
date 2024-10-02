'use client'

import { projects } from '@/utils/constants'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function OurProjects({ }) {
  return (
    <div
      id='projects'
      className='w-full p-5 bg-[var(--color-1)] text-[var(--white)] h-auto flex flex-col items-center pl-10 pr-10'
    >
      <Image
        src={'/svg/projects_text.svg'}
        width={300}
        height={300}
        alt='Our Amazing Projects'
      />

      <div className='mt-5 w-full grid grid-cols-4  gap-5'>
        {
          projects.map((project, index) => (
            <div key={index} className='w-full relative cursor-pointer group duration-200 rounded-t-3xl overflow-hidden'>
              <h1 className='absolute bg-[var(--color-2)] text-[2em] top-5 left-5 rounded-full text-[var(--color-1)] w-[100px] text-center '>
                {project.category}
              </h1>
              <Image
                src={project.image}
                width={200}
                height={200}
                alt={`Brop Inc, Brop's ${project.name}`}
                className='w-[100%] object-cover'
              />
              <div className='absolute top-0 w-full h-full bg-transparent transition-all duration-300 hover:bg-[rgba(0,0,0,0.8)] left-0 hidden items-center justify-center text-center z-10 group-hover:flex flex-col gap-5 group'>
                <p className='text-[1.1rem] font-bold transition-opacity delay-100 duration-300 opacity-0 group-hover:opacity-100 '>
                  {project.description}
                </p>
                <button className='btn btn--unusual flex items-center justify-center gap-2'>
                  Check it out <span><ArrowUpRight /> </span>
                </button>
              </div>
              <div className='w-full absolute left-0 bg-[rgba(0,0,0,0.7)] group bottom-0 p-5 transition-transform duration-300'>
                <h1 className='text-[2.2em] items-center justify-start gap-3 flex'>
                  {project.name}
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