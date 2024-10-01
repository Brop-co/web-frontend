'use client'

import { projects } from '@/utils/constants'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'


function OurProjects({}) {
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
              projects.map((project,index)=>(
                <div key={index} className='w-full  relative'>
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
                  <div className='w-full absolute left-0 bg-black bottom-0 p-5'>
                    <h1 className='text-[2em]'>
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