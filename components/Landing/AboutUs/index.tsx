import Image from 'next/image'
import React from 'react'


function AboutUs({ }) {
  return (
    <div
    id='about-us'
      className='w-full p-10 bg-[var(--color-2)] text-black h-auto flex items-center justify-evenly'
    >

      <div className='w-[20%] sm:block hidden'>
        <Image
          src="/svg/logo_blue.svg"
          width={100}
          height={100}
          alt='Brop Inc Logo - Blue'
          className='w-full'
        />
      </div>

      <div className='w-full sm:w-1/2 flex flex-col gap-5 items-start'>
      <div className='flex items-center gap-5'>
          <Image
            src="/svg/logo_blue.svg"
            width={50}
            height={50}
            alt='Brop Inc Logo - Blue'
            className='sm:hidden block'
          />
          <Image
            src="/svg/about_us.svg"
            width={100}
            height={100}
            alt='About Us, Brop Inc'
            className=''
          />
      </div>

        <p className='leading-8 text-black'>At Brop Co, we are passionate about leveraging technology to transform businesses. Based in Kigali, Rwanda, we offer a full range of software development, web services, branding, and innovative engineering solutions. Our team of seasoned experts combines creativity with technical expertise to deliver top-notch digital solutions tailored to our clients' specific needs. We believe in building lasting partnerships by turning ideas into reality, using cutting-edge technology and a customer-first approach. Whether it's developing mobile apps, designing impactful websites, or integrating AI and IoT into your operations, Brop Co is dedicated to driving your business towards success in the digital age.</p>

        <button className='btn btn--unusual'>
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default AboutUs