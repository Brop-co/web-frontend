import Image from 'next/image'
import React from 'react'


function AboutUs({ }) {
  return (
    <div
    id='about-us'
      className='w-full p-10 bg-[var(--color-2)] text-black h-auto flex items-center justify-evenly'
    >

      <div className='w-[20%]'>
        <Image
          src="/svg/logo_blue.svg"
          width={100}
          height={100}
          alt='Brop Inc Logo - Blue'
          className='w-full'
        />
      </div>

      <div className='w-1/2 flex flex-col gap-5 items-start'>
        <Image
          src="/svg/about_us.svg"
          width={100}
          height={100}
          alt='About Us, Brop Inc'
          className=''
        />

        <p className='leading-8 text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident blanditiis sed fugit numquam, labore libero perspiciatis eveniet accusamus ducimus doloribus nam minus obcaecati facere amet repudiandae rerum quos vitae? Laborum saepe sunt accusantium sit id optio veniam blanditiis, adipisci quidem exercitationem deserunt architecto officiis, delectus cupiditate quas corrupti a earum. Dolores officiis ullam ipsum odio incidunt, pariatur repudiandae hic ipsa?</p>

        <button className='btn btn--unusual'>
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default AboutUs