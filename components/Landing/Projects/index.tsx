import Image from 'next/image'
import React from 'react'

function OurProjects({}) {
  return (
    <div
          className='w-full p-5 bg-[var(--color-1)] text-[var(--white)] h-auto flex items-center justify-evenly pl-10 pr-10'
    >

        <Image
        src={'/svg/projects_text.svg'}
        width={300}
        height={300}
        alt='Our Amazing Projects'
        />
    </div>
  )
}

export default OurProjects